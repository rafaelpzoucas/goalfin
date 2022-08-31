import { Dialog } from "@headlessui/react";
import { X } from "phosphor-react";
import { useTransactions } from "../../contexts/TransactionsContext/useTransactions";
import { Input } from "../Input";
import { Sheet } from "../Sheet";

export function NewTransactionSheet() {
    const {
        isNewTransactionSheetOpen,
        setIsNewTransactionSheetOpen
    } = useTransactions()
    return (
        <Sheet isOpen={isNewTransactionSheetOpen} onClose={() => setIsNewTransactionSheetOpen(false)} transition="rightToLeft">
            <Dialog.Title className="flex flex-row p-4">
                <button onClick={() => setIsNewTransactionSheetOpen(false)} className="shadow-none outline-none">
                    <X size={24} />
                </button>
            </Dialog.Title>

            <div className="flex flex-col gap-8 p-4">
                <div className="flex flex-col">
                    <strong>
                        Selecione o seu objetivo
                    </strong>

                    <form action="">
                        <Input />
                        <Input />
                    </form>
                </div>
            </div>
        </Sheet>
    )
}