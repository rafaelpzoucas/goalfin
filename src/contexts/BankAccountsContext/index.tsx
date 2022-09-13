
import React, { createContext, ReactNode, useState } from "react";

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
    isMyBankAccountsSheetOpen: boolean
    setIsMyBankAccountsSheetOpen: React.Dispatch<React.SetStateAction<boolean>>
    isInsertBalanceSheetOpen: boolean
    setIsInsertBalanceSheetOpen: React.Dispatch<React.SetStateAction<boolean>>
    isChooseBankSheetOpen: boolean
    setIsChooseBankSheetOpen: React.Dispatch<React.SetStateAction<boolean>>
    userBankAccounts: BankAccountProps[]
    setUserBankAccounts: React.Dispatch<React.SetStateAction<BankAccountProps[]>>
    fetchUserBankAccounts: () => void
    fetchUserBankAccounts2: () => void
    balance: {total: number}
}

export const BankAccountsContext = createContext({} as BankAccountsContextProps)

export function BankAccountsProvider({ children }: BankAccountsProviderProps) {
    const [selectedBank, setSelectedBank] = useState("")
    const [userBankAccounts, setUserBankAccounts] = useState<BankAccountProps[]>([])

    const [isInsertBalanceSheetOpen, setIsInsertBalanceSheetOpen] = useState(false)
    const [isMyBankAccountsSheetOpen, setIsMyBankAccountsSheetOpen] = useState(false)
    const [isChooseBankSheetOpen, setIsChooseBankSheetOpen] = useState(false)

    async function fetchUserBankAccounts() {
        const response = await fetch('http://192.168.0.102:3333/userBankAccounts')
        const data = await response.json()

        setUserBankAccounts(data)
    }

    async function fetchUserBankAccounts2() {
        const response = await fetch('http://192.168.6.119:3333/userBankAccounts')
        const data = await response.json()

        setUserBankAccounts(data)
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
           isMyBankAccountsSheetOpen,
           setIsMyBankAccountsSheetOpen,
           isInsertBalanceSheetOpen,
           setIsInsertBalanceSheetOpen,
           isChooseBankSheetOpen,
           setIsChooseBankSheetOpen,
           userBankAccounts,
           setUserBankAccounts,
           fetchUserBankAccounts,
           fetchUserBankAccounts2,
           balance,
           selectedBank,
           setSelectedBank
        }}>
            { children }
        </BankAccountsContext.Provider>
    )
}