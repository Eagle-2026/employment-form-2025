import "../../../tailwind.css";

const TextInput = ({
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
      <input
        type={type}
        name={name}
        value={value || ""}
        onChange={onChange}
        placeholder={placeholder}
        className={className}
      />
      {error && <p className="text-red-500 text-sm">{error}</p>}
    </div>
  );
};

export default TextInput;
