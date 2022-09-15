import { ArrowsDownUp, Bank, Coins, Target } from "phosphor-react";
import { useBankAccounts } from "../contexts/BankAccountsContext/useBankAccounts";
import { useGoals } from "../contexts/GoalsContext/useGoals";
import { useSaveMoney } from "../contexts/SaveMoneyContext/useBankAccount";
import { useTransactions } from "../contexts/TransactionsContext/useTransactions";
import { Shortcut } from "./Atoms/Shortcut";
import { NewGoalSheet } from "./Goals/NewGoalSheet";
import { SaveMoneySheet } from "./SaveMoney/SaveMoneySheet";
import { NewTransactionSheet } from "./Transactions/NewTransactionSheet";
import { ChooseBankSheet } from "./Wallet/BankAccounts/MyBankAccounts/AddBankAccount/ChooseBankSheet";

export function Shortcuts() {
    const {
        isSaveMoneySheetOpen,
        setIsSaveMoneySheetOpen
    } = useSaveMoney()

    const {
        isNewGoalSheetOpen,
        setIsNewGoalSheetOpen
    } = useGoals()

    const {
        isNewTransactionSheetOpen,
        setIsNewTransactionSheetOpen
    } = useTransactions()
    
    const {
        isChooseBankSheetOpen,
        setIsChooseBankSheetOpen
    } = useBankAccounts()

    return (
        <>
        <section className="flex flex-row">
            <div className="flex flex-start gap-4">
                <Shortcut label="Guardar" click={() => setIsSaveMoneySheetOpen(true)}>
                    <Coins />
                </Shortcut>
                <Shortcut label="Transação" click={() => setIsNewTransactionSheetOpen(true)}>
                    <ArrowsDownUp />
                </Shortcut>
                <Shortcut label="Objetivo" click={() => setIsNewGoalSheetOpen(true)}>
                    <Target />
                </Shortcut>
                <Shortcut label="Nova conta" click={() => setIsChooseBankSheetOpen(true)}>
                    <Bank />
                </Shortcut>
            </div>
        </section>

        {isSaveMoneySheetOpen && <SaveMoneySheet />}
        {isNewTransactionSheetOpen && <NewTransactionSheet />}      
        {isNewGoalSheetOpen && <NewGoalSheet/>}
        {isChooseBankSheetOpen && <ChooseBankSheet />}
        </>
    )
}