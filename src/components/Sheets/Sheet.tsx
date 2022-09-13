import { Dialog, Transition } from "@headlessui/react";
import { X } from "phosphor-react";
import { Fragment, MutableRefObject, ReactNode, useEffect, useState } from "react";

interface ISheet {
    children: ReactNode
    isOpen: boolean
    onClose: () => void
    mobileOnly?: boolean
    transition?: "topToBottom" | "rightToLeft" | "bottomToTop" | "leftToRight"
    initialFocus?: MutableRefObject<HTMLElement | null>
    isBottomSheet?: boolean
}

export function Sheet({ children, isOpen, onClose, mobileOnly, isBottomSheet, initialFocus, transition  }: ISheet) {
    
    return (
        <Transition appear show={isOpen} as={Fragment}>
            <Dialog as="div" onClose={onClose} initialFocus={initialFocus}>
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
                        flex sm:border-l border-zinc-700 shadow-xl z-50
                        ${mobileOnly && 'sm:hidden'}
                        ${isBottomSheet ? 'fixed bottom-0' : 'min-h-screen fixed top-0 sm:right-0'}
                    `}>
                        <Dialog.Panel 
                            className={`
                                flex flex-col w-screen overflow-auto sm:max-w-xl bg-zinc-50 dark:bg-zinc-900 shadow-xl
                                ${isBottomSheet ? 'h-fit' : 'h-screen'}
                            `}
                            >
                            {children}
                        </Dialog.Panel>
                    </div>
                </Transition.Child>
            </Dialog>
        </Transition>
    )
}