
import { BankAccountProvider } from "./contexts/BankAccountContext";
import { GoalsProvider } from "./contexts/GoalsContext";
import { SaveMoneyProvider } from "./contexts/SaveMoneyContext";
import { Dashboard } from "./pages/Dashboard";

export function App() {

  return (
    <GoalsProvider>
      <BankAccountProvider>
        <SaveMoneyProvider>
          <Dashboard />
        </SaveMoneyProvider>
      </BankAccountProvider>
    </GoalsProvider>
  )
}
