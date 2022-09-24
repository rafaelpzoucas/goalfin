import { CaretRight, Target } from "phosphor-react"
import { Link } from "react-router-dom"
import { GoalProps } from "./goalTypes"

export function GoalCard({ id, description, saved, amount, finalDate }: GoalProps) {

    return(
        <Link
            to={`/goals/${id}`} 
            className="flex flex-col gap-4 rounded-lg border dark:border-none p-4 bg-slate-100 dark:bg-slate-800"
        >
            <div className="flex flex-col items-center justify-center gap-4 w-full">
                <header className="flex flex-row items-center justify-between w-full">
                    <div className="flex flex-row items-center gap-4">
                        <div 
                            className="bg-slate-300 dark:bg-slate-700 w-fit rounded-full text-xl p-1"
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
                    <span className="leading-[0.5rem] text-xs text-slate-600 dark:text-slate-400">para este mês</span>
                </div>
                <div className="flex flex-col text-xs">
                    <strong className="text-lg">{saved}</strong> 
                    <span className="leading-[0.5rem] text-slate-600 dark:text-slate-400">de {amount}</span>
                </div>
            </div>
        </Link>
    )
}