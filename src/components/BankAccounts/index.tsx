import { Dialog } from "@headlessui/react";
import { Check, Plus, X } from "phosphor-react";
import { useBankAccount } from "../../contexts/BankAccountContext/useBankAccount";
import { Sheet } from "../Sheet";
import { MyBankAccounts } from "./MyBankAccounts";
import { BankAccount } from "./MyBankAccounts/BankAccount";
import { SelectBankAccount } from "./SelectBankAccount";

export function BankAccounts() {
    const { 
        isBankAccountSheetOpen,
        setIsBankAccountSheetOpen,
        isSelectBankSheetOpen,
        setIsSelectBankSheetOpen,
        handleChooseBankAccount
     } = useBankAccount()

    return (
        <div className="flex flex-col gap-4 h-full">
            <div className="flex flex-col gap-12 p-4">
                <div className="flex flex-col gap-1">
                    <span className="text-xs text-zinc-400">Minhas contas</span>
                    <strong className="text-2xl">R$ 5.000,00</strong>
                </div>

                <button 
                    className="flex items-center justify-center gap-2 p-4 rounded-lg bg-zinc-700"
                    onClick={() => setIsSelectBankSheetOpen(true)}
                >
                    <Plus />
                    <span>Adicionar conta</span>
                </button>
            </div>

            <MyBankAccounts />

            <Sheet isOpen={isSelectBankSheetOpen} onClose={() => handleChooseBankAccount()} transition="rightToLeft">
                <Dialog.Title className="flex flex-row p-4">
                    <button onClick={() => setIsSelectBankSheetOpen(false)} className="shadow-none outline-none">
                        <X size={32} />
                    </button>
                </Dialog.Title>

                <SelectBankAccount />
            </Sheet>
            
            <Sheet isOpen={isBankAccountSheetOpen} onClose={() => setIsBankAccountSheetOpen(false)} transition="rightToLeft">
                <Dialog.Title className="flex flex-row p-4">
                    <button onClick={() => setIsBankAccountSheetOpen(false)} className="shadow-none outline-none">
                        <X size={32} />
                    </button>
                </Dialog.Title>

                <div className="flex flex-col gap-8 p-4">
                    <BankAccount 
                        type="select-new-bank" 
                        click={() => {setIsBankAccountSheetOpen(false), setIsSelectBankSheetOpen(true)}} 
                    />

                    <div>
                        <span className="text-xs text-zinc-400">Saldo atual da conta</span>
                        <input type="text" inputMode="numeric" placeholder="R$ 0,00" className="bg-transparent text-2xl py-8 shadow-none border-none outline-none" />
                    </div>

                    <button 
                        className="fixed bottom-20 right-4 p-4 rounded-full bg-emerald-700"
                        onClick={() => setIsBankAccountSheetOpen(false)}
                    >
                        <Check size={24} />
                    </button>
                </div>
            </Sheet>
        </div>
    )
}