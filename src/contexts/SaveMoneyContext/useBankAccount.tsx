import { useContext } from "react"
import { SaveMoneyContext } from "."

export const useSaveMoney = () => {
    const context = useContext(SaveMoneyContext)

    return context
}