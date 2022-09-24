import { motion, MotionConfig } from "framer-motion";
import { Plus } from "phosphor-react";
import { ChooseBankSheet } from "../../components/AddBankAccount/ChooseBankSheet";
import { slidePageRightToLeft } from "../../components/Atoms/PageAnimations";
import { NavHeader } from "../../components/Molecules/NavHeader";
import { BankAccounts } from "../../components/Wallet/BankAccounts";
import { useBankAccounts } from "../../contexts/BankAccountsContext/useBankAccounts";
import { currencyFormatter } from "../../utils/formatter";

export function UserBankAccounts() {
    const {
        setIsChooseBankSheetOpen,
        balance
    } = useBankAccounts()
    
    return(
        <>
        <motion.div
            variants={slidePageRightToLeft}
            initial="hidden"
            animate="visible"
            exit="exit"
        >
            <NavHeader />

            <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-12 p-4">
                    <div className="flex flex-col gap-1">
                        <span className="text-xs text-slate-600 dark:text-slate-400">Minhas contas</span>
                        <strong className="text-2xl">{currencyFormatter.format(balance.total)}</strong>
                    </div>

                    <button 
                        className="flex items-center justify-center gap-2 p-4 rounded-lg  text-slate-100 bg-brand-600 dark:bg-slate-700"
                        onClick={() => setIsChooseBankSheetOpen(true)}
                        >
                        <Plus size={20} />
                        <span>Adicionar conta</span>
                    </button>
                </div>

                <BankAccounts />
            </div>
        </motion.div>

        <ChooseBankSheet />
        </>
    )
}