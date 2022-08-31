import { Dialog, Listbox, RadioGroup, Transition } from "@headlessui/react";
import { ArrowDown, ArrowDownRight, ArrowUp, ArrowUpLeft, ArrowUpRight, Bank, CaretDown, Check, Target, X } from "phosphor-react";
import { Fragment, useState } from "react";
import { useTransactions } from "../../contexts/TransactionsContext/useTransactions";
import { DateInput } from "../Atoms/Input/Date";
import { Input } from "../Atoms/Input/Input";
import { Sheet } from "../Sheet";

export function NewTransactionSheet() {
    const {
        isNewTransactionSheetOpen,
        setIsNewTransactionSheetOpen
    } = useTransactions()

    const people = [
        { id: 1, name: 'Nubank', unavailable: false },
        { id: 2, name: 'Inter', unavailable: false },
        { id: 3, name: 'PicPay', unavailable: false },
    ]

    const [selected, setSelected] = useState(people[0])
    let [plan, setPlan] = useState('income')

    return (
        <Sheet isOpen={isNewTransactionSheetOpen} onClose={() => setIsNewTransactionSheetOpen(false)} transition="rightToLeft">
            <Dialog.Title className="flex flex-row p-4">
                <button onClick={() => setIsNewTransactionSheetOpen(false)} className="shadow-none outline-none">
                    <X size={24} />
                </button>
            </Dialog.Title>

            <div className="flex flex-col gap-8 p-4">
                <div className="flex flex-col gap-8">
                    <strong>
                        Nova transação
                    </strong>

                    <form action="" className="flex flex-col gap-4">
                        <Input 
                            id="amount"
                            label="Valor" 
                            type="text" 
                            inputMode="numeric" 
                            placeholder="R$ 0,00" 
                        />

                        <RadioGroup 
                            value={plan} 
                            onChange={setPlan}
                            className="grid grid-cols-3 gap-2"
                        >
                            <RadioGroup.Option value="income">
                                {({ checked }) => (
                                    <div className={`
                                        flex flex-col w-full items-center gap-4 p-4 border border-zinc-700 rounded-lg transition-all duration-150
                                        ${checked && 'outline outline-offset-2 outline-2 outline-emerald-500 font-bold'}
                                    `}>
                                        <ArrowDownRight size={24} className="text-emerald-500" />
                                        <span className="text-sm">Entrada</span>
                                    </div>
                                )}
                            </RadioGroup.Option>

                            <RadioGroup.Option value="outcome">
                                {({ checked }) => (
                                    <div className={`
                                        flex flex-col w-full items-center gap-4 p-4 border border-zinc-700 rounded-lg transition-all duration-150
                                        ${checked && 'outline outline-offset-2 outline-2 outline-red-500 font-bold'}
                                    `}>     
                                        <ArrowUpRight size={24} className="text-red-500" />
                                        <span className="text-sm">Saída</span>
                                    </div>
                                )}
                            </RadioGroup.Option>
                            <RadioGroup.Option value="goal">
                                {({ checked }) => (
                                    <div className={`
                                        flex flex-col w-full items-center gap-4 p-4 border border-zinc-700 rounded-lg transition-all duration-150
                                        ${checked && 'outline outline-offset-2 outline-2 font-bold'}
                                    `}>     
                                        <Target size={24} className="text-zinc-100" />
                                        <span className="text-sm">Objetivo</span>
                                    </div>
                                )}
                            </RadioGroup.Option>
                        </RadioGroup>

                        <Listbox value={selected} onChange={setSelected}>
                            <div className="relative mt-1">
                                <span className="text-sm text-zinc-400">Conta bancária</span>
                                <Listbox.Button 
                                    className="relative w-full cursor-default rounded-lg border border-zinc-700 p-4 text-left mt-1"
                                >
                                    <div className="flex flex-row items-center gap-6">
                                        <span>
                                            <Bank size={24} />
                                        </span>
                                        <span className="block truncate">{selected.name}</span>
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
                                        {people.map((bank, bankIdx) => (
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
                                        ))}
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
                            className="fixed bottom-20 right-4 p-4 rounded-full bg-emerald-700"
                            onClick={() => setIsNewTransactionSheetOpen(false)}
                        >
                            <Check size={24} />
                        </button>
                    </form>
                </div>
            </div>
        </Sheet>
    )
}