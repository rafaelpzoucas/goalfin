import { Listbox, RadioGroup, Transition } from "@headlessui/react";
import { ArrowDownRight, ArrowRight, ArrowUpRight, Bank, CaretDown, Check } from "phosphor-react";
import { Fragment, useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { useBankAccounts } from "../../contexts/BankAccountsContext/useBankAccounts";
import { useTransactions } from "../../contexts/TransactionsContext/useTransactions";
import { DateInput } from "../Atoms/Form/DateInput";
import { Input } from "../Atoms/Form/Input";
import { Sheet } from "../Sheets/Sheet";
import { SheetHeader } from "../Sheets/SheetHeader";

export function NewTransactionSheet() {    
    let initialFocus = useRef(null)
    const [type, setType] = useState('income')
    const [selected, setSelected] = useState("Selecione um banco...")
    const [fixedOnBottom, setFixedOnBottom] = useState(false)
    
    const {
        isNewTransactionSheetOpen,
        setIsNewTransactionSheetOpen
    } = useTransactions()

    const {
        userBankAccounts,
        loadUserBankAccounts,
        loadUserBankAccounts2
    } = useBankAccounts()

    function handleFocus() {
        setFixedOnBottom(true)
    }

    useEffect(() => {
        loadUserBankAccounts2()
    }, [])

    console.log(type);
    
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
            />
            
            <form 
                className="flex flex-col gap-4 p-4" 
            >
                <div>
                    <span className="text-sm text-zinc-600 dark:text-zinc-400">Valor da transação</span>
                    <input 
                        ref={initialFocus} 
                        type="number" 
                        inputMode="numeric" 
                        placeholder="R$ 0,00" 
                        className="bg-transparent text-3xl py-2 shadow-none border-none outline-none"
                        required
                    />
                </div>

                <RadioGroup 
                    value={type} 
                    onChange={setType}
                    className="grid grid-cols-2 gap-2"
                >
                    <RadioGroup.Option 
                        value="income"
                        className={`
                            flex flex-col w-full items-center gap-4 p-4 border dark:border-zinc-700 rounded-lg transition-all duration-150
                            ${type === 'income' && 'border-emerald-600 dark:border-emerald-500 bg-emerald-100 dark:bg-transparent font-bold'}
                        `}
                    >
                        <ArrowDownRight size={24} className="text-emerald-500" />
                        <span 
                            className={`
                                text-sm
                                ${type === 'income' && 'text-emerald-700 dark:text-emerald-500'}
                            `}
                        >
                            Entrada
                        </span>
                    </RadioGroup.Option>

                    <RadioGroup.Option 
                        value="spending"
                        className={`
                            flex flex-col w-full items-center gap-4 p-4 border dark:border-zinc-700 rounded-lg transition-all duration-150
                            ${type === 'spending' && 'border-red-600 dark:border-red-500 bg-red-100 dark:bg-transparent font-bold'}
                        `}
                    >
                        <ArrowUpRight size={24} className="text-red-500" />
                        <span 
                            className={`
                                text-sm
                                ${type === 'spending' && 'text-red-700 dark:text-red-500'}
                            `}
                        >
                            Saída
                        </span>
                    </RadioGroup.Option>
                </RadioGroup>

                <Listbox 
                    value={selected} 
                    onChange={setSelected}
                >
                    <div className="relative mt-1">
                        <span className="text-sm text-zinc-600 dark:text-zinc-400">Conta bancária</span>
                        <Listbox.Button 
                            className="relative w-full cursor-default rounded-lg border dark:border-zinc-700 p-4 text-left mt-1"
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
                                className="absolute z-20 mt-1 max-h-80 w-full overflow-auto rounded-lg bg-zinc-50  dark:bg-zinc-800 p-2 shadow-lg focus:outline-none sm:text-sm">
                                {
                                    userBankAccounts.map(userBankAccount => {
                                        return(
                                            <Listbox.Option 
                                                key={userBankAccount.id} 
                                                value={userBankAccount.bank}
                                                className={({ active }) =>
                                                    `cursor-default select-none rounded-lg p-6 
                                                    ${active ? 'bg-zinc-200 dark:bg-zinc-700' : 'text-zinc-600 dark:text-zinc-100'}
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
                
                <DateInput id="date" />

                <div
                    className={`
                        flex flex-col gap-1
                        ${fixedOnBottom && 'fixed bottom-14 left-0 z-10 w-full p-4 bg-zinc-100 dark:bg-zinc-800'}
                    `}
                >
                    <label htmlFor="description" className="text-sm text-zinc-400 dark:text-600">Descrição</label>
                    <div className="relative">
                        <input 
                            type="text" 
                            id="description"
                            placeholder="Digite uma descrição"
                            onFocus={handleFocus}
                            onBlur={() => setFixedOnBottom(false)}
                            autoComplete="off"
                            className={`
                                w-full p-4 py-4 bg-transparent border border-zinc-300 dark:border-zinc-700 rounded-lg focus:outline outline-offset-2 outline-2 outline-emerald-700 transition-all duration-150
                            `}
                        />
                        {
                            fixedOnBottom && (
                                <button 
                                    className="absolute right-4 top-4"
                                    onClick={() => setFixedOnBottom(false)}
                                >
                                    <ArrowRight size={20} />
                                </button>
                            )
                        }
                    </div>
                </div>


                <button 
                    type="submit"
                    className="fixed bottom-20 right-4 p-4 rounded-full bg-emerald-700 text-zinc-100"
                >
                    <Check size={24} />
                </button>
            </form>
        </Sheet>
    )
}