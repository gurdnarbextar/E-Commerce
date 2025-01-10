import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../services/authService"; // Importing authService

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await loginUser(email, password); // Calling the loginUser function from authService

    if (response.success) {
      if (!response.user.isVerified) {
        navigate("/verify"); // Redirect to verification page if email is not verified
      } else {
        navigate("/dashboard"); // Redirect to dashboard if verified
      }
    } else {
      setErrorMessage(response.message); // Show error message if login fails
    }
  };

  return (
    <div>
      <h2>Login</h2>
      {errorMessage && <p>{errorMessage}</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Log In</button>
      </form>

      <div>
        <p>
          Not registered?{" "}
          <button onClick={() => navigate("/signup")}>Sign Up</button>
        </p>
        <p>
          Forgot Password?{" "}
          <button onClick={() => navigate("/forgot-password")}>Recover</button>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
