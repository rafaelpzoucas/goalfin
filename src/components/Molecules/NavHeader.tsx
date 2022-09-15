import { ArrowLeft, DotsThreeVertical, X } from "phosphor-react"
import { useEffect } from "react"
import { Link } from "react-router-dom"

interface NavHeaderProps {
    navigate: string
    title?: string
    hasOptions?: boolean
}

export function NavHeader({ title, navigate, hasOptions }: NavHeaderProps) {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div className="flex flex-row items-center gap-4 px-4 pt-6">
            <Link 
                to="../"
                className={`
                    shadow-none outline-none
                `}>
                <ArrowLeft size={28} /> 
            </Link>
            
            {
                title !== "" && 
                <strong>{title}</strong>
            }

            {
                hasOptions &&
                <button className="ml-auto">
                    <DotsThreeVertical size={32} weight="bold" />
                </button>
            }
        </div>
    )
}