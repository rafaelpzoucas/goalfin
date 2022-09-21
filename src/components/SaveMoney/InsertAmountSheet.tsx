import { Check } from "phosphor-react"
import { useRef } from "react"
import { useGoals } from "../../contexts/GoalsContext/useGoals"
import { useSaveMoney } from "../../contexts/SaveMoneyContext/useBankAccount"
import { H1 } from "../Atoms/Typography"
import { GoalList } from "../Goals/GoalList"
import { Sheet } from "../Sheets/Sheet"
import { SheetHeader } from "../Sheets/SheetHeader"

export function InsertAmountSheet() {   
    let initialFocus = useRef(null)

    const {
        isInsertAmountSheetOpen,
        setIsInsertAmountSheetOpen,
        setIsSaveMoneySheetOpen
    } = useSaveMoney()

    const {
        goals,
        selectedGoal
    } = useGoals()

    function handleCancel() {
        setIsInsertAmountSheetOpen(false)
        setIsSaveMoneySheetOpen(false)
    }
    
    function handleFinish() {
        setIsInsertAmountSheetOpen(false)
        setIsSaveMoneySheetOpen(false)
    }

    return (
        <Sheet 
            isOpen={isInsertAmountSheetOpen} 
            onClose={() => setIsInsertAmountSheetOpen(false)} 
            initialFocus={initialFocus}
            transition="rightToLeft"
        >
            <SheetHeader 
                action={handleCancel} 
                type="close"
            />


            <form 
                className="flex flex-col gap-8 p-4"
            >
                <section className="flex flex-col">
                    <H1>Quanto você quer guardar?</H1>
                    <div 
                        className="text-sm text-zinc-600 dark:text-zinc-400"
                    >
                        <span>Saldo disponível: </span>
                        <strong className="text-zinc-100"> R$ 7,00</strong>
                    </div>
                </section>

                <div className="flex flex-col">
                    <span className="text-xs text-zinc-400">Valor</span>
                    <input 
                        ref={initialFocus}
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
                                click={() => {setIsInsertAmountSheetOpen(false), setIsSaveMoneySheetOpen(true)}} 
                            />
                        )
                    })
                }

                <button 
                    type="button"
                    className="fixed bottom-20 right-4 p-4 rounded-full bg-emerald-700 text-zinc-100"
                    onClick={handleFinish}
                >
                    <Check size={24} />
                </button>
            </form>
        </Sheet>
    )
}