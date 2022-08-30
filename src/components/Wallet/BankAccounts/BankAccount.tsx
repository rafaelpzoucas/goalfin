import { Bank, CaretRight, DotsThreeVertical } from "phosphor-react";

interface BankAccountProps {
    type?: "select-new-bank" | "selected-bank"
    click?: () => void
}

export function BankAccount({ click, type }: BankAccountProps) {

    return (
        <div 
            className="flex flex-col gap-8"
            onClick={click}
        >
            <div className="flex items-center justify-center gap-4">
                <div className="flex items-center justify-center rounded-full bg-zinc-700 p-4">
                    <Bank />
                </div>
                <div className="flex flex-col gap-1 w-full">
                    <header className="flex flex-row items-center justify-between">
                        <strong>Nubank</strong>
                        {
                            type !== "select-new-bank"
                            ? <DotsThreeVertical size={24} />
                            : <CaretRight size={20} />
                        }
                    </header>

                    {
                      type !== "select-new-bank" &&
                        <div className="flex flex-col">
                            <span className="text-xs text-zinc-400">Saldo atual</span>
                            <span className="text-sm">R$ 2.000,00</span>
                        </div> 
                    }
                </div>
            </div>
        </div>
    )
}