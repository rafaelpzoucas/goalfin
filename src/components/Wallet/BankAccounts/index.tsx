import { useEffect } from "react";
import { useBankAccounts } from "../../../contexts/BankAccountsContext/useBankAccounts";
import { currencyFormatter } from "../../../utils/formatter";
import { H2 } from "../../Typography";
import { BankAccount } from "./BankAccount";

export function MyBankAccounts() {
    const {
        userBankAccounts
    } = useBankAccounts()

    return (
        <div className="flex flex-col gap-8 border-t dark:border-none bg-zinc-100 dark:bg-zinc-800 p-4 py-8 pb-36 h-fit">
            <header className="flex flex-row gap-2 items-center">
                <H2>Minhas contas</H2>
            </header>

            {
                userBankAccounts.map(userBankAccount => {
                    return (
                        <BankAccount 
                            key={userBankAccount.id}
                            type="selected-bank" 
                            bank={userBankAccount.bank}
                            balance={currencyFormatter.format(userBankAccount.balance)}
                        />
                    )
                })
            }
        </div>
    )
}