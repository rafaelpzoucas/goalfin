import { BrowserRouter, useLocation } from "react-router-dom";
import { BankAccountsProvider } from "./contexts/BankAccountsContext";
import { GoalsProvider } from "./contexts/GoalsContext";
import { SaveMoneyProvider } from "./contexts/SaveMoneyContext";
import { TransactionsProvider } from "./contexts/TransactionsContext";
import { MainRoutes } from "./routes/MainRoutes";

export function App() {
    return(
        <GoalsProvider>
            <TransactionsProvider>
                <BankAccountsProvider>
                    <SaveMoneyProvider>
                        <BrowserRouter>
                            <MainRoutes />
                        </BrowserRouter>
                    </SaveMoneyProvider>
                </BankAccountsProvider>
            </TransactionsProvider>
        </GoalsProvider>
    )
}