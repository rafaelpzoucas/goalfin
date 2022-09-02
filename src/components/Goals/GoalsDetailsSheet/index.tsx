import { Dialog, Tab } from "@headlessui/react";
import { CaretLeft, X } from "phosphor-react";
import { Fragment, useState } from "react";
import { useGoals } from "../../../contexts/GoalsContext/useGoals";
import { TabButton } from "../../Atoms/Tab";
import { Sheet } from "../../Sheets/Sheet";
import { SheetHeader } from "../../Sheets/SheetHeader";
import { ActiveGoals } from "./ActiveGoals";
import { PausedGoals } from "./PausedGoals";
import { ReachedGoals } from "./ReachedGoals";

export function GoalsDetailsSheet() {
    const {
        isGoalsDetailsSheetOpen,
        setIsGoalsDetailsSheetOpen
    } = useGoals()
    return (
        <Sheet isOpen={isGoalsDetailsSheetOpen} onClose={() => setIsGoalsDetailsSheetOpen(false)} transition="rightToLeft">
            <SheetHeader 
                action={() => setIsGoalsDetailsSheetOpen(false)} 
                type="back" 
            />
            <Tab.Group>
                <Tab.List className="flex border-b border-zinc-700 bg-zinc-900 z-50">
                    <TabButton>
                        Ativos
                    </TabButton>
                    <TabButton>
                        Pausados
                    </TabButton>
                    <TabButton>
                        Alcançados
                    </TabButton>
                </Tab.List>
                <Tab.Panels className="overflow-auto pb-16">
                    <Tab.Panel>
                        <ActiveGoals />
                    </Tab.Panel>
                    <Tab.Panel>
                        <PausedGoals />
                    </Tab.Panel>
                    <Tab.Panel>
                        <ReachedGoals />
                    </Tab.Panel>
                </Tab.Panels>
            </Tab.Group>
        </Sheet>
    )
}