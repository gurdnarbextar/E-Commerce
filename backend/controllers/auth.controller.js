import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import nodemailer from "nodemailer";

// Function to register a new user
export const registerUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Check if the user already exists
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user
    const user = new User({ email, password: hashedPassword });
    await user.save();

    // Send verification email (this logic is assumed to be implemented)
    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

// Function to login a user
export const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    // Send back success response (You can use JWT here if needed)
    res.status(200).json({ message: "Login successful", user });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

// Function to logout a user
export const logoutUser = (req, res) => {
  // Implement logout logic (for example, by clearing JWT from client-side)
  res.status(200).json({ message: "Logout successful" });
};

// Function to verify a user's email
export const verifyUser = async (req, res) => {
  const { email, verificationCode } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }

    if (user.verificationCode !== verificationCode) {
      return res.status(400).json({ message: "Invalid verification code" });
    }

    user.isVerified = true;
    await user.save();

    res.status(200).json({ message: "Email verified successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

// Function to send the password reset email
export const sendResetEmail = async (req, res) => {
  const { email } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }

    const resetToken = Math.floor(100000 + Math.random() * 900000); // Example: generate a 6-digit reset token
    user.resetToken = resetToken;
    await user.save();

    // Send reset token to the user's email
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Password Reset Request",
      text: `Your password reset token is: ${resetToken}`,
    };

    await transporter.sendMail(mailOptions);

    res.status(200).json({ message: "Password reset email sent" });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

// Function to reset the password
export const resetPassword = async (req, res) => {
  const { token, newPassword } = req.body;

  try {
    const user = await User.findOne({ resetToken: token });
    if (!user) {
      return res.status(400).json({ message: "Invalid token" });
    }

    const hashedPassword = await bcrypt.hash(newPassword, 10);
    user.password = hashedPassword;
    user.resetToken = undefined; // Clear the reset token after successful reset
    await user.save();

    res.status(200).json({ message: "Password reset successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};
