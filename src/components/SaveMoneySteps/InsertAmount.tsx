import { motion } from "framer-motion"
import { Check } from "phosphor-react"
import { useEffect, useState } from "react"
import { useGoals } from "../../contexts/GoalsContext/useGoals"
import { slidePageLeftToRight, slidePageRightToLeft } from "../Atoms/PageAnimations"
import { H1 } from "../Atoms/Typography"
import { GoalList } from "../Goals/GoalList"
import { NavHeader } from "../Molecules/NavHeader"

export function InsertAmount() {
    const [isLoaded, setIsLoaded] = useState(false)

    const {
        goals,
        selectedGoal,
        currentStep,
        setCurrentStep
    } = useGoals()

    useEffect(() => {
        setIsLoaded(true)
        console.log(currentStep)
    }, [])


    return(
        <motion.div
            variants={!isLoaded ? slidePageRightToLeft : slidePageLeftToRight}
            initial="hidden"
            animate="visible"
            exit="exit"

            className="h-screen"
        > 
            <NavHeader
                action="close"
            />

            <form 
                className="flex flex-col gap-8 p-4"
            >
                <section className="flex flex-col">
                    <H1>Quanto você quer guardar?</H1>
                    <div 
                        className="text-sm text-slate-600 dark:text-slate-400"
                    >
                        <span>Saldo disponível: </span>
                        <strong className="text-slate-100"> R$ 7,00</strong>
                    </div>
                </section>

                <div className="flex flex-col">
                    <span className="text-xs text-slate-400">Valor</span>
                    <input 
                        type="text" 
                        inputMode="numeric" 
                        placeholder="R$ 0,00" 
                        className="bg-transparent text-2xl py-2 shadow-none border-none outline-none" 
                    />
                </div>

                {
                    goals.filter(item => item.id === selectedGoal).map(goal => {
                        return(
                            <GoalList 
                                key={goal.id}
                                type="list"
                                description={goal.description}
                                click={() => setCurrentStep("chooseGoal")} 
                            />
                        )
                    })
                }

                <button 
                    type="button"
                    className="fixed bottom-20 right-4 p-4 rounded-full bg-brand-700 text-slate-100"
                    onClick={() => {}}
                >
                    <Check size={24} />
                </button>
            </form>
        </motion.div>
    )
}