import React from "react";

const TextAreaInput = ({
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
      <textarea
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

export default TextAreaInput;
