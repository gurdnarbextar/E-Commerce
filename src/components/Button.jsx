import React from "react";

const Button = ({ type, children, loading, disabled }) => {
  return (
    <button
      type={type}
      disabled={disabled}
      className={`w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50
            ${disabled ? "opacity-50 cursor-not-allowed" : ""}
            `}
    >
      {loading ? <span className="animate-spin">Loading...</span> : children}
    </button>
  );
};

export default Button;
