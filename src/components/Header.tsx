import { CurrencyCircleDollar, Eye, Plus } from "phosphor-react";

export function Header() {
    return (
        <header className="flex flex-col gap-8 p-4 pb-8 bg-brand-800 text-slate-100 dark:bg-slate-800">
            <div className="flex flex-row items-start justify-between">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-brand-700 dark:bg-slate-700">R</div>
                <button>
                    <Eye size={24} />
                </button>
            </div>
            <h1>Olá, <strong>Rafael</strong></h1>
        </header>
    )
}