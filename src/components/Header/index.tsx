import { CurrencyCircleDollar, Plus } from "phosphor-react";

export function Header() {
    return (
        <header className="bg-zinc-900 pt-10 pb-[7.5rem]">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-8 w-full max-w-6xl px-6 m-auto">
                <strong className="flex flex-row items-center justify-center gap-1 text-3xl">
                    <CurrencyCircleDollar  />
                    money app
                </strong>
                <button className="fixed bottom-5 right-4 p-4 sm:static sm:h-12 bg-emerald-500 text-white font-bold sm:px-5 rounded-full sm:rounded-lg cursor-pointer hover:bg-emerald-700 transition-colors duration-150">
                    <span className="hidden sm:block">Nova transação</span>
                    <Plus size={32} weight="bold" className="sm:hidden" />
                </button>
            </div>
        </header>
    )
}