import { CaretRight, Target } from "phosphor-react"
import { Link } from "react-router-dom"
import { GoalProps } from "./goalTypes"

export function GoalCard({ id, description, saved, amount, finalDate }: GoalProps) {

    return(
        <Link
            to={`/goals/${id}`} 
            className="flex flex-col gap-4 rounded-lg border dark:border-none p-4 bg-zinc-100 dark:bg-zinc-800"
        >
            <div className="flex flex-col items-center justify-center gap-4 w-full">
                <header className="flex flex-row items-center justify-between w-full">
                    <div className="flex flex-row items-center gap-4">
                        <div 
                            className="bg-zinc-300 dark:bg-zinc-700 w-fit rounded-full text-xl p-1"
                        >
                            <Target />
                        </div>
                    </div>

                    <CaretRight  />
                </header>

                <strong className="text-sm w-full truncate">
                    {description}
                </strong>
            </div>

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
        </Link>
    )
}