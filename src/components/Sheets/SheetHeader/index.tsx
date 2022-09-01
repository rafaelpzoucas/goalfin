import { Dialog } from "@headlessui/react";
import { CaretLeft, X } from "phosphor-react";
import { ReactNode } from "react";

interface SheetHeaderProps {
    action: () => void
    type: "back" | "close"
    title?: string
}

export function SheetHeader({ action, type, title }: SheetHeaderProps) {
    return (
        <Dialog.Title className="flex flex-row items-center gap-4 p-4">
            <button onClick={action} className="shadow-none outline-none">
                {
                    type === "back" 
                    ? <CaretLeft size={32} /> 
                    : <X size={32} />
                }
            </button>
            {
                title !== "" && 
                <strong>{title}</strong>
            }
        </Dialog.Title>
    )
}