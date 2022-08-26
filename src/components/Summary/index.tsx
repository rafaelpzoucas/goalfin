import { CurrencyDollar, TrendDown, TrendUp } from "phosphor-react";
import { SummaryCard } from "./SummaryCard";

export function Summary() {
    return (
        <section className="flex flex-col sm:grid grid-cols-3 gap-6 w-full max-w-6xl m-auto px-4 -mt-20">
            <SummaryCard
                type="income"
            />
            <SummaryCard
                type="outcome"
            />
            <SummaryCard
                type="total"
            />
        </section>
    )
}