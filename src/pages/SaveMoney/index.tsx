import { useEffect, useState } from "react"
import { ChooseGoal } from "../../components/SaveMoneySteps/ChooseGoal"
import { InsertAmount } from "../../components/SaveMoneySteps/InsertAmount"
import { useGoals } from "../../contexts/GoalsContext/useGoals"

export function SaveMoney() {
    const { 
        currentStep, 
        setCurrentStep
    } = useGoals()

    useEffect(() => {
        setCurrentStep("chooseGoal")
    }, [])

    return (
        currentStep === "chooseGoal" ? (
            <ChooseGoal />
        ) : (
            <InsertAmount />
        )
    )
}