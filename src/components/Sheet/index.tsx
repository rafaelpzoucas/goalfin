import { Dialog, Transition } from "@headlessui/react";
import { X } from "phosphor-react";
import { Fragment, ReactNode, useEffect, useState } from "react";

interface ISheet {
    children: ReactNode
    isOpen: boolean
    onClose: () => void
    mobileOnly?: boolean
    transition?: "topToBottom" | "rightToLeft" | "bottomToTop" | "leftToRight"
    initialFocus?: ""
}

export function Sheet({ children, isOpen, onClose, mobileOnly, transition  }: ISheet) {
    
    return (
        <Transition appear show={isOpen} as={Fragment}>
            <Dialog as="div" onClose={onClose}>
                <Transition.Child
                    as={Fragment}
                    enter={`transition duration-300 ease-out`}
                    enterFrom={
                        transition === "topToBottom"
                        ? '-translate-y-full'
                        : transition === "rightToLeft"
                        ? 'translate-x-full'
                        : transition === "bottomToTop"
                        ? 'translate-y-full'
                        : '-translate-x-full'
                    }
                    enterTo={
                        transition === "rightToLeft"
                        ? 'translate-y-0 sm:translate-x-0'
                        : ''
                    }
                    leave="transition duration-200 ease-in"
                    leaveFrom={
                        transition === "rightToLeft"
                        ? 'translate-y-0 sm:translate-x-0'
                        : ''
                    }
                    leaveTo={
                        transition === "topToBottom"
                        ? '-translate-y-full'
                        : transition === "rightToLeft"
                        ? 'translate-x-full'
                        : transition === "bottomToTop"
                        ? 'translate-y-full'
                        : '-translate-x-full'
                    }
                >
                    <div className={`
                        flex min-h-screen fixed top-0 sm:right-0 overflow-y-auto sm:border-l shadow-xl z-50
                        ${mobileOnly && 'sm:hidden'}
                    `}>
                        <Dialog.Panel className="flex flex-col w-screen sm:max-w-xl h-screen bg-zinc-900 shadow-xl">
                            {children}
                        </Dialog.Panel>
                    </div>
                </Transition.Child>
            </Dialog>
        </Transition>
    )
}