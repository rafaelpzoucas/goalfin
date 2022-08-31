import { Dialog } from "@headlessui/react";
import { Check, X } from "phosphor-react";
import { useBankAccount } from "../../../../../contexts/BankAccountContext/useBankAccount";
import { BankAccount } from "../../../BankAccounts/BankAccount";
import { Sheet } from "../../../../Sheet";

export function InsertBalanceSheet() {
    const {
        isInsertBalanceSheetOpen,
        setIsInsertBalanceSheetOpen,
        setIsChooseBankSheetOpen
    } = useBankAccount()

    function handleAddBankAccount() {
        setIsInsertBalanceSheetOpen(false)
        setIsChooseBankSheetOpen(false)
    }

    return (
        <Sheet isOpen={isInsertBalanceSheetOpen} onClose={() => setIsInsertBalanceSheetOpen(false)} transition="rightToLeft">
            <Dialog.Title className="flex flex-row p-4">
                <button onClick={() => {setIsInsertBalanceSheetOpen(false), setIsChooseBankSheetOpen(false)}} className="shadow-none outline-none">
                    <X size={32} />
                </button>
            </Dialog.Title>

            <div className="flex flex-col gap-8 p-4">
                <BankAccount 
                    type="select-new-bank" 
                    click={() => {setIsInsertBalanceSheetOpen(false), setIsChooseBankSheetOpen(true)}} 
                />

                <div>
                    <span className="text-xs text-zinc-400">Saldo atual da conta</span>
                    <input type="text" inputMode="numeric" placeholder="R$ 0,00" className="bg-transparent text-2xl py-8 shadow-none border-none outline-none" />
                </div>

                <button 
                    className="fixed bottom-20 right-4 p-4 rounded-full bg-emerald-700"
                    onClick={handleAddBankAccount}
                >
                    <Check size={24} />
                </button>
            </div>
        </Sheet>
    )
}