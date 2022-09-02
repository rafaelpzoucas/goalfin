interface InputProps {
    id?: string
    placeholder?: string
    type?: "text" | "email" | "password" | "number" | "date" | undefined
    inputMode?: "text" | "email" | "search" | "tel" | "url" | "none" | "numeric" | "decimal" | undefined
    label?: string
}

export function Input({ id, placeholder, type, inputMode, label }: InputProps) {
    return (
        <div className="flex flex-col gap-1">
        {
        label !== "" && 
        <label 
            htmlFor={id}
            className="text-sm text-zinc-400"
        >
            {label}
        </label>
        }
        <input 
            id={id}
            type={type}
            placeholder={placeholder} 
            inputMode={inputMode}
            className="w-full p-4 py-4 bg-transparent border border-zinc-300 dark:border-zinc-700 rounded-lg focus:outline outline-offset-2 outline-4 outline-emerald-700 transition-all duration-150" 
        />
        </div>
    )
}