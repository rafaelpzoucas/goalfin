import { CurrencyDollar, TrendDown, TrendUp } from "phosphor-react";
import { ISummaryCard } from "./types";

export function SummaryCard({ type }: ISummaryCard) {
    return (
        <div className={`
            bg-zinc-700 rounded-lg p-4
            ${
                type === "total"
                ? "bg-emerald-700"
                : "bg-zinc-700"
            }
        `}>
            <header className="flex justify-between">
                <span className="text-sm">
                    {
                        type === "income"
                        ? "Entradas"
                        : type === "outcome"
                        ? "Saídas"
                        : "Total"
                    }
                </span>

                {
                    type === "income"
                    ? <TrendUp size={32} color="#00b37e" />
                    : type === "outcome"
                    ? <TrendDown size={32} color="#f75a68" />
                    : <CurrencyDollar size={32} />
                }
            </header>

            <strong className="text-3xl block mt-4">
                R$ 17.400,00
            </strong>
        </div>
    )
}