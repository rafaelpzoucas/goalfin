import { Popover, Transition } from "@headlessui/react";
import { ArrowsDownUp, Bank, Coins, Plus, Target } from "phosphor-react";
import { Fragment } from "react";
import { useBankAccounts } from "../../contexts/BankAccountsContext/useBankAccounts";
import { useGoals } from "../../contexts/GoalsContext/useGoals";
import { useSaveMoney } from "../../contexts/SaveMoneyContext/useBankAccount";
import { useTransactions } from "../../contexts/TransactionsContext/useTransactions";

export function PlusButton() {
    const {
        setIsChooseBankSheetOpen,
    } = useBankAccounts()
    const {
        setIsNewGoalSheetOpen
    } = useGoals()
    const {
        setIsSaveMoneySheetOpen
    } = useSaveMoney()

    const {
        setIsNewTransactionSheetOpen
    } = useTransactions()

    return (
        <Popover className="relative bottom-0">
            {({ open }) => (
            <>
            <Popover.Button 
                className="fixed bottom-4 right-4 p-4 rounded-full bg-brand-800 outline-none sm:focus:outline outline-offset-2 focus:outline-brand-700 transition-all duration-150 text-slate-100"
            >
                <Plus size={24} weight={"bold"} className={`transition-all duration-150 ${open && "rotate-45"}`} />
            </Popover.Button>

            <Transition
                enter="transition duration-100 ease-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-75 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
                as={Fragment}
                >
                <Popover.Panel className="fixed right-4 bottom-20 z-10 w-full max-w-xs p-2 rounded-lg bg-white shadow-lg text-slate-900 dark:bg-slate-800 dark:text-slate-100">
                    <ul className="flex flex-col gap-4 p-2">
                        <li>
                            <button 
                                className="flex flex-row items-center gap-3 w-full p-4"
                                onClick={() => setIsChooseBankSheetOpen(true)}
                            >
                                <Bank size={24} />
                                <span>Nova conta bancária</span>
                            </button>
                        </li>
                        <li>
                            <button 
                                className="flex flex-row items-center gap-3 w-full p-4"
                                onClick={() => setIsNewGoalSheetOpen(true)}
                                >
                                <Target size={24} />
                                <span>Novo objetivo</span>
                            </button>
                        </li>
                        <li>
                            <button 
                                className="flex flex-row items-center gap-3 w-full p-4"
                                onClick={() => setIsNewTransactionSheetOpen(true)}
                                >
                                <ArrowsDownUp size={24} />
                                <span>Nova transação</span>
                            </button>
                        </li>
                        <li>
                            <button 
                                className="flex flex-row items-center gap-3 w-full p-4"
                                onClick={() => setIsSaveMoneySheetOpen(true)}
                            >
                                <Coins size={24} />
                                <span>Guardar dinheiro</span>
                            </button>
                        </li>
                    </ul>
                </Popover.Panel>
            </Transition>
            </>
            )}
        </Popover>
    )
}