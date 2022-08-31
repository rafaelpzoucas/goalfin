
import React, { createContext, ReactNode, useState } from "react";

interface TransactionsProviderProps {
    children: ReactNode
}

interface TransactionsContextProps {
    isNewTransactionSheetOpen: boolean
    setIsNewTransactionSheetOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export const TransactionsContext = createContext({} as TransactionsContextProps)

export function TransactionsProvider({ children }: TransactionsProviderProps) {
    const [isNewTransactionSheetOpen, setIsNewTransactionSheetOpen] = useState(false)

    return (
        <TransactionsContext.Provider value={{ 
            isNewTransactionSheetOpen,
            setIsNewTransactionSheetOpen
        }}>
            { children }
        </TransactionsContext.Provider>
    )
}