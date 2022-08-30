import { BankAccount } from "../BankAccounts/MyBankAccounts/BankAccount";
import { Goal } from "../Goals/Goal";
import { Search } from "../Search";

export function SaveMoney() {
    return (
        <div className="flex flex-col gap-8 p-4">
            <div className="flex flex-col">
                <strong>
                    Selecione o seu objetivo
                </strong>
                <span className="text-xs text-zinc-400">
                    Qual o seu objetivo guardando este dinheiro?
                </span>
            </div>
            <Search />

            <Goal 
                type="select-new-goal"
                click={() => {}}
            />
        </div>
    )
}