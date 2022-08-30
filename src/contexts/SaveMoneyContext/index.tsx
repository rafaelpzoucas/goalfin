
import React, { createContext, ReactNode, useState } from "react";

interface SaveMoneyProviderProps {
    children: ReactNode
}

interface SaveMoneyContextProps {
    isSaveMoneySheetOpen: boolean
    setIsSaveMoneySheetOpen: React.Dispatch<React.SetStateAction<boolean>>
    isInsertAmountSheetOpen: boolean
    setIsInsertAmountSheetOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export const SaveMoneyContext = createContext({} as SaveMoneyContextProps)


export function SaveMoneyProvider({ children }: SaveMoneyProviderProps) {
    const [isSaveMoneySheetOpen, setIsSaveMoneySheetOpen] = useState(false)
    const [isInsertAmountSheetOpen, setIsInsertAmountSheetOpen] = useState(false)

    return (
        <SaveMoneyContext.Provider value={{ 
           isSaveMoneySheetOpen,
           setIsSaveMoneySheetOpen,
           isInsertAmountSheetOpen,
           setIsInsertAmountSheetOpen
        }}>
            { children }
        </SaveMoneyContext.Provider>
    )
}