import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import { BankAccountsProvider } from "./contexts/BankAccountsContext";
import { GoalsProvider } from "./contexts/GoalsContext";
import { SaveMoneyProvider } from "./contexts/SaveMoneyContext";
import { TransactionsProvider } from "./contexts/TransactionsContext";
import "./index.css";
import { GoalsDetails } from "./pages/GoalsDetails";
import { WalletDetails } from "./pages/WalletDetails";
import Root from "./routes/root";

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

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <GoalsProvider>
      <TransactionsProvider>
        <BankAccountsProvider>
          <SaveMoneyProvider>
            <RouterProvider router={router} />
          </SaveMoneyProvider>
        </BankAccountsProvider> 
      </TransactionsProvider>
    </GoalsProvider>
  </React.StrictMode>
);