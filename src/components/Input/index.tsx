interface InputProps {
    id?: string
    placeholder?: string
    type?: "text" | "email" | "password" | "number" | undefined
    inputMode?: "text" | "email" | "search" | "tel" | "url" | "none" | "numeric" | "decimal" | undefined
    hasLabel?: boolean
}

export function Input({ id, placeholder, type, inputMode, hasLabel }: InputProps) {
    return (
        <>
        <label htmlFor={id}></label>
        <input 
            id={id}
            type={type}
            placeholder={placeholder} 
            inputMode={inputMode}
            className="w-full pl-12 pr-4 py-4 bg-transparent border border-zinc-700 rounded-lg focus:outline outline-offset-2 outline-4 outline-emerald-700 transition-all duration-150" 
        />
        </>
    )
}