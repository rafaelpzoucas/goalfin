import { Tab } from "@headlessui/react";
import { Fragment, ReactNode } from "react";

interface TabButtonProps {
    children: ReactNode
}

export function TabButton({ children }: TabButtonProps) {
    return (
        <Tab as={Fragment}>
            {({ selected }) => (
                <button
                className={`
                    w-full p-4 transition-all duration-150
                    ${
                        selected 
                        ? 'font-bold outline-0 border-b-4 border-b-brand-600 text-brand-600'
                        : 'text-slate-400 outline-0 border-b-4 border-b-slate-50 dark:border-b-slate-900'}
                `}
                >
                    {children}
                </button>
            )}
        </Tab>
    )
}