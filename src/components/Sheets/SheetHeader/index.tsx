import { Dialog } from "@headlessui/react";
import { ArrowLeft, CaretLeft, DotsThreeVertical, X } from "phosphor-react";

interface SheetHeaderProps {
    action: () => void
    type?: "back" | "close"
    title?: string
    hasOptions?: boolean
}

export function SheetHeader({ action, type, title, hasOptions }: SheetHeaderProps) {
    return (
        <Dialog.Title className="flex flex-row items-center justify-between gap-4 px-4 pt-6 pb-8">
            {
                type && (
                    <button 
                        onClick={action} 
                        className={`
                            shadow-none outline-none
                        `}>
                        {
                            type === "back" 
                            ? <ArrowLeft size={28} /> 
                            : <X size={28} />
                        }
                    </button>
                )
            }
            
            {
                title !== "" && 
                <strong>{title}</strong>
            }

            {
                hasOptions &&
                <button>
                    <DotsThreeVertical size={32} weight="bold" />
                </button>
            }
        </Dialog.Title>
    )
}