
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
    handleChooseBank: () => void
}

export const BankAccountContext = createContext({} as BankAccountContextProps)


export function BankAccountProvider({ children }: BankAccountProviderProps) {
    const [isInsertBalanceSheetOpen, setIsInsertBalanceSheetOpen] = useState(false)
    const [isMyBankAccountsSheetOpen, setIsMyBankAccountsSheetOpen] = useState(false)
    const [isChooseBankSheetOpen, setIsChooseBankSheetOpen] = useState(false)

    function handleChooseBank() {
        setIsChooseBankSheetOpen(false)
        setIsInsertBalanceSheetOpen(true) 
    }

    return (
        <BankAccountContext.Provider value={{ 
           isMyBankAccountsSheetOpen,
           setIsMyBankAccountsSheetOpen,
           isInsertBalanceSheetOpen,
           setIsInsertBalanceSheetOpen,
           isChooseBankSheetOpen,
           setIsChooseBankSheetOpen,
           handleChooseBank,
        }}>
            { children }
        </BankAccountContext.Provider>
    )
}