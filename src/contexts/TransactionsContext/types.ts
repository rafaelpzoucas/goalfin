import { ReactNode } from "react"

export interface TransactionsProviderProps {
    children: ReactNode
}

export interface TransactionProps {
    id: number
    amount: number
    type: "income" | "spending"
    date: string
    category: string
    description: string
    createdAt: string
}

export interface TransactionsContextProps {
    isNewTransactionSheetOpen: boolean
    setIsNewTransactionSheetOpen: React.Dispatch<React.SetStateAction<boolean>>
    transactions: TransactionProps[]
    setTransactions: React.Dispatch<React.SetStateAction<TransactionProps[]>>
    loadTransactions: () => void
    loadTransactions2: () => void
}