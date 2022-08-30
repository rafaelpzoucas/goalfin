import { ArrowDown, ArrowUp, CaretRight, Sparkle, Target, TrendDown, TrendUp } from "phosphor-react";

interface TransactionProps {
    type: "welcome" | "income" | "outcome" | "goal" 
    title?: string
    amount?: string
}

export function Transaction({ type, title, amount }: TransactionProps) {
    return (
        <div className="flex items-center justify-center gap-4 ">
            <div className="flex items-center justify-center rounded-full bg-zinc-700 p-2">
                {
                    type === "income"
                    ? <ArrowUp size={24} className="text-green-500" />
                    : type === "outcome"
                    ? <ArrowDown size={24} className="text-red-500" />
                    : type === "goal"
                    ? <Target size={24} />
                    : <Sparkle size={24} />
                }
            </div>

            <div className="flex flex-col gap-1 w-full">
                <header className="flex flex-row justify-between">
                    <strong>
                        {
                            title
                            ? title
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
                        amount
                        ? (
                            <>
                            <span className="text-xs">Total</span>
                            <span className="text-sm">{amount}</span>
                            </>
                        ) : (
                            <span className="text-xs">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</span>
                        )
                    }
                </div>
            </div>
        </div>
    )
}