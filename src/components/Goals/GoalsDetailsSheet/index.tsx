import { Dialog, Tab } from "@headlessui/react";
import { CaretLeft, X } from "phosphor-react";
import { Fragment, useState } from "react";
import { useGoals } from "../../../contexts/GoalsContext/useGoals";
import { Sheet } from "../../Sheet";

export function GoalsDetailsSheet() {
    const {
        isGoalsDetailsSheetOpen,
        setIsGoalsDetailsSheetOpen
    } = useGoals()
    return (
        <Sheet isOpen={isGoalsDetailsSheetOpen} onClose={() => setIsGoalsDetailsSheetOpen(false)} transition="rightToLeft">
            <Dialog.Title className="flex flex-row p-4">
                <button onClick={() => setIsGoalsDetailsSheetOpen(false)} className="shadow-none outline-none">
                    <CaretLeft size={32} />
                </button>
            </Dialog.Title>
            <Tab.Group>
                <Tab.List className="border-b border-zinc-700 sticky top-0">
                    <Tab as={Fragment}>
                        {({ selected }) => (
                            <button
                            className={`
                                w-full p-4
                                transition-all duration-100
                                ${selected ? 'font-bold box-border shadow-flat outline-0 border-b-zinc-800' : ''}
                            `}
                            >
                                Ativos
                            </button>
                        )}
                    </Tab>
                    
                </Tab.List>
                <Tab.Panels>
                    <Tab.Panel>
                        
                    </Tab.Panel>
                    <Tab.Panel>
                        
                    </Tab.Panel>
                    <Tab.Panel>
                        
                    </Tab.Panel>
                </Tab.Panels>
            </Tab.Group>
        </Sheet>
    )
}