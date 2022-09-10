import { ArrowDown, ArrowUp, CaretRight, Sparkle, Target, TrendDown, TrendUp } from "phosphor-react";
import { useState } from "react";
import { currencyFormatter, dateFormatter } from "../../utils/formatter";
import { Sheet } from "../Sheets/Sheet";
import { SheetHeader } from "../Sheets/SheetHeader";
import { H2 } from "../Typography";

interface TransactionProps {
    type: "welcome" | "income" | "spending" | "goal" 
    description?: string
    amount?: number
}

export function Transaction({ type, description, amount }: TransactionProps) {
    const [isTransactionDetailsSheetOpen, setIsTransactionDetailsSheetOpen] = useState(false)

    return (
        <div 
            className="flex items-center justify-center gap-4"
            onClick={() => setIsTransactionDetailsSheetOpen(true)}
        >
            <div className="flex items-center justify-center rounded-full bg-zinc-900 bg-opacity-10 dark:bg-zinc-100 dark:bg-opacity-10 p-2">
                {
                    type === "income"
                    ? <ArrowDown size={24} className="text-emerald-500" />
                    : type === "spending"
                    ? <ArrowUp size={24} className="text-red-500" />
                    : type === "goal"
                    ? <Target size={24} />
                    : <Sparkle size={24} />
                }
            </div>

            <div className="flex flex-col gap-1 w-full">
                <header className="flex flex-row justify-between">
                    <strong>
                        {
                            description
                            ? description
                            : 'Bem vindo' 
                        }
                    </strong>
                    {
                        type !== "welcome"
                        && <CaretRight />
                    }
                </header>
                <div className="flex flex-row items-baseline justify-between w-full">
                    {
                        amount ? (
                            <>
                            <span className="text-xs">
                                Total
                            </span>
                            <span className={`
                                text-sm
                                ${type === 'spending' && 'text-red-600 dark:text-red-500'}
                                ${type === 'income' && 'text-emerald-600 dark:text-emerald-500'}
                            `}>
                                {type === 'spending' && '- '}
                                {currencyFormatter.format(amount)}
                            </span>
                            </>
                        ) : (
                            <span className="text-xs">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</span>
                        )
                    }
                </div>
            </div>
            <Sheet 
                isOpen={isTransactionDetailsSheetOpen}
                onClose={() => setIsTransactionDetailsSheetOpen(false)}
                transition="rightToLeft"
            >
                <SheetHeader 
                    action={() => setIsTransactionDetailsSheetOpen(false)} 
                    type="close"
                />

                <div className="flex flex-col gap-8">
                    <div className="flex flex-col gap-8 p-4">
                        <H2>{description}</H2>

                        <div className="flex flex-col">
                            <strong className="text-2xl">{amount}</strong>
                        </div>
                    </div>
                </div>
            </Sheet>
        </div>
    )
}