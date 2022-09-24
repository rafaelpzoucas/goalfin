import { ReactNode } from "react"

export interface GoalsProviderProps {
    children: ReactNode
}

export interface GoalProps {
    id: number
    description: string
    amount: number
    saved: number
    finalDate: string
    createdAt: string
}

export interface GoalsContextProps {
    isGoalsDetailsSheetOpen: boolean
    setIsGoalsDetailsSheetOpen: React.Dispatch<React.SetStateAction<boolean>>
    isNewGoalSheetOpen: boolean
    setIsNewGoalSheetOpen: React.Dispatch<React.SetStateAction<boolean>>
    goals: GoalProps[]
    setGoals: React.Dispatch<React.SetStateAction<GoalProps[]>>
    fetchGoals: () => void
    selectedGoal: number
    setSelectedGoal: React.Dispatch<React.SetStateAction<number>>
    currentStep: string
    setCurrentStep: React.Dispatch<React.SetStateAction<string>>
}