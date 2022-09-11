import { Dialog } from "@headlessui/react";
import { ArrowLeft, CaretLeft, DotsThreeVertical, X } from "phosphor-react";
import { ReactNode } from "react";

interface SheetHeaderProps {
    action: () => void
    type?: "back" | "close"
    title?: string
    hasOptions?: boolean
}

export function SheetHeader({ action, type, title, hasOptions }: SheetHeaderProps) {
    return (
        <Dialog.Title className="flex flex-row items-center justify-between gap-4 p-4">
            {
                type && (
                    <button 
                        onClick={action} 
                        className={`
                            shadow-none outline-none
                        `}>
                        {
                            type === "back" 
                            ? <ArrowLeft size={32} /> 
                            : <X size={32} />
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