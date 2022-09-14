
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

          </SaveMoneyProvider>
        </BankAccountsProvider>
      </TransactionsProvider>
    </GoalsProvider>
  )
}