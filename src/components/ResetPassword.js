import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { resetPassword } from "../services/authService"; // Importing authService

const ResetPassword = () => {
  const { token } = useParams(); // Get the reset token from the URL
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (newPassword !== confirmPassword) {
      setErrorMessage("Passwords do not match");
      return;
    }

    const response = await resetPassword(token, newPassword); // Calling the resetPassword function from authService

    if (response.success) {
      setSuccessMessage("Your password has been reset!");
      setTimeout(() => {
        navigate("/login"); // Redirect to login page after success
      }, 3000);
    } else {
      setErrorMessage(response.message); // Show error message if reset fails
    }
  };

  useEffect(() => {
    if (!token) {
      navigate("/login"); // If no token is found in the URL, redirect to login page
    }
  }, [token, navigate]);

  return (
    <div>
      <h2>Reset Password</h2>
      {errorMessage && <p>{errorMessage}</p>}
      {successMessage && <p>{successMessage}</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="password"
          placeholder="New Password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
        <button type="submit">Reset Password</button>
      </form>
    </div>
  );
};

export default ResetPassword;
