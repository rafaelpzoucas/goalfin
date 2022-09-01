import { CaretRight, ClipboardText } from "phosphor-react";
import { useState } from "react";
import { ProgressBar } from "../ProgressBar";
import { Sheet } from "../Sheets/Sheet";

export function Planning() {
    const [isSheetOpen, setIsSheetOpen] = useState(false)

    return (
        <>
        <section
            onClick={() => setIsSheetOpen(true)} 
            className="flex flex-col items-start justify-between gap-6 px-4 py-12"
        >
            <header className="flex flex-row justify-between w-full">
                <div className="flex flex-row gap-2">
                    <ClipboardText size={24}/>
                    <div className="flex flex-col">
                        <strong>Planejamento</strong>
                        <span className="text-xs text-zinc-400">agosto</span>
                    </div>
                </div>
                <CaretRight />
            </header>

            <ProgressBar />
            <ProgressBar />
        </section>
        <Sheet isOpen={isSheetOpen} onClose={() => setIsSheetOpen(false)} transition="rightToLeft">
            <button onClick={() => setIsSheetOpen(false)}>X</button>
            planejamento
        </Sheet>
        </>
    )
}