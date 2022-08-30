import { Bank } from "phosphor-react";
import { H2 } from "../Typography";
import { BankAccount } from "./BankAccount";

export function MyBankAccounts() {
    return (
        <div className="flex flex-col gap-8 bg-zinc-800 p-4 py-8 pb-36 h-fit">
            <header className="flex flex-row gap-2 items-center">
                <H2>Minhas contas</H2>
            </header>

            <BankAccount type="selected-bank" />
            <BankAccount type="selected-bank" />
            <BankAccount type="selected-bank" />
        </div>
    )
}