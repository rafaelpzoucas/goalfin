import { ReactNode } from "react"

interface ShortcutProps {
    children: ReactNode
    label: string
    click?: () => void
}

export function Shortcut({ children, label, click }: ShortcutProps) {
    return (
        <div className="flex flex-col items-center gap-2" onClick={click}>
            <div className="p-5 rounded-lg bg-slate-100 border dark:border-none dark:bg-slate-800 text-2xl">
                {children}
            </div>
            <span className="text-xs">{label}</span>
        </div>
    )
}