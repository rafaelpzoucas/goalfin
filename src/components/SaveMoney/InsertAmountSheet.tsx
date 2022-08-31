import { Dialog } from "@headlessui/react"
import { Check, X } from "phosphor-react"
import { useSaveMoney } from "../../contexts/SaveMoneyContext/useBankAccount"
import { Goal } from "../Goals/Goal"
import { Sheet } from "../Sheet"

export function InsertAmountSheet() {
    const {
        isInsertAmountSheetOpen,
        setIsInsertAmountSheetOpen,
        setIsSaveMoneySheetOpen
    } = useSaveMoney()

    function handleFinishSaveMoney() {
        setIsInsertAmountSheetOpen(false)
        setIsSaveMoneySheetOpen(false)
    }

    return (
        <Sheet isOpen={isInsertAmountSheetOpen} onClose={() => setIsInsertAmountSheetOpen(false)} transition="rightToLeft">
            <Dialog.Title className="flex flex-row p-4">
                <button onClick={() => {setIsInsertAmountSheetOpen(false), setIsSaveMoneySheetOpen(false)}} className="shadow-none outline-none">
                    <X size={32} />
                </button>
            </Dialog.Title>

            <div className="flex flex-col gap-8 p-4">
                <Goal 
                    type="select-new-goal"
                    click={() => {setIsInsertAmountSheetOpen(false), setIsSaveMoneySheetOpen(true)}} 
                />

                <div>
                    <span className="text-xs text-zinc-400">Saldo atual da conta</span>
                    <input type="text" inputMode="numeric" placeholder="R$ 0,00" className="bg-transparent text-2xl py-8 shadow-none border-none outline-none" />
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