import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { signupUser } from "../services/authService";
import InputField from "./InputField";
import Button from "./Button";

const SignupForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false); // Loading state
  const navigate = useNavigate();
  const [passwordMatch, setPasswordMatch] = useState(true); // Initialize to true
  const [passwordStrength, setPasswordStrength] = useState("");

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    if (newPassword.length === 0) {
      setPasswordStrength("");
      return; //exit if the string is empty
    }

    if (newPassword.length < 8) {
      setPasswordStrength("Weak");
    } else if (newPassword.length < 12) {
      setPasswordStrength("Medium");
    } else {
      setPasswordStrength("Strong");
    }
  };
  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);

    if (password && e.target.value !== password) {
      setPasswordMatch(false);
    } else {
      setPasswordMatch(true);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true); //set loading state

    if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match");
      setIsLoading(false); //set loading to false, as we're not sending anything to the backend
      return; //exit
    }
    if (!termsAccepted) {
      setErrorMessage("Please accept the terms and conditions");
      setIsLoading(false);
      return; //exit
    }

    try {
      const response = await signupUser(email, password);
      if (response.success) {
        navigate("/verify"); // Redirect to the verification page
      } else {
        setErrorMessage(response.message);
      }
    } catch (error) {
      setErrorMessage("Something went wrong");
    } finally {
      setIsLoading(false); //reset loading state
    }
  };
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
      <div className="bg-white dark:bg-gray-800 p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white text-center">
          Sign Up
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
          <InputField
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
          {passwordStrength && (
            <p
              className={`text-sm ${
                passwordStrength === "Weak"
                  ? "text-red-500"
                  : passwordStrength === "Medium"
                  ? "text-yellow-500"
                  : "text-green-500"
              }`}
            >
              Password Strength: {passwordStrength}
            </p>
          )}
          <InputField
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
            error={!passwordMatch} // add error property
            errorMessage={!passwordMatch ? "Passwords do not match" : null}
            required
          />
          <div className="flex items-center">
            <input
              type="checkbox"
              id="terms"
              checked={termsAccepted}
              onChange={(e) => setTermsAccepted(e.target.checked)}
              className="mr-2 rounded border-gray-400 dark:bg-gray-700 dark:border-gray-600 focus:ring-blue-500"
              required
            />
            <label
              htmlFor="terms"
              className="text-gray-700 dark:text-gray-300 text-sm"
            >
              I agree to the{" "}
              <Link to="/terms" className="text-blue-500 hover:underline">
                Terms and Conditions
              </Link>
            </label>
          </div>
          <Button
            type="submit"
            loading={isLoading}
            disabled={isLoading || !termsAccepted || !passwordMatch}
          >
            Sign Up
          </Button>
        </form>
      </div>
    </div>
  );
};

export default SignupForm;
