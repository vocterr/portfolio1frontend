"use client";

import { Account, Transaction } from '@/types'
import React, { FormEvent, useState } from 'react'
import { FormTransactionMainInfoTransactionEditPage } from './Form/FormTransactionMainInfoTransactionEditPage';
import { timeConverter } from '@/utils/timeConverter';
import { FormTransactionAccountTransactionEditPage } from './Form/FormTransactionAccountTransactionEditPage';
import { FormTransactionTypeTransactionEditPage } from './Form/FormTransactionTypeTransactionEditPage';
import { editTransaction } from '@/utils/editTransaction';

export const TransactionEditPageOnClient = ({initialTransaction, accounts}: {initialTransaction: Transaction, accounts: Account[]}) => {
    const [transaction, setTransaction] = useState<Transaction>(initialTransaction);
    const [openedWindow, setOpenedWindow] = useState("");
    const [statusMessage, setStatusMessage] = useState<{success: boolean, message: string} | null>(null)

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        const result = await editTransaction(transaction, transaction.id);
        setStatusMessage({message: result!.message, success: result!.success});
    }
  return (
    <div className="mt-[104px] flex flex-col h-full w-full">
            <div className="card form w-[85%] self-center">
                <div className="flex items-start justify-between">
                    <div>
                        <h1>{transaction.category}</h1>
                        <h2 className="text-xs text-gray-400">Editing Page</h2>
                    </div>
                    <p className="text-sm font-semibold text-blue-400 py-1 px-5 rounded-lg bg-zinc-800/50">{timeConverter(transaction.createdAt)}</p>
                </div>

                <form className="flex flex-col mt-6" onSubmit={(e) => handleSubmit(e)}>
                    <FormTransactionAccountTransactionEditPage accounts={accounts} openedWindow={openedWindow} setOpenedWindow={setOpenedWindow} setTransaction={setTransaction} transaction={transaction}/>
                    <FormTransactionTypeTransactionEditPage openedWindow={openedWindow} setOpenedWindow={setOpenedWindow} setTransaction={setTransaction} transaction={transaction}/>
                    <FormTransactionMainInfoTransactionEditPage setTransaction={setTransaction} transaction={transaction}/>
                    {statusMessage?.success == true ? (
                        <p className='text-green-400 text-sm self-center mt-2'>{statusMessage.message}</p>
                    ) : (
                        <p className='text-red-400 text-sm self-center mt-2'>{statusMessage!.message}</p>
                    )}
                    <button className='submitButton'>
                        Submit Changes
                    </button>
                </form>
            </div>
        </div>
  )
}
