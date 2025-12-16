
const TextInput = ({
  label,
  type = "text",
  name,
  value,
  placeholder,
  onChange,
  error,
  className,
}) => {
  return (
    <div className="mb-4">
      {label && <label className="block font-medium mb-1">{label}</label>}

      <input
        type={type}
        name={name}
        value={value || ""}
        onChange={onChange}
        placeholder={placeholder}
        className={`${className} ${error ? "border-red-500" : ""}`}
      />

      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
};

export default TextInput;
