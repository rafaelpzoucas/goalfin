import { motion } from "framer-motion"
import { CaretRight, Coins } from "phosphor-react"
import { useEffect } from "react"
import { NavHeader } from "../../components/Molecules/NavHeader"
import { SaveMoneySheet } from "../../components/SaveMoney/SaveMoneySheet"
import { Transactions } from "../../components/Transactions"
import { UserBankAccountsSheet } from "../../components/Wallet/BankAccounts/MyBankAccounts"
import { useBankAccounts } from "../../contexts/BankAccountsContext/useBankAccounts"
import { useSaveMoney } from "../../contexts/SaveMoneyContext/useBankAccount"
import { currencyFormatter } from "../../utils/formatter"

export function WalletDetails() { 
    const {
        setIsMyBankAccountsSheetOpen,
        fetchUserBankAccounts,
        balance
    } = useBankAccounts()

    const {
        setIsSaveMoneySheetOpen
    } = useSaveMoney()

    useEffect(() => {
        fetchUserBankAccounts()
    }, [])

    return (
        <motion.div 
            className="flex flex-col gap-4 h-full overflow-auto shadow-xl"
            initial={{ x: innerWidth }}
            animate={{ x: 0 }}
            exit={{ x: (window.innerWidth) * -1 }}
        >
            <NavHeader 
                navigate="/"
            />
            
            <div className="flex flex-col gap-12 p-4">
                <div className="flex flex-col gap-1">
                    <span className="text-xs text-zinc-600 dark:text-zinc-400">Saldo disponível</span>
                    <strong className="text-2xl">R$ 50,00</strong>
                </div>

                <div 
                    className="flex flex-row items-center justify-between"
                    onClick={() => setIsMyBankAccountsSheetOpen(true)} 
                >
                    <div className="flex flex-col">
                        <span className="text-xs text-zinc-600 dark:text-zinc-400">Saldo total</span>
                        <strong className="text-base">{currencyFormatter.format(balance.total)}</strong>
                    </div>

                    <CaretRight />
                </div>

                <button 
                    className="flex items-center justify-center gap-2 p-4 rounded-lg text-zinc-100 bg-emerald-600 dark:bg-zinc-700"
                    onClick={() => setIsSaveMoneySheetOpen(true)}
                >
                    <Coins size={20} />
                    <span>Guardar dinheiro</span>
                </button>
            </div>

            <Transactions />

            <UserBankAccountsSheet />
            <SaveMoneySheet />
        </motion.div>
    )
}