
import React, { createContext, ReactNode, useState } from "react";

interface BankAccountProviderProps {
    children: ReactNode
}

interface BankAccountContextProps {
    isMyBankAccountsSheetOpen: boolean
    setIsMyBankAccountsSheetOpen: React.Dispatch<React.SetStateAction<boolean>>
    isInsertBalanceSheetOpen: boolean
    setIsInsertBalanceSheetOpen: React.Dispatch<React.SetStateAction<boolean>>
    isChooseBankSheetOpen: boolean
    setIsChooseBankSheetOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export const BankAccountContext = createContext({} as BankAccountContextProps)


export function BankAccountProvider({ children }: BankAccountProviderProps) {
    const [isInsertBalanceSheetOpen, setIsInsertBalanceSheetOpen] = useState(false)
    const [isMyBankAccountsSheetOpen, setIsMyBankAccountsSheetOpen] = useState(false)
    const [isChooseBankSheetOpen, setIsChooseBankSheetOpen] = useState(false)

    return (
        <BankAccountContext.Provider value={{ 
           isMyBankAccountsSheetOpen,
           setIsMyBankAccountsSheetOpen,
           isInsertBalanceSheetOpen,
           setIsInsertBalanceSheetOpen,
           isChooseBankSheetOpen,
           setIsChooseBankSheetOpen,
        }}>
            { children }
        </BankAccountContext.Provider>
    )
}