import { useContext } from "react"
import { BankAccountsContext } from "."

export const useBankAccounts = () => {
    const context = useContext(BankAccountsContext)

    return context
}