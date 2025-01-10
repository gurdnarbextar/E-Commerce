import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { sendPasswordResetEmail } from "../services/authService"; // Importing authService

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await sendPasswordResetEmail(email); // Calling the sendPasswordResetEmail function from authService

    if (response.success) {
      setSuccessMessage("Check your email for the reset link!");
      setTimeout(() => {
        navigate("/login"); // Redirect to login page after success
      }, 3000);
    } else {
      setErrorMessage(response.message); // Show error message if request fails
    }
  };

  return (
    <div>
      <h2>Forgot Password</h2>
      {errorMessage && <p>{errorMessage}</p>}
      {successMessage && <p>{successMessage}</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit">Send Reset Link</button>
      </form>
    </div>
  );
};

export default ForgotPassword;
