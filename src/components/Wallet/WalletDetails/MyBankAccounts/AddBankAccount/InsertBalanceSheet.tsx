import { Dialog } from "@headlessui/react";
import { Check, X } from "phosphor-react";
import { useBankAccount } from "../../../../../contexts/BankAccountContext/useBankAccount";
import { BankAccount } from "../../../BankAccounts/BankAccount";
import { Sheet } from "../../../../Sheets/Sheet";
import { SheetHeader } from "../../../../Sheets/SheetHeader";
import { useRef } from "react";

export function InsertBalanceSheet() {
    let initialFocus = useRef(null)

    const {
        isInsertBalanceSheetOpen,
        setIsInsertBalanceSheetOpen,
        setIsChooseBankSheetOpen
    } = useBankAccount()

    function handleAddBankAccount() {
        setIsInsertBalanceSheetOpen(false)
        setIsChooseBankSheetOpen(false)
    }

    function handleCancel() {
        setIsInsertBalanceSheetOpen(false)
        setIsChooseBankSheetOpen(false)
    }

    return (
        <Sheet 
            isOpen={isInsertBalanceSheetOpen} 
            onClose={() => setIsInsertBalanceSheetOpen(false)}
            initialFocus={initialFocus}
            transition="rightToLeft"
        >
            <SheetHeader 
                action={handleCancel} 
                type="close" 
            />

            <div className="flex flex-col gap-8 p-4">
                <BankAccount 
                    type="select-new-bank" 
                    click={() => {setIsInsertBalanceSheetOpen(false), setIsChooseBankSheetOpen(true)}} 
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
                    onClick={handleAddBankAccount}
                >
                    <Check size={24} />
                </button>
            </div>
        </Sheet>
    )
}