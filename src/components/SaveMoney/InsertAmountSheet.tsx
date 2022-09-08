import { Check, X } from "phosphor-react"
import { useRef } from "react"
import { useGoals } from "../../contexts/GoalsContext/useGoals"
import { useSaveMoney } from "../../contexts/SaveMoneyContext/useBankAccount"
import { api } from "../../lib/axios"
import { Goal } from "../Goals/Goal"
import { Sheet } from "../Sheets/Sheet"
import { SheetHeader } from "../Sheets/SheetHeader"
import * as z from 'zod'
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"

const submitSaveMoneySchema = z.object({
    amount: z.number()
})

type SubmitSaveMoney = z.infer<typeof submitSaveMoneySchema>

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

    const {
        control,
        register,
        handleSubmit
    } = useForm<SubmitSaveMoney>({
        resolver: zodResolver(submitSaveMoneySchema)
    })

    async function handleFinishSaveMoney(data: SubmitSaveMoney) {
        const { amount } = data;
        await api.patch(`/goals/${selectedGoal}`, {
            amount,
            updatedAt: new Date()
        })
        setIsInsertAmountSheetOpen(false)
        setIsSaveMoneySheetOpen(false)
    }

    function handleCancel() {
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
                onSubmit={handleSubmit(handleFinishSaveMoney)}
            >
                {
                    goals.filter(item => item.id === selectedGoal).map(goal => {
                        return(
                            <Goal 
                                type="list"
                                description={goal.description}
                                click={() => {setIsInsertAmountSheetOpen(false), setIsSaveMoneySheetOpen(true)}} 
                            />
                        )
                    })
                }

                <div>
                    <span className="text-xs text-zinc-400">Saldo atual da conta</span>
                    <input 
                        type="text" 
                        inputMode="numeric" 
                        placeholder="R$ 0,00" 
                        className="bg-transparent text-2xl py-8 shadow-none border-none outline-none" 
                        {...register('amount')}
                    />
                </div>

                <button 
                    type="submit"
                    className="fixed bottom-20 right-4 p-4 rounded-full bg-emerald-700 text-zinc-100"
                >
                    <Check size={24} />
                </button>
            </form>
        </Sheet>
    )
}