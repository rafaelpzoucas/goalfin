import { Dialog, Transition } from "@headlessui/react";
import { AnimatePresence, motion } from "framer-motion";
import { Fragment, MutableRefObject, ReactNode } from "react";

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
        <AnimatePresence>
            {isOpen && (
                <Dialog as="div" open={isOpen} onClose={onClose} initialFocus={initialFocus}>
                    <div className={`
                        flex sm:border-l border-zinc-700 shadow-xl z-50
                        ${mobileOnly && 'sm:hidden'}
                        ${isBottomSheet ? 'fixed bottom-0' : 'min-h-screen fixed top-0 sm:right-0'}
                    `}>
                        <motion.div 
                            initial={{ x: innerWidth }}
                            animate={{ x: 0 }}
                            exit={{ x: window.innerWidth }}

                            className={`
                                flex flex-col w-screen overflow-auto sm:max-w-xl bg-zinc-50 dark:bg-zinc-900 shadow-xl
                                ${isBottomSheet ? 'h-fit' : 'h-screen'}
                            `}
                            >
                            {children}
                        </motion.div>
                    </div>
                </Dialog>
            )}
        </AnimatePresence>
    )
}