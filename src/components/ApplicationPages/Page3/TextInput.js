import React from "react";

const TextInput = ({
  type = "text",
  name,
  value,
  onChange,
  placeholder,
  className,
  error,
  ...rest
}) => {
  return (
    <div className="mb-4">
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={className}
        {...rest}
      />
      {error && <p className="text-red-500 text-sm">{error}</p>}
    </div>
  );
};

export default TextInput;
