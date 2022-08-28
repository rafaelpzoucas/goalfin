import { ArrowsDownUp, CaretRight, Coins } from "phosphor-react";
import { Search } from "../Search";
import { H2 } from "../Typography";

export function WalletDetails() {
    return (
        <div className="flex flex-col gap-16 h-full">
            <div className="flex flex-col gap-6 p-4">
                <div className="flex flex-col gap-1">
                    <span className="text-xs text-zinc-400">Disponível hoje</span>
                    <strong className="text-2xl">R$ 50,00</strong>
                </div>

                <div className="flex flex-row justify-between">
                    <div className="flex flex-col">
                        <span className="text-xs text-zinc-400">Disponível para uso</span>
                        <strong className="text-base">R$ 300,00</strong>
                    </div>
                    <CaretRight />
                </div>
                <button className="flex items-center justify-center gap-2 p-4 rounded-lg bg-zinc-700">
                    <Coins />
                    <span>Guardar dinheiro</span>
                </button>
            </div>

            <div className="flex flex-col gap-8 bg-zinc-800 p-4 h-full">
                <header className="flex flex-row gap-2 items-center">
                    <ArrowsDownUp size={24} />
                    <H2>Transações</H2>
                </header>
                
                <Search />
            </div>
        </div>
    )
}