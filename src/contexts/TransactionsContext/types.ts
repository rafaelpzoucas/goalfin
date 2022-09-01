import { ReactNode } from "react"

export interface TransactionsProviderProps {
    children: ReactNode
}

export interface TransactionsContextProps {
    isNewTransactionSheetOpen: boolean
    setIsNewTransactionSheetOpen: React.Dispatch<React.SetStateAction<boolean>>
    transactions: Array<TransactionProps>
    setTransactions: React.Dispatch<React.SetStateAction<Array<TransactionProps>>>
    loadTransactions: () => void
    loadTransactions2: () => void
}

export interface TransactionProps {
    id: number
    amount: number
    type: "income" | "outcome"
    date: string
    category: string
    description: string
    createdAt: string
}