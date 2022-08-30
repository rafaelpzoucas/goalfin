import { ArrowsDownUp } from "phosphor-react";
import { Search } from "../Search";
import { H2 } from "../Typography";
import { Transaction } from "./Transaction";

export function Transactions() {
    return (
        <div className="flex flex-col gap-8 bg-zinc-800 p-4 py-8 pb-36 h-fit">
            <header className="flex flex-row gap-2 items-center">
                <ArrowsDownUp size={24} />
                <H2>Transações</H2>
            </header>
            
            <Search />

            <div className="flex flex-col gap-8">
                <div className="sticky top-0 w-full h-full py-4 bg-zinc-800">
                    <span className="text-sm">12 Agosto</span>
                </div>

                <Transaction 
                    type="outcome"
                    title="Mercado"
                    amount="R$ 50,00"
                />
                <Transaction 
                    type="income"
                    title="Mercado"
                    amount="R$ 50,00"
                />
                <Transaction 
                    type="goal"
                    title="Mercado"
                    amount="R$ 50,00"
                />
            </div>

            <Transaction type="welcome" />
        </div>
    )
}