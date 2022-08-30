
import { BankAccountProvider } from "./contexts/BankAccountContext";
import { SaveMoneyProvider } from "./contexts/SaveMoneyContext";
import { Dashboard } from "./pages/Dashboard";

export function App() {

  return (
    <BankAccountProvider>
      <SaveMoneyProvider>
        <Dashboard />
      </SaveMoneyProvider>
    </BankAccountProvider>
  )
}
