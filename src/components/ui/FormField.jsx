export default function FormField({ 
    label, 
    name, 
    type = "text", 
    value, 
    onChange, 
    isRequired = true,
    options,
    ...rest
}) {
    return (
        <div className="flex flex-col">
            <label
                htmlFor={name}
                className="text-sm font-medium text-stone-50 mb-3"
            >
                {label}
            </label>

            {type === "select" && options ? (
                <select
                    id={name}
                    name={name}
                    value={value}
                    onChange={onChange}
                    required={isRequired}
                    className="bg-transparent text-white border border-stone-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-stone-400"
                    {...rest}
                >
                    <option value="">Select {label}</option>
                    {options.map(opt => (
                        <option key={opt} value={opt}>{opt}</option>
                    ))}
                </select>
            ) : (
                <input
                    id={name}
                    name={name}
                    type={type}
                    value={value}
                    onChange={onChange}
                    required={isRequired}
                    className="bg-transparent text-white border border-stone-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-stone-400"
                />
            )}
        </div>
    )
}