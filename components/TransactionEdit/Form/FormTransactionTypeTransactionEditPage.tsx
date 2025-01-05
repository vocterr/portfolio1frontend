import { initialTransactionInterface } from '@/components/TransactionCreate/TransactionCreatePageOnClient'
import { Transaction, TransactionType } from '@/types'
import React, { Dispatch, SetStateAction } from 'react'
import { IoIosArrowDown } from 'react-icons/io'

export const FormTransactionTypeTransactionEditPage = <T extends Transaction | initialTransactionInterface>({transaction, setTransaction, openedWindow, setOpenedWindow}: {transaction: T, setTransaction: Dispatch<SetStateAction<T>>, openedWindow: string, setOpenedWindow: Dispatch<SetStateAction<string>>}) => {
  
  
    const openWindow = () => {
        if (openedWindow == "type") {
            setOpenedWindow("");
        }
        else {
            setOpenedWindow("type");
        }
  }
  
    return (
    <>
        <label htmlFor="Type" className='formLabel mt-4'>Transaction's Type</label>
        <div onClick={openWindow} className='relative flex items-center justify-between rounded-lg bg-zinc-800/50 px-2 h-10'>
            <h1>{transaction.type}</h1>
            <IoIosArrowDown className='h-5 w-5'/>
            
            {openedWindow == "type" && (
                <div className='absolute z-50 top-10 left-0 w-full rounded-lg p-4 dropdown text-sm space-y-3'>
                    <div onClick={() => setTransaction({...transaction, type: TransactionType.EXPENSE})} className='dropdownItem p-2 rounded-lg'>Expense</div>
                    <div onClick={() => setTransaction({...transaction, type: TransactionType.INCOME})} className='dropdownItem p-2 rounded-lg'>Income</div>
                </div>
            )}
        </div>
    
    <div></div>
    </>
  )
}
