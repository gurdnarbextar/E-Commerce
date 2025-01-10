import express from "express";
import {
  registerUser,
  loginUser,
  logoutUser,
  verifyUser,
  sendResetEmail,
  resetPassword,
} from "../controllers/auth.controller.js";

const router = express.Router();

// Route to register a user
router.post("/register", registerUser);

// Route to login a user
router.post("/login", loginUser);

// Route to logout a user
router.get("/logout", logoutUser);

// Route to verify the user's email with the verification code
router.post("/verify", verifyUser);

// Route for sending password reset email
router.post("/forgot-password", sendResetEmail);

// Route for resetting password
router.post("/reset-password", resetPassword);

export default router;
