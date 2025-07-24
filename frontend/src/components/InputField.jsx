import React from "react";

const InputField = ({ htmlFor, label, type, placeholder, value, setter }) => {
  return (
    <div>
      <label htmlFor={htmlFor} className="sr-only">
        {label}
      </label>
      <input
        type={type}
        id={htmlFor}
        className="w-full px-4 py-3 rounded-md border border-gray-300 bg-gray-100 focus:ring-blue-500 focus:border-blue-500  placeholder-gray-600 font-medium"
        placeholder={placeholder}
        value={value}
        onChange={(e) => setter(e.target.value)}
        required
      />
    </div>
  );
};

export default InputField;
