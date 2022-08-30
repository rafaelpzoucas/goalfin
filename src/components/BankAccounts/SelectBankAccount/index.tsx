import { useBankAccount } from "../../../contexts/BankAccountContext/useBankAccount";
import { Search } from "../../Search";
import { BankAccount } from "../MyBankAccounts/BankAccount";

export function SelectBankAccount() {
    const {
        handleChooseBankAccount
    } = useBankAccount()

    return (
        <div className="flex flex-col gap-8 p-4">
            <strong>
                Selecione o seu banco
            </strong>
            <Search />

            <BankAccount
                click={handleChooseBankAccount} 
                type="select-new-bank" 
            />
            <BankAccount
                click={handleChooseBankAccount} 
                type="select-new-bank" 
            />
            <BankAccount
                click={handleChooseBankAccount} 
                type="select-new-bank" 
            />
        </div>
    )
}