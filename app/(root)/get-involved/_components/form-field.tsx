interface FormFieldProps {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  textarea?: boolean;
  rows?: number;
  className?: string;
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
}: FormFieldProps) {
  const inputStyles =
    "w-full bg-transparent border-0 outline-none px-0 py-5 text-lg placeholder:text-black/30 focus:ring-0";

  return (
    <div
      className={
        className ??
        "border-b border-black/15 px-0 md:px-6 first:md:border-r"
      }
    >
      <label
        htmlFor={name}
        className="block pt-6 text-xs uppercase tracking-[0.2em] text-black/40"
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
        />
      ) : (
        <input
          id={name}
          type={type}
          name={name}
          required={required}
          placeholder={placeholder}
          className={inputStyles}
        />
      )}
    </div>
  );
}
