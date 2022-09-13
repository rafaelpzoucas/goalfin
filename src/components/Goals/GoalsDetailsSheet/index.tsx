import { Dialog, Tab } from "@headlessui/react";
import { CaretLeft, Coins, Target, X } from "phosphor-react";
import { Fragment, useEffect, useState } from "react";
import { useGoals } from "../../../contexts/GoalsContext/useGoals";
import { useSaveMoney } from "../../../contexts/SaveMoneyContext/useBankAccount";
import { currencyFormatter } from "../../../utils/formatter";
import { Divider } from "../../Atoms/Divider";
import { Shortcut } from "../../Atoms/Shortcut";
import { TabButton } from "../../Atoms/Tab";
import { H2 } from "../../Atoms/Typography";
import { Sheet } from "../../Sheets/Sheet";
import { SheetHeader } from "../../Sheets/SheetHeader";
import { Goal } from "../Goal";
import { ActiveGoals } from "./ActiveGoals";
import { PausedGoals } from "./PausedGoals";
import { ReachedGoals } from "./ReachedGoals";

export function GoalsDetailsSheet() {
    const {
        isGoalsDetailsSheetOpen,
        setIsGoalsDetailsSheetOpen
    } = useGoals()
    const {
        setIsNewGoalSheetOpen,
        fetchGoals,
        goals
    } = useGoals()

    const {
        setIsSaveMoneySheetOpen
    } = useSaveMoney()

    useEffect(() => {
        fetchGoals()
    }, [])
    
    return (
        <Sheet isOpen={isGoalsDetailsSheetOpen} onClose={() => setIsGoalsDetailsSheetOpen(false)} transition="rightToLeft">
            <SheetHeader 
                action={() => setIsGoalsDetailsSheetOpen(false)} 
                type="back" 
            />
            <div className="flex flex-col gap-8 dark:bg-zinc-900">
                <div className="flex flex-col px-4">
                    <span className="text-xs text-zinc-600 dark:text-zinc-400">Falta economizar este mês</span>
                    <strong className="text-2xl">R$ 50,00</strong>
                </div>

                <section className="flex flex-row flex-start gap-4 px-4">
                    <Shortcut label="Guardar" click={() => setIsSaveMoneySheetOpen(true)}>
                        <Coins />
                    </Shortcut>
                    <Shortcut label="Objetivo" click={() => setIsNewGoalSheetOpen(true)}>
                        <Target />
                    </Shortcut>
                </section>

                <Divider />

                <div className="flex flex-col gap-8 p-4 pb-8">
                    <H2>Objetivos ativos</H2>
                    
                    <div className="grid grid-cols-2 gap-4">
                        {
                            goals.map(goal => {
                                return (
                                    <Goal 
                                        type="short" 
                                        key={goal.id}
                                        description={goal.description}
                                        saved={currencyFormatter.format(goal.saved)}
                                        amount={currencyFormatter.format(goal.amount)}
                                    />
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </Sheet>
    )
}