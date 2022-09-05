import { CaretRight } from "phosphor-react";
import { useEffect } from "react";
import { useGoals } from "../../contexts/GoalsContext/useGoals";
import { useSaveMoney } from "../../contexts/SaveMoneyContext/useBankAccount";
import { currencyFormatter } from "../../utils/formatter";
import { SaveMoneySheet } from "../SaveMoney/SaveMoneySheet";
import { Goal } from "./Goal";
import { GoalsDetailsSheet } from "./GoalsDetailsSheet";
import { GoalSkeleton } from "./GoalSkeleton";

export function Goals() {
    const {
        setIsGoalsDetailsSheetOpen,
        loadGoals,
        loadGoals2,
        goals
    } = useGoals()

    useEffect(() => {
        loadGoals2()
    }, [])
    
    return (
        <>
        <div className="flex flex-col gap-8 px-4 py-8">
            <section
                onClick={() => setIsGoalsDetailsSheetOpen(true)} 
                className="flex flex-col items-start justify-between"
            >
                <header className="flex flex-row justify-between w-full">
                    <strong>Objetivos</strong>

                    <CaretRight />
                </header>

            </section>
            <section className="flex flex-col gap-8">
                <div className="flex flex-col gap-1">
                    <span className="text-xs text-zinc-600 dark:text-zinc-400">Guardar este mês</span>
                    <strong className="text-2xl">R$ 500,00</strong>
                </div>


                <div className="grid grid-cols-2 gap-4">
                    {
                        goals.length !== 0 ? (
                            goals.map(goal => {
                                return (
                                    <Goal 
                                        type="short" 
                                        key={goal.id}
                                        description={goal.description}
                                        saved={currencyFormatter.format(goal.saved)}
                                        amount={currencyFormatter.format(goal.amount)}
                                    />
                                )
                            })
                        ) : (
                            <>
                                <GoalSkeleton />
                                <GoalSkeleton />
                                <GoalSkeleton />
                                <GoalSkeleton />
                                <GoalSkeleton />
                            </>
                        )
                    }
                </div>

            </section>
            
            <GoalsDetailsSheet />
        </div>
        
        </>
    )
}