
import React, { createContext, ReactNode, useState } from "react";

interface BankAccountProviderProps {
    children: ReactNode
}

interface BankAccountContextProps {
    isBankAccountSheetOpen: boolean
    setIsBankAccountSheetOpen: React.Dispatch<React.SetStateAction<boolean>>
    isSelectBankSheetOpen: boolean
    setIsSelectBankSheetOpen: React.Dispatch<React.SetStateAction<boolean>>
    handleChooseBankAccount: () => void
}

export const BankAccountContext = createContext({} as BankAccountContextProps)


export function BankAccountProvider({ children }: BankAccountProviderProps) {
    const [isBankAccountSheetOpen, setIsBankAccountSheetOpen] = useState(false)
    const [isSelectBankSheetOpen, setIsSelectBankSheetOpen] = useState(false)

    function handleChooseBankAccount() {
        setIsBankAccountSheetOpen(true),
        setIsSelectBankSheetOpen(false)
    }

    return (
        <BankAccountContext.Provider value={{ 
           isBankAccountSheetOpen,
           setIsBankAccountSheetOpen,
           isSelectBankSheetOpen,
           setIsSelectBankSheetOpen,
           handleChooseBankAccount,
        }}>
            { children }
        </BankAccountContext.Provider>
    )
}