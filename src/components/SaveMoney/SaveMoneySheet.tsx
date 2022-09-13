import { Dialog } from "@headlessui/react";
import { CaretLeft, Target } from "phosphor-react";
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
import { H1 } from "../Atoms/Typography";

export function SaveMoneySheet() {
    const {
        isSaveMoneySheetOpen,
        setIsSaveMoneySheetOpen,
        setIsInsertAmountSheetOpen,
    } = useSaveMoney()

    const {
        goals,
        fetchGoals,
        setSelectedGoal,
        setIsNewGoalSheetOpen,
    } = useGoals()
    
    function handleChooseGoal(data: number) {
        setIsInsertAmountSheetOpen(true)
        setSelectedGoal(data)
    }

    useEffect(() => {
        fetchGoals()
    }, [])

    return (
        <Sheet isOpen={isSaveMoneySheetOpen} onClose={() => setIsSaveMoneySheetOpen(false)} transition="rightToLeft">
            <SheetHeader 
                action={() => setIsSaveMoneySheetOpen(false)} 
                type="back" 
            />

            <div className="flex flex-col gap-8 p-4">
                <section className="flex flex-col">
                    <H1>Selecione o seu objetivo</H1>
                    <div 
                        className="text-sm text-zinc-600 dark:text-zinc-400"
                    >
                        <span>Qual o seu objetivo guardando este dinheiro?</span>
                    </div>
                </section>

                <button 
                    className="flex flex-row items-center justify-center gap-2 p-4 rounded-lg bg-emerald-500 dark:bg-zinc-700 text-zinc-100"
                    onClick={() => setIsNewGoalSheetOpen(true)}
                >
                    <Target size={20} />
                    <strong>
                        Novo objetivo
                    </strong>
                </button>

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