import { useContext } from "react"
import { BankAccountContext } from "."

export const useBankAccount = () => {
    const context = useContext(BankAccountContext)

    return context
}