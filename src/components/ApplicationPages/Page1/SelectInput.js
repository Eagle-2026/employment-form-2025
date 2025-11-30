const SelectInput = ({
  label,
  name,
  value,
  onChange,
  option = [],
  error,
  className,
}) => {
  return (
    <div className="mb-4">
      {label && <label className="block font-medium mb-1">{label}</label>}

      <select
        name={name}
        value={value}
        onChange={onChange}
        className={`${className} ${error ? "border-red-500" : ""}`}
      >
        <option value="">Select option</option>
        {option.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>

      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
};

export default SelectInput;
