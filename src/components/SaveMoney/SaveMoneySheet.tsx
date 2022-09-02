import { Dialog } from "@headlessui/react";
import { CaretLeft } from "phosphor-react";
import { useBankAccounts } from "../../contexts/BankAccountsContext/useBankAccounts";
import { useSaveMoney } from "../../contexts/SaveMoneyContext/useBankAccount";
import { Goal } from "../Goals/Goal";
import { Search } from "../Atoms/Form/Search";
import { Sheet } from "../Sheets/Sheet";
import { SheetHeader } from "../Sheets/SheetHeader";
import { ChooseBankSheet } from "../Wallet/WalletDetails/MyBankAccounts/AddBankAccount/ChooseBankSheet";
import { InsertAmountSheet } from "./InsertAmountSheet";

export function SaveMoneySheet() {
    const {
        isSaveMoneySheetOpen,
        setIsSaveMoneySheetOpen,
        setIsInsertAmountSheetOpen
    } = useSaveMoney()

    const {
        setIsChooseBankSheetOpen
    } = useBankAccounts()
    
    return (
        <Sheet isOpen={isSaveMoneySheetOpen} onClose={() => setIsSaveMoneySheetOpen(false)} transition="rightToLeft">
            <SheetHeader 
                action={() => setIsSaveMoneySheetOpen(false)} 
                type="back" 
            />

            <div className="flex flex-col gap-8 p-4">
                <div className="flex flex-col">
                    <strong>
                        Selecione o seu objetivo
                    </strong>
                    <span className="text-xs text-zinc-400">
                        Qual o seu objetivo guardando este dinheiro?
                    </span>
                </div>
                
                <Search />

                <Goal 
                    type="select-new-goal"
                    click={() => setIsInsertAmountSheetOpen(true)}
                />
            </div>
            <InsertAmountSheet />
        </Sheet>
    )
}