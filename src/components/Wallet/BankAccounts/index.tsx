import { useEffect } from "react";
import { useBankAccounts } from "../../../contexts/BankAccountsContext/useBankAccounts";
import { currencyFormatter } from "../../../utils/formatter";
import { H2 } from "../../Atoms/Typography";
import { BankAccount } from "./BankAccount";

export function BankAccounts() {
    const {
        userBankAccounts
    } = useBankAccounts()

    return (
        <div className="flex flex-col gap-8 border-t dark:border-slate-800 bg-slate-100 dark:bg-slate-900 p-4 py-8 pb-36">
            <H2>Minhas contas</H2>

            {
                userBankAccounts.map(userBankAccount => {
                    return (
                        <BankAccount 
                            key={userBankAccount.id}
                            type="selected-bank" 
                            bank={userBankAccount.bank}
                            balance={currencyFormatter.format(userBankAccount.balance)}
                            hasOptions
                        />
                    )
                })
            }
        </div>
    )
}