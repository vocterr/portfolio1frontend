import { initialTransactionInterface } from '@/components/TransactionCreate/TransactionCreatePageOnClient'
import { Transaction, TransactionType } from '@/types'
import React, { Dispatch, SetStateAction } from 'react'

export const FormTransactionMainInfoTransactionEditPage = <T extends Transaction | initialTransactionInterface>({transaction, setTransaction}: {transaction: T, setTransaction: Dispatch<SetStateAction<T>>}) => {
    return (
        <>
            <label htmlFor="category" className="formLabel mt-4">Transaction's Category</label>
            <input 
                className="formInput" 
                value={transaction.category}
                onChange={(e) => setTransaction({...transaction, category: e.target.value})}
            />
            <label htmlFor="amount" className="formLabel mt-4">Transaction's Amount</label>
            <div className='relative'>
                <span className='absolute left-3 top-2 text-green-400'>
                    $
                </span>
                <input 
                className="bg-zinc-800/50 h-10  rounded-lg w-full pl-8 focus:outline-none" 
                value={transaction.amount}
                onChange={(e) => setTransaction({...transaction, amount: Number(e.target.value)})}
            />
            </div>
            
        </>
    )
}
