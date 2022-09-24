import { motion } from "framer-motion";
import { Check } from "phosphor-react";
import { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { Input } from "../../components/Atoms/Form/Input";
import { slidePageLeftToRight, slidePageRightToLeft } from "../../components/Atoms/PageAnimations";
import { NavHeader } from "../../components/Molecules/NavHeader";
import { useGoals } from "../../contexts/GoalsContext/useGoals";

export function NewGoal() {
    const initialDate = new Date()
    const [isLoaded, setIsLoaded] = useState(false)

    let [date, setDate] = useState(initialDate.toISOString())

    const navigate = useNavigate()

    useEffect(() => {
        setIsLoaded(true)
    }, [])

    return(
        <motion.div
            variants={!isLoaded ? slidePageRightToLeft : slidePageLeftToRight}
            initial="hidden"
            animate="visible"
            exit="exit"

            className="h-full"
        >  
            <NavHeader />

            <div className="flex flex-col gap-8 p-4">
                <div className="flex flex-col gap-8">
                    <div className="flex flex-col gap-4">
                        <div>
                            <span className="text-sm text-slate-600 dark:text-slate-400">Valor do objetivo</span>
                            <input 
                                type="text" 
                                inputMode="numeric" 
                                placeholder="R$ 0,00" 
                                className="bg-transparent text-3xl py-2 shadow-none border-none outline-none" 
                            />
                        </div>
                        
                        <Input 
                            id="initialAmount"
                            label="Valor inicial" 
                            type="text" 
                            inputMode="numeric" 
                            placeholder="R$ 0,00" 
                        />
                        
                        <Input 
                            id="description"
                            label="Nome do objetivo" 
                            type="text" 
                            inputMode="text" 
                            placeholder="Digite um nome para este objetivo"
                        />

                        <div className="flex flex-col gap-1">
                            <label htmlFor="date" className="text-sm text-slate-600 dark:text-slate-400">
                                Data para alcançar objetivo
                            </label>
                            <input 
                                id="date"
                                type="date" 
                                value={date}
                                onChange={(event) => setDate(event.target.value)}
                                className={`
                                    w-full p-4 py-4 bg-transparent border dark:border-slate-700 rounded-lg focus:outline outline-offset-2 outline-2 outline-brand-700 transition-all duration-150 
                                    ${date === "" ? 'hidden' : 'flex'}
                                `}
                            />
                        </div>
                        
                        <button 
                            className="fixed bottom-20 right-4 p-4 rounded-full bg-brand-700 disabled:opacity-25 transition-all duration-150 text-slate-100"
                            onClick={() => navigate(-1)}
                        >
                            <Check size={24} />
                        </button>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}