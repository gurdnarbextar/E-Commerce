import React from "react";

const InputField = ({
  type,
  placeholder,
  value,
  onChange,
  required,
  error,
  errorMessage,
}) => {
  return (
    <div>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`w-full px-4 py-2 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:outline-none focus:border-blue-500
                  ${error ? "border-red-500" : ""}
                 `}
        required={required}
      />
      {errorMessage && <p className="text-red-500 text-sm">{errorMessage}</p>}
    </div>
  );
};

export default InputField;
