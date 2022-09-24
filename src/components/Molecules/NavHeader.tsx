import { ArrowLeft, DotsThreeVertical, X } from "phosphor-react"
import { useEffect } from "react"
import { Link, useNavigate } from "react-router-dom"

interface NavHeaderProps {
    action?: "back" | "close"
    title?: string
    hasOptions?: boolean
    navControl?: () => void
    click?:() => void
}

export function NavHeader({ action = "back", title, hasOptions, navControl, click }: NavHeaderProps) {
    const navigate = useNavigate()

    function handleClick() {
        action === "back" ? (
            navControl 
            ? navControl
            : navigate(-1) 
        ) : (
            navigate(-1)
        )
    }

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div className="flex flex-row items-center gap-4 px-4 pt-6">
            <button 
                onClick={handleClick}
                className="shadow-none outline-none"
            >
                {
                    action === "back"
                    ? <ArrowLeft size={28} /> 
                    : <X size={28} />
                }
            </button>
            
            {title !== "" && <strong>{title}</strong>}

            {
                hasOptions && (
                    <button className="ml-auto">
                        <DotsThreeVertical size={32} weight="bold" />
                    </button>
                )
            }
        </div>
    )
}