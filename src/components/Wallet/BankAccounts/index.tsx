import { useEffect } from "react";
import { useBankAccounts } from "../../../contexts/BankAccountsContext/useBankAccounts";
import { H2 } from "../../Typography";
import { BankAccount } from "./BankAccount";

export function MyBankAccounts() {
    const {
        loadUserBankAccounts,
        loadUserBankAccounts2,
        userBankAccounts
    } = useBankAccounts()

    return (
        <div className="flex flex-col gap-8 bg-zinc-800 p-4 py-8 pb-36 h-fit">
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
                            balance={userBankAccount.balance}
                        />
                    )
                })
            }
        </div>
    )
}