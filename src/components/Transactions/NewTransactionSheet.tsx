import { Dialog, Listbox, RadioGroup, Transition } from "@headlessui/react";
import { ArrowDown, ArrowDownRight, ArrowUp, ArrowUpLeft, ArrowUpRight, Bank, CaretDown, Check, Target, X } from "phosphor-react";
import { Fragment, useEffect, useRef, useState } from "react";
import { useBankAccounts } from "../../contexts/BankAccountsContext/useBankAccounts";
import { useTransactions } from "../../contexts/TransactionsContext/useTransactions";
import { DateInput } from "../Atoms/Form/DateInput";
import { Input } from "../Atoms/Form/Input";
import { Sheet } from "../Sheets/Sheet";
import { SheetHeader } from "../Sheets/SheetHeader";

export function NewTransactionSheet() {
    const {
        isNewTransactionSheetOpen,
        setIsNewTransactionSheetOpen
    } = useTransactions()
    
    const {
        userBankAccounts,
        loadUserBankAccounts,
        loadUserBankAccounts2
    } = useBankAccounts()

    let initialFocus = useRef(null)
    let [type, setType] = useState('income')
    const [selected, setSelected] = useState(userBankAccounts[0].bank)

    useEffect(() => {
        loadUserBankAccounts2()
    }, [])

    console.log('selected', selected)

    return (
        <Sheet 
            isOpen={isNewTransactionSheetOpen} 
            onClose={() => setIsNewTransactionSheetOpen(false)}
            initialFocus={initialFocus}
            transition="rightToLeft"
        >
            <SheetHeader 
                action={() => setIsNewTransactionSheetOpen(false)} 
                type="close" 
                title="Nova transação" 
            />

            <div className="flex flex-col gap-8 p-4">
                <div className="flex flex-col gap-8">

                    <div className="flex flex-col gap-4">
                        <div>
                            <span className="text-sm text-zinc-600 dark:text-zinc-400">Saldo atual da conta</span>
                            <input 
                                ref={initialFocus} 
                                type="text" 
                                inputMode="numeric" 
                                placeholder="R$ 0,00" 
                                className="bg-transparent text-2xl py-8 shadow-none border-none outline-none" 
                            />
                        </div>

                        <RadioGroup 
                            value={type} 
                            onChange={setType}
                            className="grid grid-cols-2 gap-2"
                        >
                            <RadioGroup.Option value="income">
                                {({ checked }) => (
                                    <div className={`
                                        flex flex-col w-full items-center gap-4 p-4 border dark:border-zinc-700 rounded-lg transition-all duration-150
                                        ${checked && 'border-emerald-600 dark:border-emerald-500 bg-emerald-100 dark:bg-transparent font-bold'}
                                    `}>
                                        <ArrowDownRight size={24} className="text-emerald-500" />
                                        <span className="text-sm">Entrada</span>
                                    </div>
                                )}
                            </RadioGroup.Option>

                            <RadioGroup.Option value="spending">
                                {({ checked }) => (
                                    <div className={`
                                        flex flex-col w-full items-center gap-4 p-4 border dark:border-zinc-700 rounded-lg transition-all duration-150
                                        ${checked && 'border-red-600 dark:border-red-500 bg-red-100 dark:bg-transparent font-bold'}
                                    `}>     
                                        <ArrowUpRight size={24} className="text-red-500" />
                                        <span className="text-sm">Saída</span>
                                    </div>
                                )}
                            </RadioGroup.Option>
                        </RadioGroup>

                        <Listbox value={selected} onChange={setSelected}>
                            <div className="relative mt-1">
                                <span className="text-sm text-zinc-600 dark:text-zinc-400">Conta bancária</span>
                                <Listbox.Button 
                                    className="relative w-full cursor-default rounded-lg border border-zinc-700 p-4 text-left mt-1"
                                >
                                    <div className="flex flex-row items-center gap-6">
                                        <span>
                                            <Bank size={24} />
                                        </span>
                                        <span className="block truncate">{selected}</span>
                                    </div>
                                    <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-4">
                                        <CaretDown
                                            className="h-5 w-5 text-gray-400"
                                        />
                                    </span>
                                </Listbox.Button>
                                <Transition
                                    enter="transition duration-100 ease-out"
                                    enterFrom="transform scale-95 opacity-0"
                                    enterTo="transform scale-100 opacity-100"
                                    leave="transition duration-75 ease-out"
                                    leaveFrom="transform scale-100 opacity-100"
                                    leaveTo="transform scale-95 opacity-0"
                                    as={Fragment}
                                >
                                    <Listbox.Options 
                                        className="absolute mt-1 max-h-80 w-full overflow-auto rounded-lg bg-zinc-800 p-2 shadow-lg focus:outline-none sm:text-sm">
                                        {/* {people.map((bank, bankIdx) => (
                                            <Listbox.Option
                                                key={bankIdx}
                                                className={({ active }) =>
                                                    `cursor-default select-none p-6 ${
                                                    active ? 'bg-zinc-700' : 'text-zinc-100'
                                                    }`
                                                }
                                                value={bank}
                                            >
                                            {({ selected }) => (
                                                <div className="flex gap-6 items-center">
                                                <Bank size={24} />
                                                <span
                                                    className={`block truncate ${
                                                    selected ? 'font-medium' : 'font-normal'
                                                    }`}
                                                >
                                                    {bank.name}
                                                </span>
                                                </div>
                                            )}
                                            </Listbox.Option>
                                        ))} */}
                                        {
                                            userBankAccounts.map(userBankAccount => {
                                                return(
                                                    <Listbox.Option 
                                                        key={userBankAccount.id} 
                                                        value={userBankAccount.bank}
                                                        className={({ active }) =>
                                                            `cursor-default select-none rounded-lg p-6 
                                                            ${active ? 'bg-zinc-700' : 'text-zinc-100'}
                                                        `}
                                                    >
                                                        {userBankAccount.bank}
                                                    </Listbox.Option>
                                                )
                                            })
                                        }
                                    </Listbox.Options>
                                </Transition>
                            </div>
                        </Listbox>

                        <DateInput id="date" label="Data da transação" placeholder="test" />

                        <Input 
                            id="description"
                            label="Descrição" 
                            type="text" 
                            inputMode="text" 
                            placeholder="Digite uma descrição"
                        />

                        <button 
                            className="fixed bottom-20 right-4 p-4 rounded-full bg-emerald-700 text-zinc-100"
                            onClick={() => setIsNewTransactionSheetOpen(false)}
                        >
                            <Check size={24} />
                        </button>
                    </div>
                </div>
            </div>
        </Sheet>
    )
}