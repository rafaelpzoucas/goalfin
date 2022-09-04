import { Dialog } from "@headlessui/react";
import { CaretLeft, Plus, X } from "phosphor-react";
import { MyBankAccounts } from "../../BankAccounts";
import { Sheet } from "../../../Sheets/Sheet";
import { useBankAccounts } from "../../../../contexts/BankAccountsContext/useBankAccounts";
import { SheetHeader } from "../../../Sheets/SheetHeader";
import { currencyFormatter } from "../../../../utils/formatter";

export function MyBankAccountsSheet() {
    const {
        isMyBankAccountsSheetOpen,
        setIsMyBankAccountsSheetOpen,
        setIsChooseBankSheetOpen,
        balance
    } = useBankAccounts()

    return (
        <Sheet isOpen={isMyBankAccountsSheetOpen} onClose={() => setIsMyBankAccountsSheetOpen(false)} transition="rightToLeft">
            <SheetHeader
                action={() => setIsMyBankAccountsSheetOpen(false)} 
                type="back"
            />

            <div className="flex flex-col gap-4 h-full">
                <div className="flex flex-col gap-12 p-4">
                    <div className="flex flex-col gap-1">
                        <span className="text-xs text-zinc-600 dark:text-zinc-400">Minhas contas</span>
                        <strong className="text-2xl">{currencyFormatter.format(balance.total)}</strong>
                    </div>

                    <button 
                        className="flex items-center justify-center gap-2 p-4 rounded-lg  text-zinc-100 bg-emerald-600 dark:bg-zinc-700"
                        onClick={() => setIsChooseBankSheetOpen(true)}
                    >
                        <Plus size={20} />
                        <span>Adicionar conta</span>
                    </button>
                </div>

                <MyBankAccounts />
            </div>
        </Sheet>
    )
}