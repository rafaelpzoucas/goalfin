import { Dialog } from "@headlessui/react";
import { Check, X } from "phosphor-react";
import { useBankAccounts } from "../../../../../contexts/BankAccountsContext/useBankAccounts";
import { BankAccount } from "../../../BankAccounts/BankAccount";
import { Sheet } from "../../../../Sheets/Sheet";
import { SheetHeader } from "../../../../Sheets/SheetHeader";
import { useRef } from "react";

interface SelectedBankProps {
    id?: string
    name: string
}

export function InsertBalanceSheet({ id, name }: SelectedBankProps) {
    let initialFocus = useRef(null)

    const {
        isInsertBalanceSheetOpen,
        setIsInsertBalanceSheetOpen,
        setIsChooseBankSheetOpen
    } = useBankAccounts()

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
                    bank={name}
                />

                <div>
                    <span className="text-sm text-zinc-600 dark:text-zinc-400">Saldo atual da conta</span>

                    <input 
                        ref={initialFocus} 
                        type="text" 
                        inputMode="numeric" 
                        placeholder="R$ 0,00" 
                        className="bg-transparent text-2xl py-2 shadow-none border-none outline-none" 
                    />
                </div>

                <button 
                    className="fixed bottom-24 right-4 p-4 rounded-full bg-emerald-700 text-zinc-100"
                    onClick={handleAddBankAccount}
                >
                    <Check size={24} />
                </button>
            </div>
        </Sheet>
    )
}