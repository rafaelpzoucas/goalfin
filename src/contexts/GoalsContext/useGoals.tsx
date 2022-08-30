import { useContext } from "react"
import { GoalsContext } from "."

export const useGoals = () => {
    const context = useContext(GoalsContext)

    return context
}