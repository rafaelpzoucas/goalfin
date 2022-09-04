import { Coins } from "phosphor-react";
import { useEffect } from "react";
import { useGoals } from "../../../../contexts/GoalsContext/useGoals";
import { currencyFormatter } from "../../../../utils/formatter";
import { Goal } from "../../Goal";

export function ActiveGoals() {
    const {
        setIsGoalsDetailsSheetOpen,
        loadGoals,
        loadGoals2,
        goals
    } = useGoals()

    useEffect(() => {
        loadGoals()
    }, [])
    
    return (
        <div className="flex flex-col gap-8 p-4 dark:bg-zinc-900">
            <div className="flex flex-col">
                <span className="text-xs text-zinc-400">Falta economizar este mês</span>
                <strong className="text-2xl">R$ 50,00</strong>
            </div>
            
            <div className="flex gap-4">
                <div className="flex flex-col w-full p-4 rounded-lg border dark:border-none bg-zinc-100 dark:bg-zinc-800">
                    <span className="text-xs text-zinc-600 dark:text-zinc-400">Total em objetivos</span>
                    <strong className="text-xl">R$ 500,00</strong>
                </div>
                <div className="flex flex-col w-full p-4 rounded-lg border dark:border-none bg-zinc-100 dark:bg-zinc-800">
                    <span className="text-xs text-zinc-600 dark:text-zinc-400">Total economizado</span>
                    <strong className="text-xl">R$ 50,00</strong>
                </div>
            </div>


            <button 
                className="flex items-center justify-center gap-2 p-4 rounded-lg text-zinc-100 bg-emerald-600 dark:bg-zinc-700"
                onClick={() => {}}
            >
                <Coins size={20} />
                <span>Novo objetivo</span>
            </button>

            <div className="flex flex-col gap-2">
                {
                    goals.map(goal => {
                        return (
                            <Goal 
                                type="detailed" 
                                key={goal.id}
                                description={goal.description}
                                saved={currencyFormatter.format(goal.saved)}
                                amount={currencyFormatter.format(goal.amount)}
                            />
                        )
                    })
                }
            </div>
        </div>
    )
}