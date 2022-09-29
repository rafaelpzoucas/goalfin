import { Dialog, Listbox, RadioGroup, Transition } from "@headlessui/react";
import { ArrowDownRight, ArrowUpRight, Bank, CaretDown, Check, X } from "phosphor-react";
import { Fragment, useRef, useState } from "react";
import { useGoals } from "../../contexts/GoalsContext/useGoals";
import { DateInput } from "../Atoms/Form/DateInput";
import { Input } from "../Atoms/Form/Input";
import { H2 } from "../Atoms/Typography";
import { Sheet } from "../Sheets/Sheet";
import { SheetHeader } from "../Sheets/SheetHeader";

export function NewGoalSheet() {
    const initialDate = new Date()
    let initialFocus = useRef(null)

    const {
        isNewGoalSheetOpen,
        setIsNewGoalSheetOpen
    } = useGoals()

    let [date, setDate] = useState(initialDate.toISOString())
    
    return (
        <Sheet 
            isOpen={isNewGoalSheetOpen} 
            onClose={() => setIsNewGoalSheetOpen(false)} 
            initialFocus={initialFocus}
            transition="rightToLeft"
        >
            <SheetHeader 
                action={() => setIsNewGoalSheetOpen(false)} 
                type="back" 
            />

            <div className="flex flex-col gap-8 p-4">
                <div className="flex flex-col gap-8">
                    <div className="flex flex-col gap-4">
                        <div>
                            <span className="text-sm text-slate-600 dark:text-slate-400">Valor da meta</span>
                            <input 
                                ref={initialFocus} 
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
                            label="Nome da meta" 
                            type="text" 
                            inputMode="text" 
                            placeholder="Digite um nome para esta meta"
                        />

                        <div className="flex flex-col gap-1">
                            <label htmlFor="date" className="text-sm text-slate-600 dark:text-slate-400">
                                Data para alcançar a meta
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
                            onClick={() => setIsNewGoalSheetOpen(false)}
                        >
                            <Check size={24} />
                        </button>
                    </div>
                </div>
            </div>
        </Sheet>
    )
}