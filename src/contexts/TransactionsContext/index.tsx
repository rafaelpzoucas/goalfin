
import React, { createContext, useState } from "react";
import { api } from "../../lib/axios";
import { TransactionProps, TransactionsContextProps, TransactionsProviderProps } from "./types";

export const TransactionsContext = createContext({} as TransactionsContextProps)

export function TransactionsProvider({ children }: TransactionsProviderProps) {
    const [isNewTransactionSheetOpen, setIsNewTransactionSheetOpen] = useState(false)
    const [transactions, setTransactions] = useState<TransactionProps[]>([])
    const [date, setDate] = useState()

    async function fetchTransactions() {
        const response = await api.get('/transactions')

        setTransactions(response.data)
    }

    return (
        <TransactionsContext.Provider value={{ 
            isNewTransactionSheetOpen,
            setIsNewTransactionSheetOpen,
            transactions,
            setTransactions,
            fetchTransactions,
        }}>
            { children }
        </TransactionsContext.Provider>
    )
}