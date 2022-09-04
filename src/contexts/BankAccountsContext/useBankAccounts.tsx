import { useContext } from "react"
import { BankAccountsContext } from "."

export function useBankAccounts() {
    const context = useContext(BankAccountsContext)

    return context
}