import { Dialog } from "@headlessui/react";
import { CaretLeft, CaretRight, X } from "phosphor-react";
import { useState } from "react";
import { Sheet } from "../Sheets/Sheet";
import { SheetHeader } from "../Sheets/SheetHeader";
import { H2 } from "../Typography";
import { WalletDetails } from "./WalletDetails";

export function Wallet() {
    const [isSheetOpen, setIsSheetOpen] = useState(false)

    return (
        <>
        <section 
            onClick={() => setIsSheetOpen(true)}
            className="flex flex-row items-start justify-between px-4 py-8"
        >
            <div className="flex flex-col gap-12">
                <div className="flex flex-col gap-1">
                    <span className="text-xs text-zinc-400">Disponível hoje</span>
                    <strong className="text-2xl">R$ 50,00</strong>
                </div>
                <div className="flex flex-col gap-1">
                    <span className="text-xs text-zinc-400">Disponível para uso</span>
                    <strong className="text-base">R$ 300,00</strong>
                </div>
            </div>
            <CaretRight />
        </section>
        <Sheet isOpen={isSheetOpen} onClose={() => setIsSheetOpen(false)} transition="rightToLeft">
            <SheetHeader 
                action={() => setIsSheetOpen(false)} 
                type="back" 
            />

            <WalletDetails />
        </Sheet>
        </>
    )
}