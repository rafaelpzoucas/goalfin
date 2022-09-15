import { CaretRight } from "phosphor-react";
import { Link } from "react-router-dom";
import { Shortcuts } from "../Shortcuts";

export function Wallet() {

    return (
        <div className="flex flex-col gap-8 px-4 py-8">
            <Link 
                to="/wallet"
            >
                <section className="flex flex-row items-start justify-between">
                    <div className="flex flex-col gap-12">
                        <div className="flex flex-col gap-1">
                            <span className="text-xs text-zinc-600 dark:text-zinc-400">Saldo disponível</span>
                            <strong className="text-2xl">R$ 50,00</strong>
                        </div>
                    </div>
                    <CaretRight />
                </section>
            </Link>

            <Shortcuts />
        </div>
    )
}