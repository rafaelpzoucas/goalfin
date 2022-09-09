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
import { useGoals } from "../../contexts/GoalsContext/useGoals";
import { useEffect } from "react";

export function SaveMoneySheet() {
    const {
        isSaveMoneySheetOpen,
        setIsSaveMoneySheetOpen,
        setIsInsertAmountSheetOpen,
    } = useSaveMoney()

    const {
        goals,
        loadGoals,
        loadGoals2,
        setSelectedGoal
    } = useGoals()
    
    function handleChooseGoal(data: number) {
        setIsInsertAmountSheetOpen(true)
        setSelectedGoal(data)
    }

    useEffect(() => {
        loadGoals()
    }, [])

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
                    <span className="text-xs text-zinc-600 dark:text-zinc-400">
                        Qual o seu objetivo guardando este dinheiro?
                    </span>
                </div>
                
                <Search />

                {
                    goals.map(goal => {
                        return (
                            <Goal 
                                key={goal.id}
                                type="list"
                                click={() => handleChooseGoal(goal.id)}
                                description={goal.description}
                            />
                        )
                    })
                }
            </div>
            
            <InsertAmountSheet />
        </Sheet>
    )
}