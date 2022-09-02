import { ArrowsDownUp } from "phosphor-react";
import { useEffect, useState } from "react";
import { useTransactions } from "../../contexts/TransactionsContext/useTransactions";
import { Search } from "../Search";
import { H2 } from "../Typography";
import { Transaction } from "./Transaction";

export function Transactions() {  
    const {
        transactions,
        loadTransactions,
        loadTransactions2
    } = useTransactions()

    useEffect(() => {
        loadTransactions()
    }, [])

    return (
        <div className="flex flex-col gap-8 bg-zinc-800 p-4 py-8 pb-36 h-fit">
            <header className="flex flex-row gap-2 items-center">
                <ArrowsDownUp size={24} />
                <H2>Transações</H2>
            </header>
            
            <Search />

            <div className="flex flex-col gap-8">
                <div className="sticky top-0 w-full h-full py-4 bg-zinc-800">
                    <span className="text-sm">12 ago</span>
                </div>
                {
                    transactions.map(transaction => {
                        return (
                            <Transaction 
                                key={transaction.id}
                                type={transaction.type}
                                description={transaction.description}
                                amount={transaction.amount}
                            />
                        )
                    })
                }
            </div>

            <Transaction type="welcome" />
        </div>
    )
}