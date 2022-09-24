import { CaretRight } from "phosphor-react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useGoals } from "../../contexts/GoalsContext/useGoals";
import { currencyFormatter } from "../../utils/formatter";
import { H2 } from "../Atoms/Typography";
import { GoalCard } from "./GoalCard";
import { GoalSkeleton } from "./GoalSkeleton";

export function Goals() {
    const {
        goals,
        fetchGoals
    } = useGoals()

    useEffect(() => {
        fetchGoals()
    }, [])
    
    return (
        <div className="flex flex-col gap-8 px-4 py-8">
            <Link to="goals">
                <section
                    className="flex flex-col items-start justify-between gap-8"
                >
                    <header className="flex flex-row justify-between w-full">
                        <H2>Objetivos</H2>

                        <CaretRight />
                    </header>

                    <div className="flex flex-col gap-1">
                        <span className="text-xs text-slate-600 dark:text-slate-400">Guardar este mês</span>
                        <strong className="text-2xl">R$ 500,00</strong>
                    </div>
                </section>
            </Link>
            <section className="flex flex-col gap-8">


                <div className="grid grid-cols-2 gap-4">
                    {
                        goals.length !== 0 ? (
                            goals.map(goal => {
                                return (
                                    <GoalCard 
                                        type="short" 
                                        key={goal.id}
                                        id={goal.id}
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
                            </>
                        )
                    }
                </div>

            </section>
        </div>
    )
}