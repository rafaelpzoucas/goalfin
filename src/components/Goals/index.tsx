import { CaretRight, Target } from "phosphor-react";
import { useState } from "react";
import { ProgressBar } from "../ProgressBar";
import { Sheet } from "../Sheet";

export function Goals() {
    const [isSheetOpen, setIsSheetOpen] = useState(false)

    return (
        <>
        <section
            onClick={() => setIsSheetOpen(true)} 
            className="flex flex-col items-start justify-between gap-6 px-4 py-8"
        >
            <header className="flex flex-row justify-between w-full">
                <div className="flex flex-row gap-2">
                    <Target size={24}/>
                    <strong>Objetivos</strong>
                </div>
                <CaretRight />
            </header>

            <div className="flex flex-col gap-1">
                <span className="text-xs text-zinc-400">Guardar este mês</span>
                <strong className="text-2xl">R$ 500,00</strong>
            </div>

            <ProgressBar />
        </section>
        <Sheet isOpen={isSheetOpen} onClose={() => setIsSheetOpen(false)} transition="rightToLeft">
            <button onClick={() => setIsSheetOpen(false)}>X</button>
            ovjetivos
        </Sheet>
        </>
    )
}