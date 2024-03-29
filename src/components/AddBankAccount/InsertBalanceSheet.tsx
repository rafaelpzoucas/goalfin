import { Dialog } from "@headlessui/react";
import { Check, X } from "phosphor-react";
import { useBankAccounts } from "../../contexts/BankAccountsContext/useBankAccounts";
import { BankAccount } from "../Wallet/BankAccounts/BankAccount";
import { Sheet } from "../Sheets/Sheet";
import { SheetHeader } from "../Sheets/SheetHeader";
import { useRef } from "react";
import { numericFormatter } from 'react-number-format'

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
                    hasOptions
                />

                <div>
                    <span className="text-sm text-slate-600 dark:text-slate-400">Saldo atual da conta</span>

                    <input 
                        ref={initialFocus} 
                        type="text" 
                        inputMode="numeric" 
                        placeholder="R$ 0,00" 
                        className="bg-transparent text-3xl shadow-none border-none outline-none" 
                    />
                </div>

                <button 
                    className="fixed bottom-24 right-4 p-4 rounded-full bg-brand-700 text-slate-100"
                    onClick={handleAddBankAccount}
                >
                    <Check size={24} />
                </button>
            </div>
        </Sheet>
    )
}