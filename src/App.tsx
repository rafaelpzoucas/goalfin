
import { BankAccountProvider } from "./contexts/BankAccountContext";
import { Dashboard } from "./pages/Dashboard";

export function App() {

  return (
    <BankAccountProvider>
      <Dashboard />
    </BankAccountProvider>
  )
}
