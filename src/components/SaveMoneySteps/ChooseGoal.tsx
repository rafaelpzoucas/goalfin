import { motion } from "framer-motion";
import { Target } from "phosphor-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useGoals } from "../../contexts/GoalsContext/useGoals";
import { Search } from "../Atoms/Form/Search";
import { slidePageLeftToRight, slidePageRightToLeft } from "../Atoms/PageAnimations";
import { H1 } from "../Atoms/Typography";
import { GoalList } from "../Goals/GoalList";
import { NavHeader } from "../Molecules/NavHeader";

export function ChooseGoal() {    
    const navigate = useNavigate()

    const{
        goals,
        fetchGoals,
        setCurrentStep,
        setSelectedGoal
    } = useGoals()

    function handleChooseGoal(id: number) {
        setCurrentStep("insertAmount")
        setSelectedGoal(id)
    }

    useEffect(() => {
        goals.length === 0 && fetchGoals()
    }, [])

    return(
        <motion.div
            variants={slidePageRightToLeft}
            initial="hidden"
            animate="visible"
            exit="exit"
        >  
            <NavHeader />

            <div className="flex flex-col gap-8 p-4">
                <section className="flex flex-col">
                    <H1>Selecione a sua meta</H1>
                    <div 
                        className="text-sm text-slate-600 dark:text-slate-400"
                    >
                        <span>Qual o seu objetivo guardando este dinheiro?</span>
                    </div>
                </section>

                <button 
                    className="flex flex-row items-center justify-center gap-2 p-4 rounded-lg bg-brand-500 dark:bg-slate-700 text-slate-100"
                    onClick={() => navigate('/new-goal')}
                >
                    <Target size={20} />
                    <strong>
                        Nova meta
                    </strong>
                </button>

                <Search />

                {
                    goals.map(goal => {
                        return (
                            <GoalList 
                                key={goal.id}
                                type="list"
                                click={() => handleChooseGoal(goal.id)}
                                description={goal.description}
                            />
                        )
                    })
                }
            </div>
        </motion.div>
    )
}