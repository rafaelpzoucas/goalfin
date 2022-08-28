import { ReactNode } from "react"

interface IH1 {
    children: ReactNode
    styles?: string
}

interface IH2 {
    children: ReactNode
    styles?: string
}

export function H1({ children, styles }: IH1) {
    return (
        <strong className={`
            text-2xl
            ${styles}
        `}>
            {children}
        </strong>
    )
}

export function H2({ children, styles }: IH2) {
    return (
        <strong className={`
            text-lg
            ${styles}
        `}>
            {children}
        </strong>
    )
}