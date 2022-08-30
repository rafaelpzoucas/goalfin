import { Dialog } from "@headlessui/react";
import { CaretLeft, CaretRight, Coins } from "phosphor-react";
import { useState } from "react";
import { BankAccounts } from "../../BankAccounts";
import { SaveMoney } from "../../SaveMoney";
import { Sheet } from "../../Sheet";
import { Transactions } from "../../Transactions";

export function WalletDetails() {
    const [isBankAccountsSheetOpen, setIsBankAccountsSheetOpen] = useState(false)
    const [isSaveMoneySheetOpen, setIsSaveMoneySheetOpen] = useState(false)
    
    return (
        <div className="flex flex-col gap-4 h-full">
            <div className="flex flex-col gap-12 p-4">
                <div className="flex flex-col gap-1">
                    <span className="text-xs text-zinc-400">Disponível hoje</span>
                    <strong className="text-2xl">R$ 50,00</strong>
                </div>

                <div 
                    className="flex flex-row items-center justify-between"
                    onClick={() => setIsBankAccountsSheetOpen(true)}
                >
                    <div className="flex flex-col">
                        <span className="text-xs text-zinc-400">Minhas contas</span>
                        <strong className="text-base">R$ 300,00</strong>
                    </div>
                    <CaretRight />
                </div>

                <button 
                    className="flex items-center justify-center gap-2 p-4 rounded-lg bg-zinc-700"
                    onClick={() => setIsSaveMoneySheetOpen(true)}
                >
                    <Coins />
                    <span>Guardar dinheiro</span>
                </button>
            </div>

            <Transactions />

            <Sheet isOpen={isBankAccountsSheetOpen} onClose={() => setIsBankAccountsSheetOpen(false)} transition="rightToLeft">
                <Dialog.Title className="flex flex-row p-4">
                    <button onClick={() => setIsBankAccountsSheetOpen(false)} className="shadow-none outline-none">
                        <CaretLeft size={32} />
                    </button>
                </Dialog.Title>

                <BankAccounts />
            </Sheet>

            <Sheet isOpen={isSaveMoneySheetOpen} onClose={() => setIsSaveMoneySheetOpen(false)} transition="rightToLeft">
                <Dialog.Title className="flex flex-row p-4">
                    <button onClick={() => setIsSaveMoneySheetOpen(false)} className="shadow-none outline-none">
                        <CaretLeft size={32} />
                    </button>
                </Dialog.Title>

                <SaveMoney />
            </Sheet>
        </div>
    )
}