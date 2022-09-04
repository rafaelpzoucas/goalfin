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
                        ? 'font-bold outline-0 border-b-4 border-b-emerald-600 text-emerald-600'
                        : 'text-zinc-400 outline-0 border-b-4 border-b-zinc-50 dark:border-b-zinc-900'}
                `}
                >
                    {children}
                </button>
            )}
        </Tab>
    )
}