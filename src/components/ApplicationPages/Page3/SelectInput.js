import React from "react";

const SelectInput = ({
  name,
  value,
  onChange,
  className,
  option = [],
  error,
}) => {
  return (
    <div className="mb-4">
      <select
        name={name}
        value={value}
        onChange={onChange}
        className={className}
      >
        <option value="">Select Education Level</option>
        {option.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
      {error && <p className="text-red-500 text-sm">{error}</p>}
    </div>
  );
};

export default SelectInput;
