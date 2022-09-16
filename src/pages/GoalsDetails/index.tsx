import { motion } from "framer-motion"
import { Coins, Target } from "phosphor-react"
import { useEffect } from "react"
import { Divider } from "../../components/Atoms/Divider"
import { Shortcut } from "../../components/Atoms/Shortcut"
import { H2 } from "../../components/Atoms/Typography"
import { Goal } from "../../components/Goals/Goal"
import { NavHeader } from "../../components/Molecules/NavHeader"
import { useGoals } from "../../contexts/GoalsContext/useGoals"
import { useSaveMoney } from "../../contexts/SaveMoneyContext/useBankAccount"
import { currencyFormatter } from "../../utils/formatter"

export function GoalsDetails() {
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
        <motion.div 
            className="flex flex-col gap-8 dark:bg-zinc-900"
            initial={{ x: innerWidth }}
            animate={{ x: 0 }}
            exit={{ x: (window.innerWidth) * -1 }}
        >
            <NavHeader 
                navigate="/"
            />
            
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

            <div className="flex flex-col gap-8 p-4 pb-8">
                <H2>Objetivos ativos</H2>
                
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
        </motion.div>
    )
}