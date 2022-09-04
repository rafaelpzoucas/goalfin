import { CaretRight, DotsThreeVertical, Target } from "phosphor-react"
import { ProgressBar } from "../ProgressBar"

interface GoalProps {
    type?: "list" | "detailed" | "short"
    click?: () => void

    id?: number
    description?: string
    amount?: string
    saved?: string
    finalDate?: string
    createdAt?: string
}

export function Goal({ click, type, description, saved, amount, finalDate }: GoalProps) {

    return (
        <div 
            className={`
                flex flex-col gap-4 rounded-lg
                ${(type === 'detailed' || type === 'short') && 'p-4 bg-zinc-100 border dark:border-none dark:bg-zinc-800'}
            `}
            onClick={click}
        >
            <div className="flex items-center justify-center gap-4">
                <div className="flex flex-col gap-1 w-full">
                    <header 
                        className={`
                            flex flex-row justify-between
                            ${
                                type === 'list' && 'items-center'
                            }
                        `}
                    >
                        <div 
                            className={`
                                flex gap-3
                                ${type === 'detailed' || type === 'list' ? 'items-center flex-row' : 'flex-col'}
                            `}
                        >
                            <div 
                                className={`
                                    bg-zinc-300 dark:bg-zinc-700 w-fit rounded-full text-xl
                                    ${type === 'list' ? 'p-3 text-2xl' : 'p-1'}
                                `}
                            >
                                <Target />
                            </div>
                            <strong 
                                className={`
                                    text-sm
                                    ${type === 'short' && 'max-w-[140px] truncate'}
                                `}
                            >
                                {description}
                            </strong>
                        </div>

                        {
                            type === "short"
                            ? null
                            : <CaretRight size={16} />
                        }
                    </header>
                </div>
            </div>
            {
                type !== "list" && (
                    type === "detailed" ? (
                        <div className="flex flex-col gap-2 w-full">
                            <div className="flex flex-row justify-between text-xs text-zinc-600 dark:text-zinc-400">
                                <span className="text-xs">Faltam R$ 1.800,00</span>
                                <span className="text-xs">{finalDate}</span>
                            </div>
                            <div>
                                <div className="relative w-full h-1 bg-zinc-200 dark:bg-zinc-600">
                                    <div className="absolute w-1/3 h-1 bg-emerald-500"></div>
                                </div>
                            </div>
                            <div className="flex flex-row justify-between">
                                <strong className="text-base text-emerald-600 dark:text-emerald-500">{saved}</strong>
                                <span className="text-xs text-zinc-600 dark:text-zinc-400">{amount}</span>
                            </div>
                        </div>
                    ) : (
                        <div className="flex flex-col gap-4">
                            <div className="flex flex-col">
                                <strong className="text-sm">R$ 50,00</strong>
                                <span className="leading-[0.5rem] text-xs text-zinc-600 dark:text-zinc-400">para este mês</span>
                            </div>
                            <div className="flex flex-col text-xs">
                                <strong className="text-lg">{saved}</strong> 
                                <span className="leading-[0.5rem] text-zinc-600 dark:text-zinc-400">de {amount}</span>
                            </div>
                        </div>
                    )
                )
            }
        </div>
    )
}