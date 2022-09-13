import { Dialog } from "@headlessui/react"
import { X } from "phosphor-react"
import { useBankAccounts } from "../../../../../contexts/BankAccountsContext/useBankAccounts"
import { BankAccount } from "../../../BankAccounts/BankAccount"
import { Sheet } from "../../../../Sheets/Sheet"
import { SheetHeader } from "../../../../Sheets/SheetHeader"
import { useEffect, useState } from "react"
import { InsertBalanceSheet } from "./InsertBalanceSheet"
import { Search } from "../../../../Atoms/Form/Search"
import { api } from "../../../../../lib/axios"

interface BanksProps {
    value: string
    label: string
}

export function ChooseBankSheet() {
    const [banks, setBanks] = useState<BanksProps[]>([])

    const {
        isChooseBankSheetOpen,
        setIsChooseBankSheetOpen,
        setIsInsertBalanceSheetOpen,
        selectedBank,
        setSelectedBank
    } = useBankAccounts()

    async function fetchBanks() {
        const response = await api.get('/banks')

        setBanks(response.data)
    } 

    useEffect(() => {
        fetchBanks()   
    }, [])

    return (
        <Sheet 
            isOpen={isChooseBankSheetOpen} 
            onClose={() => setIsInsertBalanceSheetOpen(true)} 
            transition="rightToLeft"
        >
            <SheetHeader 
                action={() => setIsChooseBankSheetOpen(false)} 
                type="close" 
            />

            <div className="flex flex-col  overflow-auto">
                <div className="flex flex-col gap-4 sticky top-0 p-4 bg-zinc-50 dark:bg-zinc-900">
                    <strong>
                        Selecione o seu banco
                    </strong>
                    <Search />
                </div>

                <div className="flex flex-col gap-8 p-4">
                    {
                        banks.map(bank => {
                            return (
                                <BankAccount
                                    key={bank.value}
                                    click={() => {setIsInsertBalanceSheetOpen(true), setSelectedBank(bank.value)}}
                                    type="select-new-bank" 
                                    bank={bank.label}
                                    hasOptions
                                />
                            )
                        })
                    }
                </div>

                {
                    banks.filter(item => item.value === selectedBank).map(bank => {
                        return (
                            <InsertBalanceSheet
                                key={bank.value} 
                                name={bank.label}
                            />
                        )
                    })
                }

            </div>
        </Sheet>
    )
}