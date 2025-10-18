import "../../../tailwind.css";

const TextInput = ({
  name,
  value,
  onChange,
  placeholder,
  type = "text",
  error,
  className,
}) => {
  return (
    <div>
      <div className="mb-4">
        <input
          type={type}
          name={name}
          value={value || ""}
          onChange={onChange}
          placeholder={placeholder}
          className={className}
        />
        {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
      </div>
    </div>
  );
};

export default TextInput;
