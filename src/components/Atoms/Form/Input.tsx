import { ArrowArcRight, ArrowRight } from "phosphor-react"
import { useState } from "react"

interface InputProps {
    id?: string
    placeholder?: string
    type?: "text" | "email" | "password" | "number" | "date" | undefined
    inputMode?: "text" | "email" | "search" | "tel" | "url" | "none" | "numeric" | "decimal" | undefined
    inputName?: string
    label?: string
    isBottomFixed?: boolean
    required?: boolean
}

export function Input({ id, placeholder, type, inputMode, label, isBottomFixed, inputName, required }: InputProps) {
    const [fixedOnBottom, setFixedOnBottom] = useState(false)

    function handleFocus() {
        isBottomFixed && setFixedOnBottom(true)
    }

    return (
        <div 
            className={`
                flex flex-col gap-1
                ${fixedOnBottom && 'fixed bottom-14 left-0 z-10 w-full p-4 bg-zinc-100 dark:bg-zinc-800'}
            `}
        >
            {
                label !== "" && 
                <label 
                    htmlFor={id}
                    className="text-sm text-zinc-600 dark:text-zinc-400"
                >
                    {label}
                </label>
            }
            <div className="flex flex-row relative">
                <input 
                    id={id}
                    type={type}
                    placeholder={placeholder} 
                    inputMode={inputMode}
                    className={`
                        w-full p-4 py-4 bg-transparent border dark:border-zinc-700 rounded-lg focus:outline outline-offset-2 outline-2 outline-emerald-700 transition-all duration-150
                    `}
                    onFocus={handleFocus}
                    onBlur={() => setFixedOnBottom(false)}
                    autoComplete="off"
                    name={inputName}
                    required={required}
                />
                {
                    fixedOnBottom &&
                    <button 
                        className="absolute right-0 top-0 p-4"
                        onClick={() => setFixedOnBottom(false)}
                    >
                        <ArrowRight size={20} />
                    </button>
                }
            </div>
        </div>
    )
}