import { MutableRefObject, useRef } from "react"

interface MoneyInputProps {
    focus: MutableRefObject<HTMLElement | null>
}

export function MoneyInput({ focus }: MoneyInputProps) {
    let initialFocus = useRef(null)

    return (
        <div>
            <span className="text-xs text-slate-400">Saldo atual da conta</span>
            <input 
                ref={initialFocus} 
                type="text" 
                inputMode="numeric" 
                placeholder="R$ 0,00" 
                className="bg-transparent text-2xl py-8 shadow-none border-none outline-none" 
            />
        </div>
    )
}