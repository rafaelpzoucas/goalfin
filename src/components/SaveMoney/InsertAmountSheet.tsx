import { Check, X } from "phosphor-react"
import { useRef } from "react"
import { useSaveMoney } from "../../contexts/SaveMoneyContext/useBankAccount"
import { Goal } from "../Goals/Goal"
import { Sheet } from "../Sheets/Sheet"
import { SheetHeader } from "../Sheets/SheetHeader"

export function InsertAmountSheet() {   
    let initialFocus = useRef(null)

    const {
        isInsertAmountSheetOpen,
        setIsInsertAmountSheetOpen,
        setIsSaveMoneySheetOpen
    } = useSaveMoney()

    function handleFinishSaveMoney() {
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

            <div className="flex flex-col gap-8 p-4">
                <Goal 
                    type="select-new-goal"
                    click={() => {setIsInsertAmountSheetOpen(false), setIsSaveMoneySheetOpen(true)}} 
                />

                <div>
                    <span className="text-xs text-zinc-400">Saldo atual da conta</span>
                    <input 
                        ref={initialFocus} 
                        type="text" 
                        inputMode="numeric" 
                        placeholder="R$ 0,00" 
                        className="bg-transparent text-2xl py-8 shadow-none border-none outline-none" 
                    />
                </div>

                <button 
                    className="fixed bottom-20 right-4 p-4 rounded-full bg-emerald-700"
                    onClick={handleFinishSaveMoney}
                >
                    <Check size={24} />
                </button>
            </div>
        </Sheet>
    )
}