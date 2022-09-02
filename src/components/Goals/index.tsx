import { CaretRight, Plus, Target } from "phosphor-react";
import { useState } from "react";
import { useGoals } from "../../contexts/GoalsContext/useGoals";
import { ProgressBar } from "../ProgressBar";
import { Sheet } from "../Sheets/Sheet";
import { GoalsDetailsSheet } from "./GoalsDetailsSheet";

export function Goals() {
    const {
        setIsGoalsDetailsSheetOpen
    } = useGoals()
    return (
        <div className="flex flex-col gap-8 px-4 py-8">
            <section
                onClick={() => setIsGoalsDetailsSheetOpen(true)} 
                className="flex flex-col items-start justify-between"
            >
                <header className="flex flex-row justify-between w-full">
                    <div className="flex flex-row gap-2">
                        <Target size={24}/>
                        <strong>Objetivos</strong>
                    </div>
                    <CaretRight />
                </header>

            </section>
            <section className="flex flex-col gap-8">
                <div className="flex flex-col gap-1">
                    <span className="text-xs text-zinc-400">Guardar este mês</span>
                    <strong className="text-2xl">R$ 500,00</strong>
                </div>

                {/* <ProgressBar /> */}

                <div className="grid grid-cols-2 gap-4">
                    <div className="flex flex-col rounded-lg gap-4 bg-zinc-200 dark:bg-zinc-800 p-4">
                        <div className="flex flex-row gap-2 items-center">
                            <div className="bg-zinc-700 p-2 w-fit rounded-full text-xl">
                                <Target />
                            </div>
                            <strong>
                                Objetivo
                            </strong>
                        </div>
                        <div className="text-xs">
                            <strong className="text-lg">R$ 100,00</strong> 
                            <br />
                            <span className="text-zinc-400">de R$ 1.000,00</span>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-xs text-zinc-400">Guardar este mês</span>
                            <strong className="text-base">R$ 50,00</strong>
                        </div>
                    </div>
                    <div className="flex flex-col rounded-lg gap-4 bg-zinc-200 dark:bg-zinc-800 p-4">
                        <div className="flex flex-row gap-2 items-center">
                            <div className="bg-zinc-700 p-2 w-fit rounded-full text-xl">
                                <Target />
                            </div>
                            <strong>
                                Objetivo
                            </strong>
                        </div>
                        <div className="text-xs">
                            <strong className="text-lg">R$ 100,00</strong> 
                            <br />
                            <span className="text-zinc-400">de R$ 1.000,00</span>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-xs text-zinc-400">Guardar este mês</span>
                            <strong className="text-base">R$ 50,00</strong>
                        </div>
                    </div>
                    <div className="flex flex-col rounded-lg gap-4 bg-zinc-200 dark:bg-zinc-800 p-4">
                        <div className="flex flex-row gap-2 items-center">
                            <div className="bg-zinc-700 p-2 w-fit rounded-full text-xl">
                                <Target />
                            </div>
                            <strong>
                                Objetivo
                            </strong>
                        </div>
                        <div className="text-xs">
                            <strong className="text-lg">R$ 100,00</strong> 
                            <br />
                            <span className="text-zinc-400">de R$ 1.000,00</span>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-xs text-zinc-400">Guardar este mês</span>
                            <strong className="text-base">R$ 50,00</strong>
                        </div>
                    </div>
                    <div className="flex flex-col items-center justify-center rounded-lg gap-4 bg-zinc-200 dark:bg-zinc-800 p-4">
                        <div className="bg-zinc-700s p-2 w-fit rounded-full text-4xl">
                            <Plus />
                        </div>
                    </div>
                </div>

            </section>
            
            <GoalsDetailsSheet />
        </div>
    )
}