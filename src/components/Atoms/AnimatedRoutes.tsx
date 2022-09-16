import React from "react";
import { createBrowserRouter, RouterProvider, Routes, useLocation } from "react-router-dom";
import { BankAccountsProvider } from "../../contexts/BankAccountsContext";
import { GoalsProvider } from "../../contexts/GoalsContext";
import { SaveMoneyProvider } from "../../contexts/SaveMoneyContext";
import { TransactionsProvider } from "../../contexts/TransactionsContext";
import { GoalsDetails } from "../../pages/GoalsDetails";
import { WalletDetails } from "../../pages/WalletDetails";
import Root from "../../routes/root";


export function AnimatedRoutes() {
    const location = useLocation();
    
    const router = createBrowserRouter([
        {
          path: "/",
          element: <Root />,
          errorElement: <h1>Página não encontrada</h1>
        },
        {
          path: "wallet",
          element: <WalletDetails />
        },
        {
          path: "goals",
          element: <GoalsDetails />
        }
    ]);
        
    return(
        <React.StrictMode>
            <GoalsProvider>
                <TransactionsProvider>
                    <BankAccountsProvider>
                        <SaveMoneyProvider>
                            <Routes location={location} key={location.pathname}>
                                <RouterProvider router={router} />
                            </Routes>
                        </SaveMoneyProvider>
                    </BankAccountsProvider> 
                </TransactionsProvider>
            </GoalsProvider>
        </React.StrictMode>
    )
}