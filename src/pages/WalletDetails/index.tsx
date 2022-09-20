import { motion } from "framer-motion"
import { CaretRight, Coins } from "phosphor-react"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { slidePageLeftToRight, slidePageRightToLeft,  } from "../../components/Atoms/PageAnimations"
import { NavHeader } from "../../components/Molecules/NavHeader"
import { SaveMoneySheet } from "../../components/SaveMoney/SaveMoneySheet"
import { Transactions } from "../../components/Transactions"
import { useBankAccounts } from "../../contexts/BankAccountsContext/useBankAccounts"
import { useSaveMoney } from "../../contexts/SaveMoneyContext/useBankAccount"
import { currencyFormatter } from "../../utils/formatter"

export function WalletDetails() { 
    const [isLoaded, setIsLoaded] = useState(false)

    const {
        setIsUserBankAccountsSheetOpen,
        fetchUserBankAccounts,
        balance
    } = useBankAccounts()

    const {
        setIsSaveMoneySheetOpen
    } = useSaveMoney()

    useEffect(() => {
        fetchUserBankAccounts()
        setIsLoaded(true)
    }, [])

    console.log(isLoaded)

    return (
        <motion.div
            variants={!isLoaded ? slidePageRightToLeft : slidePageLeftToRight}
            initial="hidden"
            animate="visible"
            exit="exit"
            
            className="flex flex-col gap-4 h-full overflow-auto shadow-xl"
        >
            <NavHeader />
            
            <div className="flex flex-col gap-12 p-4">
                <div className="flex flex-col gap-1">
                    <span className="text-xs text-zinc-600 dark:text-zinc-400">Saldo disponível</span>
                    <strong className="text-2xl">R$ 50,00</strong>
                </div>

                <Link 
                    to={"/user-accounts"}
                    className="flex flex-row items-center justify-between" 
                >
                    <div className="flex flex-col">
                        <span className="text-xs text-zinc-600 dark:text-zinc-400">Saldo total</span>
                        {balance.total ? (
                            <strong className="text-base">{currencyFormatter.format(balance.total)}</strong>
                        ) : (
                            <span className="w-24 h-4 rounded-sm bg-zinc-300 dark:bg-zinc-700 animate-pulse"></span>
                        )}
                    </div>

                    <CaretRight />
                </Link>

                <button 
                    className="flex items-center justify-center gap-2 p-4 rounded-lg text-zinc-100 bg-emerald-600 dark:bg-zinc-700"
                    onClick={() => setIsSaveMoneySheetOpen(true)}
                >
                    <Coins size={20} />
                    <span>Guardar dinheiro</span>
                </button>
            </div>

            <Transactions />

            <SaveMoneySheet />
        </motion.div>
    )
}