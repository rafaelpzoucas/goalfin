import { RadioGroup } from "@headlessui/react"
import { useEffect, useState } from "react"

interface DateInputProps {
    id?: string
    placeholder?: string
    label?: string
}

export function DateInput({ id, placeholder, label }: DateInputProps) {
    const currentDate = new Date()
    const today = currentDate.toLocaleDateString();
    const yesterday = new Date(currentDate.setDate(currentDate.getDate() - 1)).toLocaleDateString();

    const [radioDate, setRadioDate] = useState('today')
    const [date, setDate] = useState(today)       

    return (
        <div className="flex flex-col gap-1">
            {
                label !== "" && 
                <label 
                    className="text-sm text-zinc-600 dark:text-zinc-400"
                >
                    {label}
                </label>
            }
            <RadioGroup 
                value={radioDate} 
                onChange={setRadioDate}
                className={`
                    grid grid-cols-3 gap-2
                    ${
                        date !== today && date !== yesterday && "hidden"
                    }
                `}
            >
                <RadioGroup.Option value="today" onClick={() => setDate(today)}>
                    {({ checked }) => (
                        <div className={`
                            flex flex-col w-full items-center gap-4 p-4 border dark:border-zinc-600 rounded-lg transition-all duration-150
                            ${checked && 'font-bold border-zinc-700 dark:border-zinc-100'}
                        `}>     
                            <span className="text-sm">Hoje</span>
                        </div>
                    )}
                </RadioGroup.Option>
                <RadioGroup.Option value="yesterday" onClick={() => setDate(yesterday)}>
                    {({ checked }) => (
                        <div className={`
                            flex flex-col w-full items-center gap-4 p-4 border dark:border-zinc-600 rounded-lg transition-all duration-150
                            ${checked && 'font-bold border-zinc-700 dark:border-zinc-100'}
                        `}>     
                            <span className="text-sm">Ontem</span>
                        </div>
                    )}
                </RadioGroup.Option>
                <RadioGroup.Option value="other">
                    {({ checked }) => (
                        <div className={`
                            flex flex-col w-full items-center gap-4 p-4 border dark:border-zinc-600 rounded-lg transition-all duration-150
                            ${checked && 'font-bold border-zinc-700 dark:border-zinc-100'}
                        `}>     
                            <label htmlFor={id} className="text-sm">Outro...</label>
                        </div>
                    )}
                </RadioGroup.Option>
            </RadioGroup>
            <input 
                id={id}
                type="date"
                placeholder={placeholder} 
                value={date}
                onChange={(event) => setDate(event.target.value)}
                className={`
                    w-full p-4 py-4 bg-transparent border border-zinc-700 rounded-lg focus:outline outline-offset-2 outline-4 outline-emerald-700 transition-all duration-150 
                    ${
                        date !== today && date !== yesterday ? "visible static z-0" : "invisible absolute -z-50"
                    }
                `}
            />
        </div>
    )
}