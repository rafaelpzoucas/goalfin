import { RadioGroup } from "@headlessui/react"
import { useState } from "react"

interface DateInputProps {
    id?: string
    label?: string
}

export function DateInput({ id, label }: DateInputProps) {
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
                    className="text-sm text-slate-600 dark:text-slate-400"
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
                <RadioGroup.Option value={today} onClick={() => setDate(today)}>
                    {({ checked }) => (
                        <div className={`
                            flex flex-col w-full items-center gap-4 p-4 border dark:border-slate-600 rounded-lg transition-all duration-150
                            ${checked && 'font-bold border-slate-700 dark:border-slate-100'}
                        `}>     
                            <span className="text-sm">Hoje</span>
                        </div>
                    )}
                </RadioGroup.Option>
                <RadioGroup.Option value="yesterday" onClick={() => setDate(yesterday)}>
                    {({ checked }) => (
                        <div className={`
                            flex flex-col w-full items-center gap-4 p-4 border dark:border-slate-600 rounded-lg transition-all duration-150
                            ${checked && 'font-bold border-slate-700 dark:border-slate-100'}
                        `}>     
                            <span className="text-sm">Ontem</span>
                        </div>
                    )}
                </RadioGroup.Option>
                <RadioGroup.Option value="other">
                    {({ checked }) => (
                        <div className={`
                            flex flex-col w-full items-center gap-4 p-4 border dark:border-slate-600 rounded-lg transition-all duration-150
                            ${checked && 'font-bold border-slate-700 dark:border-slate-100'}
                        `}>     
                            <label htmlFor={id} className="text-sm">Outro...</label>
                        </div>
                    )}
                </RadioGroup.Option>
            </RadioGroup>
            <input 
                id={id}
                type="date"
                value={date}
                onChange={(event) => setDate(event.target.value)}
                className={`
                    w-full p-4 py-4 bg-transparent border border-slate-700 rounded-lg focus:outline outline-offset-2 outline-4 outline-brand-700 transition-all duration-150 
                    ${
                        date !== today && date !== yesterday ? "visible static z-0" : "invisible absolute -z-50"
                    }
                `}
            />
        </div>
    )
}