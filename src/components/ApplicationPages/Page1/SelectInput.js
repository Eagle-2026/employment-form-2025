import "../../../tailwind.css";

const SelectInput = ({
  name,
  value,
  onChange,
  placeholder,
  option = [],
  error,
  className 
}) => {
  return (
    <div className="mb-4">
      <select
        name={name}
        value={value}
        onChange={onChange}
        className={className}
      >
        <option value="">Select Gender</option>
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
