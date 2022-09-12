import { ArrowDown, ArrowUp, CaretRight, DotsThreeVertical, Target } from "phosphor-react"
import { useState } from "react"
import { currencyFormatter, dateFormatter } from "../../utils/formatter"
import { ProgressBar } from "../ProgressBar"
import { Sheet } from "../Sheets/Sheet"
import { SheetHeader } from "../Sheets/SheetHeader"
import { Transaction } from "../Transactions/Transaction"
import { H1, H2 } from "../Atoms/Typography"

interface GoalProps {
    type?: "list" | "detailed" | "short"
    click?: () => void

    id?: number
    description?: string
    amount?: string
    saved?: string
    finalDate?: string
    createdAt?: string
}

export function Goal({ click, type, description, saved, amount, finalDate }: GoalProps) {
    const [isGoalsDetailsSheetOpen, setIsGoalsDetailsSheetOpen] = useState(false)

    return (
        <div 
            className={`
                flex flex-col gap-4 rounded-lg
                ${(type === 'detailed' || type === 'short') && 'p-4 bg-zinc-100 border dark:border-none dark:bg-zinc-800'}
            `}
            onClick={
                type === 'list' 
                ? click 
                : () => setIsGoalsDetailsSheetOpen(true)
            }
        >
            <div className="flex items-center justify-center gap-4 w-full">
                <div className="flex flex-col gap-1 w-full">
                    <header 
                        className={`
                            flex flex-row justify-between
                            ${
                                type === 'list' && 'items-center'
                            }
                        `}
                    >
                        <div 
                            className={`
                                flex gap-3 w-full
                                ${type === 'detailed' || type === 'list' ? 'items-center flex-row' : 'flex-col'}
                            `}
                        >
                            <div 
                                className={`
                                    bg-zinc-300 dark:bg-zinc-700 w-fit rounded-full text-xl
                                    ${type === 'list' ? 'p-3 text-2xl' : 'p-1'}
                                `}
                            >
                                <Target />
                            </div>
                            <strong 
                                className={`
                                    text-sm
                                    ${type === 'short' && 'w-full truncate'}
                                `}
                            >
                                {description}
                            </strong>
                        </div>

                        {
                            type === "short"
                            ? null
                            : <CaretRight size={16} />
                        }
                    </header>
                </div>
            </div>
            {
                type !== "list" && (
                    type === "detailed" ? (
                        <div className="flex flex-col gap-2 w-full">
                            <div className="flex flex-row justify-between text-xs text-zinc-600 dark:text-zinc-400">
                                <span className="text-xs">Faltam R$ 1.800,00</span>
                                <span className="text-xs">{finalDate}</span>
                            </div>
                            <div>
                                <div className="relative w-full h-1 bg-zinc-200 dark:bg-zinc-600">
                                    <div className="absolute w-1/3 h-1 bg-emerald-500"></div>
                                </div>
                            </div>
                            <div className="flex flex-row justify-between">
                                <strong className="text-base text-emerald-600 dark:text-emerald-500">{saved}</strong>
                                <span className="text-xs text-zinc-600 dark:text-zinc-400">{amount}</span>
                            </div>
                        </div>
                    ) : (
                        <div className="flex flex-col gap-4">
                            <div className="flex flex-col">
                                <strong className="text-sm">R$ 50,00</strong>
                                <span className="leading-[0.5rem] text-xs text-zinc-600 dark:text-zinc-400">para este mês</span>
                            </div>
                            <div className="flex flex-col text-xs">
                                <strong className="text-lg">{saved}</strong> 
                                <span className="leading-[0.5rem] text-zinc-600 dark:text-zinc-400">de {amount}</span>
                            </div>
                        </div>
                    )
                )
            }
            <Sheet 
                isOpen={isGoalsDetailsSheetOpen}
                onClose={() => setIsGoalsDetailsSheetOpen(false)}
                transition="rightToLeft"
            >
                <SheetHeader 
                    action={() => setIsGoalsDetailsSheetOpen(false)} 
                    type="back"
                    hasOptions
                />

                <div className="flex flex-col gap-8">
                    <div className="flex flex-col gap-8 p-4">
                        <H2>{description}</H2>

                        <div className="flex flex-col">
                            <strong className="text-2xl">{saved}</strong>
                            <span className="text-zinc-600 dark:text-zinc-400">de {amount}</span>
                            <div className="mt-4">
                                <div className="relative w-full h-1 bg-zinc-200 dark:bg-zinc-600">
                                    <div className="absolute w-1/3 h-1 bg-emerald-500"></div>
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-2">
                            <button className="flex items-center justify-center gap-2 p-4 bg-zinc-100 dark:bg-zinc-800 border dark:border-zinc-700 rounded-lg ">
                                <ArrowUp size={24} />
                                <strong>
                                    Resgatar
                                </strong>
                            </button>
                            <button className="flex items-center justify-center gap-2 p-4 bg-emerald-600 text-zinc-100 border dark:border-none rounded-lg ">
                                <ArrowDown size={24} />
                                <strong>
                                    Guardar
                                </strong>
                            </button>
                        </div>
                    </div>

                    <div className="flex flex-col gap-8 border-t dark:border-none bg-zinc-100 dark:bg-zinc-900 p-4 py-8 pb-36 h-fit">
                        <header className="flex flex-row gap-2 items-center">
                            <H2>Histórico</H2>
                        </header>
                        
                        <div 
                            // key={transaction.date} 
                            className="flex flex-col gap-8"
                        >
                            <div className="sticky -top-[1px] w-full h-full py-4 bg-zinc-100 dark:bg-zinc-900">
                                <span className="text-sm">{dateFormatter.format(Date.parse("10/09/2022"))}</span>
                            </div>

                            <Transaction 
                                // key={item.id}
                                type={"goal"}
                                description={'item.description'}
                                amount={500}
                            />
                        </div>
                    </div>
                </div>
            </Sheet>
        </div>
    )
}