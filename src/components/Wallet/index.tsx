import { ArrowsDownUp, Bank, CaretLeft, CaretRight, Coins, Target, X } from "phosphor-react";
import { useState } from "react";
import { Sheet } from "../Sheets/Sheet";
import { SheetHeader } from "../Sheets/SheetHeader";
import { Shortcuts } from "../Shortcuts";
import { WalletDetails } from "./WalletDetails";

export function Wallet() {
    const [isSheetOpen, setIsSheetOpen] = useState(false)

    return (
        <div className="flex flex-col gap-8 px-4 py-8">
            <section 
                onClick={() => setIsSheetOpen(true)}
                className="flex flex-row items-start justify-between"
            >
                <div className="flex flex-col gap-12">
                    <div className="flex flex-col gap-1">
                        <span className="text-xs text-zinc-600 dark:text-zinc-400">Saldo disponível</span>
                        <strong className="text-2xl">R$ 50,00</strong>
                    </div>
                </div>
                <CaretRight />
            </section>

            <Shortcuts />
            
            {/* <section className="flex flex-col gap-6 p-4 border dark:border-none bg-zinc-100 dark:bg-zinc-800 rounded-lg">
                <span className="text-xs">Ultima transação</span>
                
                <div className="flex flex-col gap-4">
                    <Transaction type="spending" description="Mercado" amount={100} />
                </div>
            </section> */}
            
            <Sheet isOpen={isSheetOpen} onClose={() => setIsSheetOpen(false)} transition="rightToLeft">
                <SheetHeader 
                    action={() => setIsSheetOpen(false)} 
                    type="back" 
                />

                <WalletDetails />
            </Sheet>
        </div>
    )
}