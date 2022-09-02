
import { NewGoalSheet } from "./components/Goals/NewGoalSheet";
import { PlusButton } from "./components/PlusButton";
import { SaveMoneySheet } from "./components/SaveMoney/SaveMoneySheet";
import { NewTransactionSheet } from "./components/Transactions/NewTransactionSheet";
import { ChooseBankSheet } from "./components/Wallet/WalletDetails/MyBankAccounts/AddBankAccount/ChooseBankSheet";
import { InsertBalanceSheet } from "./components/Wallet/WalletDetails/MyBankAccounts/AddBankAccount/InsertBalanceSheet";
import { BankAccountsProvider } from "./contexts/BankAccountsContext";
import { GoalsProvider } from "./contexts/GoalsContext";
import { SaveMoneyProvider } from "./contexts/SaveMoneyContext";
import { TransactionsProvider } from "./contexts/TransactionsContext";
import { Dashboard } from "./pages/Dashboard";

export function App() {

  return (
    <GoalsProvider>
      <TransactionsProvider>
        <BankAccountsProvider>
          <SaveMoneyProvider>
            <Dashboard />
            <PlusButton />

            <SaveMoneySheet />
            <NewTransactionSheet />
            <NewGoalSheet />
            <ChooseBankSheet />
          </SaveMoneyProvider>
        </BankAccountsProvider>
      </TransactionsProvider>
    </GoalsProvider>
  )
}
