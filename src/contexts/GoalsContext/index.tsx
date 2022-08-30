
import React, { createContext, ReactNode, useState } from "react";

interface GoalsProviderProps {
    children: ReactNode
}

interface GoalsContextProps {
    isGoalsDetailsSheetOpen: boolean
    setIsGoalsDetailsSheetOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export const GoalsContext = createContext({} as GoalsContextProps)

export function GoalsProvider({ children }: GoalsProviderProps) {
    const [isGoalsDetailsSheetOpen, setIsGoalsDetailsSheetOpen] = useState(false)

    return (
        <GoalsContext.Provider value={{ 
            isGoalsDetailsSheetOpen,
            setIsGoalsDetailsSheetOpen,
        }}>
            { children }
        </GoalsContext.Provider>
    )
}