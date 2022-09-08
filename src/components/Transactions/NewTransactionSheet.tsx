import { Listbox, RadioGroup, Transition } from "@headlessui/react";
import { ArrowDownRight, ArrowUpRight, Bank, CaretDown, Check } from "phosphor-react";
import { Fragment, useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { useBankAccounts } from "../../contexts/BankAccountsContext/useBankAccounts";
import { useTransactions } from "../../contexts/TransactionsContext/useTransactions";
import { DateInput } from "../Atoms/Form/DateInput";
import { Input } from "../Atoms/Form/Input";
import { Sheet } from "../Sheets/Sheet";
import { SheetHeader } from "../Sheets/SheetHeader";

import * as z from 'zod'
import { zodResolver } from "@hookform/resolvers/zod";
import { NewTransactionForm } from "./NewTransactionForm";

const submitTransactionSchema = z.object({
    amount: z.string()
})

type SubmitTransaction = z.infer<typeof submitTransactionSchema>

export function NewTransactionSheet() {    
    let initialFocus = useRef(null)

    const {
        register,
        handleSubmit
    } = useForm<SubmitTransaction>({
        resolver: zodResolver(submitTransactionSchema)
    })
    
    const {
        isNewTransactionSheetOpen,
        setIsNewTransactionSheetOpen
    } = useTransactions()
    
    function handleSubmitTransaction(data: SubmitTransaction) {
        console.log(data)
    }

    return (
        <Sheet 
            isOpen={isNewTransactionSheetOpen} 
            onClose={() => setIsNewTransactionSheetOpen(false)}
            initialFocus={initialFocus}
            transition="rightToLeft"
        >
            <SheetHeader 
                action={() => setIsNewTransactionSheetOpen(false)} 
                type="close" 
                title="Nova transação" 
            />
            
            <NewTransactionForm 
                initialFocus={initialFocus}
            />
        </Sheet>
    )
}