import { Dialog } from "@headlessui/react"
import { X } from "phosphor-react"
import { useBankAccounts } from "../../../../../contexts/BankAccountsContext/useBankAccounts"
import { BankAccount } from "../../../BankAccounts/BankAccount"
import { Search } from "../../../../Search"
import { Sheet } from "../../../../Sheets/Sheet"
import { SheetHeader } from "../../../../Sheets/SheetHeader"
import { useEffect, useState } from "react"

interface BanksProps {
    value: string
    label: string
}

export function ChooseBankSheet() {
    const [banks, setBanks] = useState<BanksProps[]>([])

    const {
        isChooseBankSheetOpen,
        setIsChooseBankSheetOpen,
        setIsInsertBalanceSheetOpen
    } = useBankAccounts()

    async function loadBanks() {
        const response = await fetch('http://192.168.0.102:3333/banks')
        const data = await response.json()

        setBanks(data)
    }
    async function loadBanks2() {
        const response = await fetch('http://192.168.6.119:3333/banks')
        const data = await response.json()

        setBanks(data)
    }   

    useEffect(() => {
        loadBanks()   
    }, [])

    console.log(banks);
    

    return (
        <Sheet isOpen={isChooseBankSheetOpen} onClose={() => setIsInsertBalanceSheetOpen(true)} transition="rightToLeft">
            <SheetHeader 
                action={() => setIsChooseBankSheetOpen(false)} 
                type="close" 
            />

            <div className="flex flex-col gap-8 p-4">
                <strong>
                    Selecione o seu banco
                </strong>
                <Search />

                {
                    banks.map(bank => {
                        return (
                            <BankAccount
                                click={() => setIsInsertBalanceSheetOpen(true)}
                                type="select-new-bank" 
                                bank={bank.label}
                            />
                        )
                    })
                }
            </div>
        </Sheet>
    )
}