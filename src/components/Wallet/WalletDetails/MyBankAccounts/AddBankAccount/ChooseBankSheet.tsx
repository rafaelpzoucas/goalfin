import { Dialog } from "@headlessui/react"
import { X } from "phosphor-react"
import { useBankAccount } from "../../../../../contexts/BankAccountContext/useBankAccount"
import { BankAccount } from "../../../BankAccounts/BankAccount"
import { Search } from "../../../../Search"
import { Sheet } from "../../../../Sheets/Sheet"
import { SheetHeader } from "../../../../Sheets/SheetHeader"


export function ChooseBankSheet() {
    const {
        isChooseBankSheetOpen,
        setIsChooseBankSheetOpen,
        setIsInsertBalanceSheetOpen
    } = useBankAccount()

    return (
        <Sheet isOpen={isChooseBankSheetOpen} onClose={() => setIsInsertBalanceSheetOpen(true)} transition="rightToLeft">
            <SheetHeader 
                action={() => setIsChooseBankSheetOpen(false)} 
                type="close" 
            />

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