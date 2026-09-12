interface FormFieldProps {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  textarea?: boolean;
  rows?: number;
  // className now targets the wrapper div (optional override)
  className?: string;
  // inputClassName targets the input/textarea element itself
  inputClassName?: string;
  // labelClassName overrides the label text colour (default: text-black/40)
  labelClassName?: string;
  value?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
}

export function FormField({
  label,
  name,
  type = "text",
  placeholder,
  required = false,
  textarea = false,
  rows = 5,
  className,
  inputClassName,
  labelClassName,
  value,
  onChange,
}: FormFieldProps) {
  const baseInputStyles =
    "w-full bg-transparent border-0 outline-none px-0 py-5 text-lg placeholder:text-black/30 focus:ring-0";

  const inputStyles = inputClassName
    ? `${baseInputStyles} ${inputClassName}`
    : baseInputStyles;

  return (
    <div
      className={
        className ?? "border-b border-black/15 px-0 md:px-6 first:md:border-r"
      }
    >
      <label
        htmlFor={name}
        className={`block pt-6 text-xs uppercase tracking-[0.2em] ${
          labelClassName ?? "text-black/40"
        }`}
      >
        {label}
      </label>

      {textarea ? (
        <textarea
          id={name}
          name={name}
          rows={rows}
          required={required}
          placeholder={placeholder ?? "Tell us a little more..."}
          className={inputStyles}
          value={value}
          onChange={onChange as React.ChangeEventHandler<HTMLTextAreaElement>}
        />
      ) : (
        <input
          id={name}
          type={type}
          name={name}
          required={required}
          placeholder={placeholder}
          className={inputStyles}
          value={value}
          onChange={onChange as React.ChangeEventHandler<HTMLInputElement>}
        />
      )}
    </div>
  );
}
