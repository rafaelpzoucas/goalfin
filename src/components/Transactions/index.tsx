import { ArrowsDownUp } from "phosphor-react";
import { useEffect, useState } from "react";
import { Search } from "../Search";
import { H2 } from "../Typography";
import { Transaction } from "./Transaction";

interface TransactionProps {
    id: number
    amount: number
    type: "income" | "outcome"
    date: string
    category: string
    description: string
    createdAt: string
}

export function Transactions() {
    const [transactions, setTransactions] = useState<TransactionProps[]>([])
    const [date, setDate] = useState()

    async function loadTransactions() {
        const response = await fetch('http://192.168.0.102:3333/transactions')
        const data = await response.json()

        setTransactions(data)
    }
    async function loadTransactions2() {
        const response = await fetch('http://192.168.6.119:3333/transactions')
        const data = await response.json()

        setTransactions(data)
    }
    
    useEffect(() => {
        loadTransactions2()
    }, [])

    console.log(transactions);

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
                            <>
                            <Transaction 
                                key={transaction.id}
                                type={transaction.type}
                                description={transaction.description}
                                amount={transaction.amount}
                            />
                            </>
                        )
                    })
                }
            </div>

            <Transaction type="welcome" />
        </div>
    )
}