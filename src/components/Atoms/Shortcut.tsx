import { ReactNode } from "react"

interface ShortcutProps {
    children: ReactNode
    label: string
}

export function Shortcut({ children, label }: ShortcutProps) {
    return (
        <div className="flex flex-col items-center gap-2">
            <div className="p-5 rounded-lg bg-zinc-200 dark:bg-zinc-800 text-2xl">
                {children}
            </div>
            <span className="text-xs">{label}</span>
        </div>
    )
}