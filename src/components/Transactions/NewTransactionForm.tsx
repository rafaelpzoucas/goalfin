import { ArrowDownRight, ArrowUpRight, Bank, CaretDown, Check } from 'phosphor-react';
import { Listbox, Transition } from '@headlessui/react';
import { Input } from '../Atoms/Form/Input';
import { Fragment, MutableRefObject, useEffect, useState } from 'react';
import { useBankAccounts } from '../../contexts/BankAccountsContext/useBankAccounts';
import * as RadioGroup from '@radix-ui/react-radio-group'
import * as Select from '@radix-ui/react-select';

interface NewTransactionFormProps {
    initialFocus?: MutableRefObject<HTMLElement | null>
}

export function NewTransactionForm({ initialFocus }: NewTransactionFormProps) {
    const [type, setType] = useState('income')
    const [selected, setSelected] = useState("Selecione um banco...")
    const [fixedOnBottom, setFixedOnBottom] = useState(false)

    function handleFocus() {
        setFixedOnBottom(true)
    }

    const {
        userBankAccounts,
        loadUserBankAccounts,
        loadUserBankAccounts2
    } = useBankAccounts()

    useEffect(() => {
        loadUserBankAccounts()
    }, [])

    return(
        <form 
            className="flex flex-col gap-4 p-4" 
        >
            {/*  */}
        </form>
    )
}