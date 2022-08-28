import { Dialog } from "@headlessui/react";
import { CaretLeft, CaretRight, X } from "phosphor-react";
import { useState } from "react";
import { Sheet } from "../Sheet";
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
            <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-1">
                    <span className="text-xs text-zinc-400">Disponível para uso</span>
                    <strong className="text-base">R$ 300,00</strong>
                </div>
                <div className="flex flex-col gap-1">
                    <span className="text-xs text-zinc-400">Disponível hoje</span>
                    <strong className="text-2xl">R$ 50,00</strong>
                </div>
            </div>
            <CaretRight />
        </section>
        <Sheet isOpen={isSheetOpen} onClose={() => setIsSheetOpen(false)} transition="rightToLeft">
            <Dialog.Title className="flex flex-row p-4">
                <button onClick={() => setIsSheetOpen(false)} className="shadow-none outline-none">
                    <CaretLeft size={32} />
                </button>
            </Dialog.Title>

            <WalletDetails />
        </Sheet>
        </>
    )
}