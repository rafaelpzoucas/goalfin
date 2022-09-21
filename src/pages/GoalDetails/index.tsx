import { motion } from "framer-motion";
import { ArrowDown, ArrowRight, ArrowUp, Check } from "phosphor-react";
import { useParams, useNavigate } from "react-router-dom"
import { H1, H2 } from "../../components/Atoms/Typography";
import { Header } from "../../components/Header";
import { slidePageRightToLeft } from "../../components/Atoms/PageAnimations";
import { Transaction } from "../../components/Transactions/Transaction";
import { currencyFormatter, dateFormatter } from "../../utils/formatter";
import { NavHeader } from "../../components/Molecules/NavHeader";
import { useEffect, useRef, useState } from "react";
import { Sheet } from "../../components/Sheets/Sheet";
import { SheetHeader } from "../../components/Sheets/SheetHeader";
import { api } from "../../lib/axios";
import { GoalProps } from "../../contexts/GoalsContext/types";
import { TransactionSkeleton } from "../../components/Transactions/TransactionSkeleton";
import { useTransactions } from "../../contexts/TransactionsContext/useTransactions";

interface GoalDetailProps {
    description: string
    saved: number
    amount: number
}

export function GoalDetails() {
    let initialFocus = useRef(null)

    const [goalDetails, setGoalDetails] = useState<GoalDetailProps>()

    const [isGoalOperationSheetOpen, setIsGoalOperationSheetOpen] = useState(false)
    const [operationType, setOperationType] = useState("") 
    
    const { id } = useParams()

    const percentToAchive = goalDetails && ((100 * goalDetails.saved) / goalDetails.amount)

    const {
        fetchTransactions,
        transactions
    } = useTransactions()

    async function fetchGoalDetails() {
        const response = await api.get(`/goals/${id}`)

        setGoalDetails(response.data)  
    } 
    
    useEffect(() => {
        fetchGoalDetails()
        fetchTransactions()
    }, []) 

    console.log(percentToAchive); 
    
    return(
        <>
        <motion.div
            variants={slidePageRightToLeft}
            initial="hidden"
            animate="visible"
            exit="exit"
        >
            <NavHeader />

            <div className="flex flex-col gap-8">
                <div className="flex flex-col gap-8 p-4">
                    <H2>
                        {
                            goalDetails 
                            ? goalDetails.description 
                            : <div className="w-40 h-4 rounded-sm bg-zinc-300 dark:bg-zinc-700 animate-pulse"></div>
                        }
                    </H2>

                    <div className="flex flex-col">
                        <strong className="text-2xl">
                            {
                                goalDetails 
                                ? currencyFormatter.format(goalDetails.saved)
                                : <div className="w-32 h-6 rounded-sm bg-zinc-300 dark:bg-zinc-700 animate-pulse"></div>
                            }
                        </strong>
                        <span className="text-zinc-600 dark:text-zinc-400">
                            {
                                goalDetails 
                                ? `de  ${currencyFormatter.format(goalDetails.amount)}` 
                                : <div className="w-36 h-4 mt-2 rounded-sm bg-zinc-300 dark:bg-zinc-700 animate-pulse"></div>
                            }
                        </span>
                        <div className="mt-4">
                            <div className="relative w-full h-1 bg-zinc-200 dark:bg-zinc-600">
                                <div style={{ width: `${percentToAchive}%` }} className={`absolute h-1 bg-emerald-500 transition-all duration-200`}></div>
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
                    
                    <div className="flex flex-col gap-8">
                        {transactions.length !== 0 ? (
                            transactions.filter(item => item.model).map(transaction => {
                                return(
                                    <div 
                                        key={transaction.date} 
                                        className="flex flex-col gap-8"
                                    >
                                        <div className="sticky -top-[1px] w-full h-full py-4 bg-zinc-100 dark:bg-zinc-900">
                                            <span className="text-sm">{dateFormatter.format(Date.parse(transaction.date))}</span>
                                        </div>
                                        {
                                            transaction.model.filter(item => item.type === "goal" && item.description === goalDetails?.description ).map(item => {
                                                return (
                                                    <Transaction 
                                                        key={item.id}
                                                        type={item.type}
                                                        description={item.description}
                                                        amount={item.amount}
                                                    />
                                                )
                                            })
                                        }
                                    </div>
                                )
                            })
                        ) : (
                            <div className="flex flex-col gap-8">
                                <div className="w-full h-full py-4 bg-zinc-100 dark:bg-zinc-800">
                                    <div className="w-40 h-4 bg-zinc-200 dark:bg-zinc-700 rounded-sm animate-pulse"></div>
                                </div>

                                <TransactionSkeleton />
                                <TransactionSkeleton />
                                <TransactionSkeleton />
                                <TransactionSkeleton />
                            </div>
                        )}
                    </div>
                </div> 
            </div>
        </motion.div>

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
                            <span className="text-sm text-zinc-600 dark:text-zinc-400">{'description'}</span>
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
                            <span className="text-sm text-zinc-600 dark:text-zinc-400">{'description'}</span>
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
    </>
    )
}