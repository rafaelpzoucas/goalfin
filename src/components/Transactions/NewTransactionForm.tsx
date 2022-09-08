import { useForm, Controller } from 'react-hook-form';
import * as z from 'zod'
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowDownRight, ArrowUpRight, Bank, CaretDown, Check } from 'phosphor-react';
import { Listbox, Transition } from '@headlessui/react';
import { Input } from '../Atoms/Form/Input';
import { Fragment, MutableRefObject, useEffect, useState } from 'react';
import { useBankAccounts } from '../../contexts/BankAccountsContext/useBankAccounts';
import * as RadioGroup from '@radix-ui/react-radio-group'
import * as Select from '@radix-ui/react-select';
import { api } from '../../lib/axios';

const submitTransactionSchema = z.object({
    amount: z.string(),
    type: z.enum(['income', 'spending']),
    bank: z.string(),
    date: z.string(),
    description: z.string()
})

type SubmitTransaction = z.infer<typeof submitTransactionSchema>

interface NewTransactionFormProps {
    initialFocus?: MutableRefObject<HTMLElement | null>
}

export function NewTransactionForm({ initialFocus }: NewTransactionFormProps) {
    const [type, setType] = useState('income')
    const [selected, setSelected] = useState("Selecione um banco...")
    const [fixedOnBottom, setFixedOnBottom] = useState(false)

    function handleFocus() {
        setFixedOnBottom(true)
    }
    
    const {
        control,
        register,
        handleSubmit
    } = useForm<SubmitTransaction>({
        resolver: zodResolver(submitTransactionSchema),
        defaultValues: {
            type: 'income'
        }
    })

    async function handleSubmitTransaction(data: SubmitTransaction) {
        const { amount, type, bank, date, description } = data;
        await api.post('transactions', {
            date,
            model: {
                amount,
                type, 
                bank, 
                description,
                createdAt: new Date()
            }  
        })
    }

    const {
        userBankAccounts,
        loadUserBankAccounts,
        loadUserBankAccounts2
    } = useBankAccounts()

    useEffect(() => {
        loadUserBankAccounts()
    }, [])

    return(
        <form 
            className="flex flex-col gap-4 p-4" 
            onSubmit={handleSubmit(handleSubmitTransaction)}
        >
            <div>
                <span className="text-sm text-zinc-600 dark:text-zinc-400">Valor da transação</span>
                <input 
                    {...register('amount')} 
                    // ref={initialFocus} 
                    type="number" 
                    inputMode="numeric" 
                    placeholder="R$ 0,00" 
                    className="bg-transparent text-2xl py-2 shadow-none border-none outline-none"
                    required
                />
            </div>

            <Controller 
                control={control}
                name="type"
                render={({ field }) => { 
                    return (
                        <RadioGroup.Root 
                            onValueChange={field.onChange}
                            className="grid grid-cols-2 gap-2"
                            value={field.value}
                        >
                            <RadioGroup.Item 
                                value="income"
                                className={`
                                    flex flex-col w-full items-center gap-4 p-4 border dark:border-zinc-700 rounded-lg transition-all duration-150
                                    ${field.value === 'income' && 'border-emerald-600 dark:border-emerald-500 bg-emerald-100 dark:bg-transparent font-bold'}
                                `}
                            >
                                <ArrowDownRight size={24} className="text-emerald-500" />
                                <span 
                                    className={`
                                        text-sm
                                        ${field.value === 'income' && 'text-emerald-700 dark:text-emerald-500'}
                                    `}
                                >
                                    Entrada
                                </span>
                            </RadioGroup.Item>

                            <RadioGroup.Item 
                                value="spending"
                                className={`
                                    flex flex-col w-full items-center gap-4 p-4 border dark:border-zinc-700 rounded-lg transition-all duration-150
                                    ${field.value === 'spending' && 'border-red-600 dark:border-red-500 bg-red-100 dark:bg-transparent font-bold'}
                                `}
                            >
                                <ArrowUpRight size={24} className="text-red-500" />
                                <span 
                                    className={`
                                        text-sm
                                        ${field.value === 'spending' && 'text-red-700 dark:text-red-500'}
                                    `}
                                >
                                    Saída
                                </span>
                            </RadioGroup.Item>
                        </RadioGroup.Root>
                    )
                }}
            />

            <Controller 
                control={control}
                name="bank"
                render={({ field }) => {
                    return (
                        <div className="relative">
                            <Select.Root onValueChange={field.onChange} value={field.value}>
                                <Select.Trigger className="flex flex-row justify-between relative w-full cursor-default rounded-lg border dark:border-zinc-700 p-4 text-left mt-1">
                                    <div className="flex flex-row items-center gap-6">
                                        <span>
                                            <Bank size={24} />
                                        </span>
                                        <Select.Value placeholder="Selecione..." />
                                    </div>
                                    <CaretDown />
                                </Select.Trigger>

                                <Select.Content className="absolute z-20 mt-1 w-full overflow-auto rounded-lg bg-zinc-50  dark:bg-zinc-800 p-2 shadow-lg focus:outline-none sm:text-sm">
                                    <Select.Viewport>
                                        {
                                            userBankAccounts.map(userBankAccount => {
                                                return(
                                                    <Select.Item 
                                                        key={userBankAccount.id} 
                                                        value={userBankAccount.bank}
                                                        className="flex flex-row justify-between select-none rounded-lg p-6 outline-none"
                                                    >
                                                        <Select.ItemText>
                                                            <span>{userBankAccount.bank}</span>
                                                        </Select.ItemText>
                                                        <Select.ItemIndicator>
                                                            <Check />
                                                        </Select.ItemIndicator>
                                                    </Select.Item>
                                                )
                                            })
                                        }
                                    </Select.Viewport>
                                </Select.Content>
                            </Select.Root>
                        </div>
                    )
                }}
            />

            {/* <Listbox 
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
            </Listbox> */}

            <input 
                {...register('date')}
                type="date" 
                className={`
                    w-full p-4 py-4 bg-transparent border dark:border-zinc-700 rounded-lg focus:outline outline-offset-2 outline-2 outline-emerald-700 transition-all duration-150 
                `}
                required
            />

            {/* <Input 
                id="description"
                label="Descrição" 
                type="text" 
                inputMode="text" 
                inputName="description"
                isBottomFixed
                required
            /> */}

            <div
                className={`
                    flex flex-col gap-1
                    ${fixedOnBottom && 'fixed bottom-14 left-0 z-10 w-full p-4 bg-zinc-100 dark:bg-zinc-800'}
                `}
            >
                <label htmlFor="description"></label>
                <input 
                    {...register('description')}
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
            </div>

            <button 
                type="submit"
                className="fixed bottom-20 right-4 p-4 rounded-full bg-emerald-700 text-zinc-100"
            >
                <Check size={24} />
            </button>
        </form>
    )
}