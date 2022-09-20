import { ArrowLeft, DotsThreeVertical, X } from "phosphor-react"
import { useEffect } from "react"
import { Link, useNavigate } from "react-router-dom"

interface NavHeaderProps {
    title?: string
    hasOptions?: boolean
}

export function NavHeader({ title, hasOptions }: NavHeaderProps) {
    const navigate = useNavigate()

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])  

    return (
        <div className="flex flex-row items-center gap-4 px-4 pt-6">
            <button 
                onClick={() => navigate(-1)}
                className={`
                    shadow-none outline-none
                `}>
                <ArrowLeft size={28} /> 
            </button>
            
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