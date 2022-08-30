import { Dialog } from "@headlessui/react";
import { CaretLeft, Plus, X } from "phosphor-react";
import { useBankAccount } from "../../../../contexts/BankAccountContext/useBankAccount";
import { MyBankAccounts } from "../../../BankAccounts";
import { Sheet } from "../../../Sheet";
import { ChooseBankSheet } from "./AddBankAccount/ChooseBankSheet";
import { InsertBalanceSheet } from "./AddBankAccount/InsertBalanceSheet";

export function MyBankAccountsSheet() {
    const {
        isMyBankAccountsSheetOpen,
        setIsMyBankAccountsSheetOpen,
        setIsChooseBankSheetOpen
    } = useBankAccount()

    return (
        <Sheet isOpen={isMyBankAccountsSheetOpen} onClose={() => setIsMyBankAccountsSheetOpen(false)} transition="rightToLeft">
            <Dialog.Title className="flex flex-row p-4">
                <button onClick={() => setIsMyBankAccountsSheetOpen(false)} className="shadow-none outline-none">
                    <CaretLeft size={32} />
                </button>
            </Dialog.Title>

            <div className="flex flex-col gap-4 h-full">
                <div className="flex flex-col gap-12 p-4">
                    <div className="flex flex-col gap-1">
                        <span className="text-xs text-zinc-400">Minhas contas</span>
                        <strong className="text-2xl">R$ 5.000,00</strong>
                    </div>

                    <button 
                        className="flex items-center justify-center gap-2 p-4 rounded-lg bg-zinc-700"
                        onClick={() => setIsChooseBankSheetOpen(true)}
                    >
                        <Plus />
                        <span>Adicionar conta</span>
                    </button>
                </div>

                <MyBankAccounts />

                <ChooseBankSheet />
                <InsertBalanceSheet />
            </div>
        </Sheet>
    )
}