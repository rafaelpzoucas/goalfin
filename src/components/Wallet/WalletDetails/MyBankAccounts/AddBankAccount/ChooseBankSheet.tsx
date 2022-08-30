import { Dialog } from "@headlessui/react"
import { X } from "phosphor-react"
import { useBankAccount } from "../../../../../contexts/BankAccountContext/useBankAccount"
import { BankAccount } from "../../../BankAccounts/BankAccount"
import { Search } from "../../../../Search"
import { Sheet } from "../../../../Sheet"


export function ChooseBankSheet() {
    const {
        handleChooseBank,
        isChooseBankSheetOpen,
        setIsChooseBankSheetOpen,
        setIsInsertBalanceSheetOpen
    } = useBankAccount()

    return (
        <Sheet isOpen={isChooseBankSheetOpen} onClose={() => setIsInsertBalanceSheetOpen(true)} transition="rightToLeft">
            <Dialog.Title className="flex flex-row p-4">
                <button onClick={() => setIsChooseBankSheetOpen(false)} className="shadow-none outline-none">
                    <X size={32} />
                </button>
            </Dialog.Title>

            <div className="flex flex-col gap-8 p-4">
                <strong>
                    Selecione o seu banco
                </strong>
                <Search />

                <BankAccount
                    click={() => setIsInsertBalanceSheetOpen(true)}
                    type="select-new-bank" 
                />
                <BankAccount
                    click={() => setIsInsertBalanceSheetOpen(true)}
                    type="select-new-bank" 
                />
                <BankAccount
                    click={() => setIsInsertBalanceSheetOpen(true)}
                    type="select-new-bank" 
                />
            </div>
        </Sheet>
    )
}