
import React, { createContext, useState } from "react";
import { TransactionProps, TransactionsContextProps, TransactionsProviderProps } from "./types";

export const TransactionsContext = createContext({} as TransactionsContextProps)

export function TransactionsProvider({ children }: TransactionsProviderProps) {
    const [isNewTransactionSheetOpen, setIsNewTransactionSheetOpen] = useState(false)
    const [transactions, setTransactions] = useState<TransactionProps[]>([])
    const [date, setDate] = useState()

    async function loadTransactions() {
        const response = await fetch('http://192.168.0.102:3333/transactions')
        const data = await response.json()

        setTransactions(data)
    }
    async function loadTransactions2() {
        const response = await fetch('http://192.168.6.119:3333/transactions')
        const data = await response.json()

        setTransactions(data)
    }

    return (
        <TransactionsContext.Provider value={{ 
            isNewTransactionSheetOpen,
            setIsNewTransactionSheetOpen,
            transactions,
            setTransactions,
            loadTransactions,
            loadTransactions2
        }}>
            { children }
        </TransactionsContext.Provider>
    )
}