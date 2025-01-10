import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { verifyCode } from "../services/authService"; // Assuming this is your API service for verification

const VerifyCode = () => {
  const [verificationCode, setVerificationCode] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await verifyCode(verificationCode); // Call backend API to verify the code
      if (response.success) {
        navigate("/dashboard"); // Redirect to dashboard after successful verification
      } else {
        setErrorMessage(response.message);
      }
    } catch (error) {
      setErrorMessage("Something went wrong");
    }
  };

  return (
    <div>
      <h2>Enter Verification Code</h2>
      {errorMessage && <p>{errorMessage}</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Verification Code"
          value={verificationCode}
          onChange={(e) => setVerificationCode(e.target.value)}
          required
        />
        <button type="submit">Verify</button>
      </form>
    </div>
  );
};

export default VerifyCode;
