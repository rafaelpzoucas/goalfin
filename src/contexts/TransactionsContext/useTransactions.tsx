import { useContext } from "react"
import { TransactionsContext } from "."

export const useTransactions = () => {
    const context = useContext(TransactionsContext)

    return context
}