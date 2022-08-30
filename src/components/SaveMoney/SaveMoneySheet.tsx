import { Dialog } from "@headlessui/react";
import { CaretLeft } from "phosphor-react";
import { useBankAccount } from "../../contexts/BankAccountContext/useBankAccount";
import { useSaveMoney } from "../../contexts/SaveMoneyContext/useBankAccount";
import { Goal } from "../Goals/Goal";
import { Search } from "../Search";
import { Sheet } from "../Sheet";
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
    } = useBankAccount()
    
    return (
        <Sheet isOpen={isSaveMoneySheetOpen} onClose={() => setIsSaveMoneySheetOpen(false)} transition="rightToLeft">
            <Dialog.Title className="flex flex-row p-4">
                <button onClick={() => setIsSaveMoneySheetOpen(false)} className="shadow-none outline-none">
                    <CaretLeft size={32} />
                </button>
            </Dialog.Title>

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