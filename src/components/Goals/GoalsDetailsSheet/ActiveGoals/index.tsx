import { Coins, Divide, Target } from "phosphor-react";
import { useEffect } from "react";
import { useGoals } from "../../../../contexts/GoalsContext/useGoals";
import { useSaveMoney } from "../../../../contexts/SaveMoneyContext/useBankAccount";
import { currencyFormatter } from "../../../../utils/formatter";
import { Divider } from "../../../Atoms/Divider";
import { Shortcut } from "../../../Atoms/Shortcut";
import { H2 } from "../../../Atoms/Typography";
import { Goal } from "../../Goal";

export function ActiveGoals() {
    const {
        setIsNewGoalSheetOpen,
        fetchGoals,
        goals
    } = useGoals()

    const {
        setIsSaveMoneySheetOpen
    } = useSaveMoney()

    useEffect(() => {
        fetchGoals()
    }, [])
    
    return (
        <div className="flex flex-col gap-8 pt-8 dark:bg-zinc-900">
            <div className="flex flex-col px-4">
                <span className="text-xs text-zinc-600 dark:text-zinc-400">Falta economizar este mês</span>
                <strong className="text-2xl">R$ 50,00</strong>
            </div>

            <section className="flex flex-row flex-start gap-4 px-4">
                <Shortcut label="Guardar" click={() => setIsSaveMoneySheetOpen(true)}>
                    <Coins />
                </Shortcut>
                <Shortcut label="Objetivo" click={() => setIsNewGoalSheetOpen(true)}>
                    <Target />
                </Shortcut>
            </section>

            <Divider />

            <div className="flex flex-col gap-8 p-4">
                <H2>Meus objetivos</H2>
                
                <div className="grid grid-cols-2 gap-4">
                    {
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
                    }
                </div>
            </div>
        </div>
    )
}