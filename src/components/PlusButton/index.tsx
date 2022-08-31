import { Popover, Transition } from "@headlessui/react";
import { Plus } from "phosphor-react";
import { Fragment } from "react";
import { useSaveMoney } from "../../contexts/SaveMoneyContext/useBankAccount";
import { useTransactions } from "../../contexts/TransactionsContext/useTransactions";

export function PlusButton() {
    const {
        setIsSaveMoneySheetOpen
    } = useSaveMoney()

    const {
        setIsNewTransactionSheetOpen
    } = useTransactions()

    return (
        <Popover className="relative bottom-0">
            <Popover.Button className="fixed bottom-4 right-4 p-4 rounded-full bg-emerald-800 sm:focus:outline outline-offset-2 outline-4 outline-emerald-700 transition-all duration-150">
                <Plus size={24} weight={"bold"} />
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
                <Popover.Panel className="fixed right-4 bottom-20 z-10 p-4 rounded-lg bg-zinc-800">
                    <ul className="flex flex-col gap-2 p-2">
                        <li>
                            <button 
                                className="p-4"
                                onClick={() => setIsSaveMoneySheetOpen(true)}
                            >
                                Guardar dinheiro
                            </button>
                        </li>
                        <li>
                            <button 
                                className="p-4"
                                onClick={() => setIsNewTransactionSheetOpen(true)}
                            >
                                Nova transação
                            </button>
                        </li>
                    </ul>
                </Popover.Panel>
            </Transition>
        </Popover>
    )
}