import { motion } from "framer-motion"
import { Coins, Target } from "phosphor-react"
import { useEffect } from "react"
import { Divider } from "../../components/Atoms/Divider"
import { slidePageRightToLeft } from "../../components/Atoms/PageAnimations"
import { Shortcut } from "../../components/Atoms/Shortcut"
import { H2 } from "../../components/Atoms/Typography"
import { GoalCard } from "../../components/Goals/GoalCard"
import { NewGoalSheet } from "../../components/Goals/NewGoalSheet"
import { NavHeader } from "../../components/Molecules/NavHeader"
import { useGoals } from "../../contexts/GoalsContext/useGoals"
import { useSaveMoney } from "../../contexts/SaveMoneyContext/useBankAccount"
import { currencyFormatter } from "../../utils/formatter"

export function GoalsSummary() {
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
    

    return(
        <>
        <motion.div
            variants={slidePageRightToLeft}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="flex flex-col gap-8 overflow-x-hidden dark:bg-slate-900"
            >
            <NavHeader />
            
            <div className="flex flex-col px-4">
                <span className="text-xs text-slate-600 dark:text-slate-400">Falta economizar este mês</span>
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

            <div className="flex flex-col gap-8 p-4 pb-8">
                <H2>Objetivos ativos</H2>
                
                <div className="grid grid-cols-2 gap-4">
                    {
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
                        }
                </div>
            </div>
        </motion.div>

        {/* <SaveMoneySheet /> */}
        <NewGoalSheet/>
        </>
    )
}