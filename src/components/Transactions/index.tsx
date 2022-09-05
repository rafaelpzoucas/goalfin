import { ArrowsDownUp } from "phosphor-react";
import { useEffect, useState } from "react";
import { useTransactions } from "../../contexts/TransactionsContext/useTransactions";
import { dateFormatter } from "../../utils/formatter";
import { Search } from "../Atoms/Form/Search";
import { H2 } from "../Typography";
import { Transaction } from "./Transaction";

export function Transactions() {  
    const [transactionsList, setTransactionsList] = useState()

    const {
        transactions,
        loadTransactions,
        loadTransactions2
    } = useTransactions()

    useEffect(() => {
        loadTransactions2()
    }, [])

    console.log(transactions)

    return (
        <div className="flex flex-col gap-8 border-t dark:border-none bg-zinc-100 dark:bg-zinc-800 p-4 py-8 pb-36 h-fit">
            <header className="flex flex-row gap-2 items-center">
                <ArrowsDownUp size={24} />
                <H2>Transações</H2>
            </header>
            
            <Search />

            {
                transactions.map(transaction => {
                    return(
                        <div 
                            key={transaction.date} 
                            className="flex flex-col gap-8"
                        >
                            <div className="sticky -top-[1px] w-full h-full py-4 bg-zinc-100 dark:bg-zinc-800">
                                <span className="text-sm">{dateFormatter.format(Date.parse(transaction.date))}</span>
                            </div>
                            {
                                transaction.model.map(item => {
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
            }

            <Transaction type="welcome" />
        </div>
    )
}