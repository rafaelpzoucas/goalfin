import { ArrowDown, ArrowUp } from "phosphor-react";

export function Summary() {
    return (
        <div className="grid grid-cols-2 gap-2">
            <div className="flex items-center gap-2 p-3 rounded-lg bg-zinc-100 dark:bg-zinc-800">
                <div className="text-xl p-1 rounded-full w-fit bg-zinc-200 dark:bg-emerald-900 dark:bg-opacity-25 text-emerald-600 dark:text-emerald-500">
                    <ArrowDown />
                </div>
                <div className="flex flex-col">
                    <span className="text-zinc-500 dark:text-zinc-400 text-xs">Recebi este mês</span>
                    <span className="text-emerald-600 dark:text-emerald-500">
                        R$ 20.000,00
                    </span>
                </div>
            </div>
            <div className="flex items-center gap-2 p-3 rounded-lg bg-zinc-100 dark:bg-zinc-800">
                <div className="text-xl p-1 rounded-full w-fit bg-zinc-200 dark:bg-red-900 dark:bg-opacity-25 text-red-600 dark:text-red-500">
                    <ArrowUp />
                </div>
                <div className="flex flex-col">
                    <span className="text-zinc-500 dark:text-zinc-400 text-xs">Gastei este mês</span>
                    <span className="text-red-600 dark:text-red-500">
                        R$ 200,00
                    </span>
                </div>
            </div>
        </div>
    )
}