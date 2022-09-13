import { ArrowDown, ArrowRight, ArrowUp, CaretRight, Check, DotsThreeVertical, Target } from "phosphor-react"
import { useRef, useState } from "react"
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
    const [isGoalOperationSheetOpen, setIsGoalOperationSheetOpen] = useState(false)

    const [operationType, setOperationType] = useState("")

    let initialFocus = useRef(null)

    function handleOpenGoalOperationsSheet() {
        setIsGoalOperationSheetOpen(true)
        setOperationType("redeem")
    }

    return (
        <div 
            className="flex flex-col gap-4 rounded-lg p-4 bg-zinc-100 border dark:border-none dark:bg-zinc-800"
            onClick={
                type === 'list' 
                ? click 
                : () => setIsGoalsDetailsSheetOpen(true)
            }
        >
            <div className="flex flex-col items-center justify-center gap-4 w-full">
                <header className="flex flex-row justify-between w-full">
                    <div className={`bg-zinc-300 dark:bg-zinc-700 w-fit rounded-full text-xl p-1`}>
                        <Target />
                    </div>

                    <CaretRight  />
                </header>

                <strong 
                    className={`
                        text-sm
                        ${type === 'short' && 'w-full truncate'}
                    `}
                >
                    {description}
                </strong>
            </div>

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
                            <button 
                                className="flex items-center justify-center gap-2 p-4 bg-zinc-100 dark:bg-zinc-800 border dark:border-zinc-700 rounded-lg"
                                onClick={() => {
                                    setIsGoalOperationSheetOpen(true)
                                    setOperationType("redeem")
                                }}
                            >
                                <ArrowUp size={24} />
                                <strong>
                                    Resgatar
                                </strong>
                            </button>
                            <button 
                                className="flex items-center justify-center gap-2 p-4 bg-emerald-600 text-zinc-100 border dark:border-none rounded-lg"
                                onClick={() => {
                                    setIsGoalOperationSheetOpen(true)
                                    setOperationType("save")
                                }}
                            >
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

            <Sheet 
                isOpen={isGoalOperationSheetOpen}
                onClose={() => setIsGoalOperationSheetOpen(false)}
                transition="rightToLeft"
                initialFocus={initialFocus}
            >
                <SheetHeader 
                    action={() => setIsGoalOperationSheetOpen(false)} 
                    type="close"
                />

                {
                    operationType === "redeem" ? (
                        <div className="flex flex-col gap-8">
                            <section className="flex flex-col px-4">
                                <H1>Quanto você quer resgatar?</H1>
                                <div 
                                    className="text-sm text-zinc-600 dark:text-zinc-400"
                                >
                                    <span>Você pode resgatar até </span>
                                    <strong className="text-zinc-100"> R$ 7,00</strong>
                                </div>
                            </section>

                            <section className="px-4">
                                <span className="text-sm text-zinc-600 dark:text-zinc-400">{description}</span>
                                <input 
                                    ref={initialFocus} 
                                    type="text" 
                                    inputMode="numeric" 
                                    placeholder="R$ 0,00" 
                                    className="bg-transparent text-3xl py-2 shadow-none border-none outline-none" 
                                />
                                <button 
                                    className="flex flex-row items-center gap-2 pt-4"
                                >
                                    <strong>Resgatar tudo</strong>
                                    <ArrowRight weight="bold" size={20} />
                                </button>
                            </section>

                            <button 
                                className="fixed bottom-20 right-4 p-4 rounded-full bg-emerald-700 disabled:opacity-25 transition-all duration-150 text-zinc-100"
                                onClick={() => setIsGoalOperationSheetOpen(false)}
                            >
                                <Check size={24} />
                            </button>
                        </div>
                    ) : (
                        <div className="flex flex-col gap-8">
                            <section className="flex flex-col px-4">
                                <H1>Quanto você quer guardar?</H1>
                                <div 
                                    className="text-sm text-zinc-600 dark:text-zinc-400"
                                >
                                    <span>Seu saldo disponível é </span>
                                    <strong className="text-zinc-100"> R$ 7,00</strong>
                                </div>
                            </section>

                            <section className="px-4">
                                <span className="text-sm text-zinc-600 dark:text-zinc-400">{description}</span>
                                <input 
                                    ref={initialFocus} 
                                    type="text" 
                                    inputMode="numeric" 
                                    placeholder="R$ 0,00" 
                                    className="bg-transparent text-3xl py-2 shadow-none border-none outline-none" 
                                />
                            </section>

                            <button 
                                className="fixed bottom-20 right-4 p-4 rounded-full bg-emerald-700 disabled:opacity-25 transition-all duration-150 text-zinc-100"
                                onClick={() => setIsGoalOperationSheetOpen(false)}
                            >
                                <Check size={24} />
                            </button>
                        </div>
                    )
                }
            </Sheet>
        </div>
    )
}