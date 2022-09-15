import { CaretRight } from "phosphor-react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useGoals } from "../../contexts/GoalsContext/useGoals";
import { currencyFormatter } from "../../utils/formatter";
import { H2 } from "../Atoms/Typography";
import { Goal } from "./Goal";
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
                    className="flex flex-col items-start justify-between"
                >
                    <header className="flex flex-row justify-between w-full">
                        <H2>Objetivos</H2>

                        <CaretRight />
                    </header>

                </section>
            </Link>
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
                            </>
                        )
                    }
                </div>

            </section>
        </div>
    )
}