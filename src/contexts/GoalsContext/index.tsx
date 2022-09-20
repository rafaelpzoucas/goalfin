
import React, { createContext, ReactNode, useState } from "react";
import { api } from "../../lib/axios";
import { GoalProps, GoalsContextProps, GoalsProviderProps } from "./types";

export const GoalsContext = createContext({} as GoalsContextProps)

export function GoalsProvider({ children }: GoalsProviderProps) {
    const [isGoalsDetailsSheetOpen, setIsGoalsDetailsSheetOpen] = useState(false)
    const [isNewGoalSheetOpen, setIsNewGoalSheetOpen] = useState(false)
    const [goals, setGoals] = useState<GoalProps[]>([])
    const [selectedGoal, setSelectedGoal] = useState(0)

    async function fetchGoals() {
        const response = await api.get('/goals')

        setGoals(response.data)
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
            selectedGoal,
            setSelectedGoal
        }}>
            { children }
        </GoalsContext.Provider>
    )
}