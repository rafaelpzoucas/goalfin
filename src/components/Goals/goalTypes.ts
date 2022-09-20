export interface GoalProps {
    type?: "list" | "short"
    click?: () => void

    id?: number
    description?: string
    amount?: string
    saved?: string
    finalDate?: string
    createdAt?: string
}