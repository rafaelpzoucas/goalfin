
import React, { createContext, ReactNode, useState } from "react";

interface GoalsProviderProps {
    children: ReactNode
}

interface GoalProps {
    id: number
    description: string
    amount: number
    saved: number
    finalDate: string
    createdAt: string
}

interface GoalsContextProps {
    isGoalsDetailsSheetOpen: boolean
    setIsGoalsDetailsSheetOpen: React.Dispatch<React.SetStateAction<boolean>>
    isNewGoalSheetOpen: boolean
    setIsNewGoalSheetOpen: React.Dispatch<React.SetStateAction<boolean>>
    goals: GoalProps[]
    setGoals: React.Dispatch<React.SetStateAction<GoalProps[]>>
    fetchGoals: () => void
    fetchGoals2: () => void
    selectedGoal: number
    setSelectedGoal: React.Dispatch<React.SetStateAction<number>>
}

export const GoalsContext = createContext({} as GoalsContextProps)

export function GoalsProvider({ children }: GoalsProviderProps) {
    const [isGoalsDetailsSheetOpen, setIsGoalsDetailsSheetOpen] = useState(false)
    const [isNewGoalSheetOpen, setIsNewGoalSheetOpen] = useState(false)
    const [goals, setGoals] = useState<GoalProps[]>([])
    const [selectedGoal, setSelectedGoal] = useState(0)

    async function fetchGoals() {
        const response = await fetch('http://192.168.0.102:3333/goals')
        const data = await response.json()

        setGoals(data)
    }

    async function fetchGoals2() {
        const response = await fetch('http://192.168.6.119:3333/goals')
        const data = await response.json()

        setGoals(data)
    }  

    return (
        <GoalsContext.Provider value={{ 
            isGoalsDetailsSheetOpen,
            setIsGoalsDetailsSheetOpen,
            isNewGoalSheetOpen,
            setIsNewGoalSheetOpen,
            goals,
            setGoals,
            fetchGoals,
            fetchGoals2,
            selectedGoal,
            setSelectedGoal
        }}>
            { children }
        </GoalsContext.Provider>
    )
}