import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { ErrorPage } from "../pages/ErrorPage";
import { GoalDetails } from "../pages/GoalDetails";
import { GoalsSummary } from "../pages/GoalsSummary";
import { WalletDetails } from "../pages/WalletDetails";
import Root from "./root";

import { AnimatePresence } from "framer-motion";
import { UserBankAccounts } from "../pages/UserBankAccounts";
import { SaveMoney } from "../pages/SaveMoney";
import { NewGoal } from "../pages/NewGoal";
import { NewTransaction } from "../pages/NewTransaction";

export function MainRoutes() {
    const location = useLocation()
    
    return(
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route path="*" element={<ErrorPage />} />
                <Route path="/" element={<Root />} />
                <Route path="/wallet" element={<WalletDetails />} />
                <Route path="/bank-accounts" element={<UserBankAccounts />} />
                <Route path="/goals" element={<GoalsSummary />} />
                <Route path="/goals/:id" element={<GoalDetails />} />
                <Route path="/save-money" element={<SaveMoney />} />
                <Route path="/new-goal" element={<NewGoal />} />
                <Route path="/new-transaction" element={<NewTransaction />} />
            </Routes>
        </AnimatePresence>
            
    )
}