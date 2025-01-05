"use client";

import { Account, Transaction, TransactionType } from '@/types'
import React, { FormEvent, useState } from 'react'
import { FormTransactionAccountTransactionEditPage } from '../TransactionEdit/Form/FormTransactionAccountTransactionEditPage'
import { FormTransactionTypeTransactionEditPage } from '../TransactionEdit/Form/FormTransactionTypeTransactionEditPage'
import { FormTransactionMainInfoTransactionEditPage } from '../TransactionEdit/Form/FormTransactionMainInfoTransactionEditPage'
import { createTransaction } from '@/utils/createTransaction';
import { timeConverter } from '@/utils/timeConverter';

export interface initialTransactionInterface {
    accountId: string,
    account: {
        name: string
    },
    amount: number,
    category: string,
    date: string,
    description: string,
    type: TransactionType
}

const initialTransaction: initialTransactionInterface = {
    accountId: "",
    account: {
        name: ""
    },
    amount: 0,
    category: "",
    date: new Date().toISOString(),
    description: "",
    type: TransactionType.INCOME
}

export const TransactionCreatePageOnClient = ({accounts}: {accounts: Account[]}) => {
    const [transaction, setTransaction] = useState<initialTransactionInterface>(initialTransaction);
    const [openedWindow, setOpenedWindow] = useState("");
    const [statusMessage, setStatusMessage] = useState<{success: boolean, message: string}  | null>(null);

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        const {account, ...requiredFields} = transaction;
        const result = await createTransaction(requiredFields);
        setStatusMessage({success: result!.success, message: result!.message});
    }
  return (
    <div className="mt-[104px] flex flex-col h-full w-full">
                <div className="card w-[85%] form self-center">
                    <h1>Create New Transaction</h1>
    
                    <form className="flex flex-col mt-6" onSubmit={(e) => handleSubmit(e)}>
                        <FormTransactionAccountTransactionEditPage accounts={accounts} openedWindow={openedWindow} setOpenedWindow={setOpenedWindow} setTransaction={setTransaction} transaction={transaction}/>
                        <FormTransactionTypeTransactionEditPage openedWindow={openedWindow} setOpenedWindow={setOpenedWindow} setTransaction={setTransaction} transaction={transaction}/>
                        <FormTransactionMainInfoTransactionEditPage setTransaction={setTransaction} transaction={transaction}/>
                        {statusMessage?.success ? (
                            <p className='text-green-400 text-sm self-center mt-2'>{statusMessage.message}</p>
                        ) : (
                            <p className='text-red-400 text-sm self-center mt-2'>{statusMessage?.message}</p>
                        )}
                        <button className='submitButton'>
                            Add Transaction
                        </button>
                    </form>
                </div>
            </div>
  )
}
