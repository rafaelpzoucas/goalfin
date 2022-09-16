
import React, { createContext, ReactNode, useState } from "react";
import { api } from "../../lib/axios";

interface BankAccountsProviderProps {
    children: ReactNode
}

interface BankAccountProps {
    id: number
    bank: string
    balance: number
}

interface BankAccountsContextProps {
    selectedBank: string
    setSelectedBank: React.Dispatch<React.SetStateAction<string>>
    isUserBankAccountsSheetOpen: boolean
    setIsUserBankAccountsSheetOpen: React.Dispatch<React.SetStateAction<boolean>>
    isInsertBalanceSheetOpen: boolean
    setIsInsertBalanceSheetOpen: React.Dispatch<React.SetStateAction<boolean>>
    isChooseBankSheetOpen: boolean
    setIsChooseBankSheetOpen: React.Dispatch<React.SetStateAction<boolean>>
    userBankAccounts: BankAccountProps[]
    setUserBankAccounts: React.Dispatch<React.SetStateAction<BankAccountProps[]>>
    fetchUserBankAccounts: () => void
    balance: {total: number}
}

export const BankAccountsContext = createContext({} as BankAccountsContextProps)

export function BankAccountsProvider({ children }: BankAccountsProviderProps) {
    const [selectedBank, setSelectedBank] = useState("")
    const [userBankAccounts, setUserBankAccounts] = useState<BankAccountProps[]>([])

    const [isInsertBalanceSheetOpen, setIsInsertBalanceSheetOpen] = useState(false)
    const [isUserBankAccountsSheetOpen, setIsUserBankAccountsSheetOpen] = useState(false)
    const [isChooseBankSheetOpen, setIsChooseBankSheetOpen] = useState(false)

    async function fetchUserBankAccounts() {
        const response = await api.get('/userBankAccounts')

        setUserBankAccounts(response.data)
    } 

    const balance = userBankAccounts.reduce(
        (acc, userBankAccount) => {
            acc.total += userBankAccount.balance
            
            return acc
        },
        {
            total: 0
        }
    )    

    return (
        <BankAccountsContext.Provider value={{ 
           isUserBankAccountsSheetOpen,
           setIsUserBankAccountsSheetOpen,
           isInsertBalanceSheetOpen,
           setIsInsertBalanceSheetOpen,
           isChooseBankSheetOpen,
           setIsChooseBankSheetOpen,
           userBankAccounts,
           setUserBankAccounts,
           fetchUserBankAccounts,
           balance,
           selectedBank,
           setSelectedBank
        }}>
            { children }
        </BankAccountsContext.Provider>
    )
}