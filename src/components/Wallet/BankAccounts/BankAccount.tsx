import { Popover } from "@headlessui/react";
import { Bank, CaretRight, DotsThreeVertical, PencilLine, Trash, TrashSimple } from "phosphor-react";
import { useState } from "react";
import { H2 } from "../../Atoms/Typography";
import { Sheet } from "../../Sheets/Sheet";
import { SheetHeader } from "../../Sheets/SheetHeader";
import { UpdateBankAccount } from "./UpdateBankAccount";

interface BankAccountProps {
    type?: "select-new-bank" | "selected-bank"
    click?: () => void
    bank: string
    balance?: string
    hasOptions?: boolean
}

function handleDeleteBankAccount() {
    console.log("deletar");
}

export function BankAccount({ click, type, bank, balance, hasOptions }: BankAccountProps) {
    const [isEditBankAccountSheetOpen, setIsEditBankAccountSheetOpen] = useState(false)
    const [isConfirmDeleteSheetOpen, setIsConfirmDeleteSheetOpen] = useState(false)

    return (
        <div 
            className="flex flex-col gap-8"
            onClick={click}
        >
            <div className="flex items-center justify-center gap-4">
                <div className="flex items-center justify-center rounded-full bg-zinc-200 dark:bg-zinc-700 p-4">
                    <Bank size={20} />
                </div>
                <div className="flex flex-col gap-1 w-full">
                    <header className="flex flex-row items-center justify-between">
                        <strong className="w-full">{bank}</strong>
                        {
                            hasOptions && (
                                type !== "select-new-bank" ? (
                                    <Popover className="relative">
                                        <Popover.Button>
                                            <DotsThreeVertical size={24} />
                                        </Popover.Button>
                                
                                        <Popover.Panel className="absolute top-0 right-8 z-10 w-40 p-4 rounded-lg shadow-lg bg-white dark:bg-zinc-700">
                                            <div className="flex">
                                                <ul>
                                                    {/* <li>
                                                        <button 
                                                            className="flex flex-row items-center gap-2 p-4"
                                                            onClick={() => setIsEditBankAccountSheetOpen(true)}
                                                        >
                                                            <PencilLine />
                                                            Editar
                                                        </button>
                                                    </li> */}
                                                    <li>
                                                        <button 
                                                            className="flex flex-row items-center gap-2 p-4"
                                                            onClick={() => setIsConfirmDeleteSheetOpen(true)}
                                                        >
                                                            <Trash />
                                                            Excluir
                                                        </button>
                                                    </li>
                                                </ul>
                                            </div>
                                        </Popover.Panel>
                                    </Popover>
                                ) : <CaretRight size={20} />
                            )
                        }
                    </header>

                    {
                      type !== "select-new-bank" &&
                        <div className="flex flex-col">
                            <span className="text-sm">{balance}</span>
                        </div> 
                    }
                </div>
            </div>

            <Sheet 
                isOpen={isEditBankAccountSheetOpen} 
                onClose={() => setIsEditBankAccountSheetOpen(false)} 
                transition="rightToLeft"
            >
                <SheetHeader 
                    action={() => setIsEditBankAccountSheetOpen(false)} 
                    type="back" 
                />
                
                <UpdateBankAccount 

                />
            </Sheet>

            <Sheet 
                isOpen={isConfirmDeleteSheetOpen} 
                onClose={() => setIsConfirmDeleteSheetOpen(false)} 
                transition="bottomToTop"
                isBottomSheet
            >
                <SheetHeader 
                    action={() => setIsConfirmDeleteSheetOpen(false)} 
                    // type="close" 
                />

                <div className="flex flex-col gap-8 p-4">
                    <header className="flex flex-row gap-4 items-center">
                        <Trash size={48} className="text-red-00" />
                        <H2>Tem certeza que deseja excluir a conta {bank}?</H2>
                    </header>

                    {/* <BankAccount 
                        bank={bank}
                        balance={balance}
                    /> */}

                    <div className="grid grid-cols-2 gap-2">
                        <button 
                            className="p-4 rounded-lg bg-zinc-100 dark:bg-zinc-800 border dark:border-zinc-700"
                            onClick={() => setIsConfirmDeleteSheetOpen(false)}
                        >
                            Não, manter conta
                        </button>
                        <button 
                            className="p-4 rounded-lg bg-red-500 text-white"
                            onClick={handleDeleteBankAccount}
                        >
                            Sim, excluir conta
                        </button>
                    </div>
                </div>
            </Sheet>
        </div>
    )
}