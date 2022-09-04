import { Dialog } from "@headlessui/react"
import { X } from "phosphor-react"
import { useBankAccounts } from "../../../../../contexts/BankAccountsContext/useBankAccounts"
import { BankAccount } from "../../../BankAccounts/BankAccount"
import { Sheet } from "../../../../Sheets/Sheet"
import { SheetHeader } from "../../../../Sheets/SheetHeader"
import { useEffect, useState } from "react"
import { InsertBalanceSheet } from "./InsertBalanceSheet"
import { Search } from "../../../../Atoms/Form/Search"

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

    async function loadBanks() {
        const response = await fetch('http://192.168.0.102:3333/banks')
        const data = await response.json()

        setBanks(data)
        console.log(banks);
    }
    async function loadBanks2() {
        const response = await fetch('http://192.168.6.119:3333/banks')
        const data = await response.json()
        
        setBanks(data)
        console.log(banks);
    }   

    useEffect(() => {
        loadBanks()   
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