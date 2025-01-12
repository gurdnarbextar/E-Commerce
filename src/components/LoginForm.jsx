import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { loginUser } from "../services/authService"; // Make sure this path is correct
import InputField from "./InputField";
import Button from "./Button";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false); // Loading state
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true); // Set loading state

    try {
      const response = await loginUser(email, password);

      if (response.success) {
        if (!response.user.isVerified) {
          navigate("/verify");
        } else {
          navigate("/dashboard");
        }
      } else {
        setErrorMessage(response.message);
      }
    } catch (error) {
      setErrorMessage("An error occurred during login");
      console.error("An error occurred during login:", error);
    } finally {
      setIsLoading(false); // Reset loading state, regardless of success or failure
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
      <div className="bg-white dark:bg-gray-800 p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white text-center">
          Sign In to Your Account
        </h2>
        {errorMessage && (
          <p className="text-red-500 mb-4 text-center">{errorMessage}</p>
        )}
        <form onSubmit={handleSubmit} className="space-y-4">
          <InputField
            type="email"
            placeholder="Your Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <div className="relative">
            <InputField
              type={showPassword ? "text" : "password"}
              placeholder="Your Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute inset-y-0 right-2 flex items-center text-gray-500 dark:text-gray-400 focus:outline-none"
            >
              {showPassword ? "👁️" : "🔒"}
            </button>
          </div>

          <Button type="submit" loading={isLoading} disabled={isLoading}>
            Sign In
          </Button>
        </form>
        <div className="mt-4 text-center text-gray-600 dark:text-gray-400 text-sm">
          <Link to="/forgot-password" className="text-blue-500 hover:underline">
            Forgot your password?
          </Link>
        </div>
        <div className="mt-4 text-center text-gray-600 dark:text-gray-400 text-sm">
          Don't have an account?{" "}
          <Link to="/signup" className="text-blue-500 hover:underline">
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
