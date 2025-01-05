import { initialTransactionInterface } from '@/components/TransactionCreate/TransactionCreatePageOnClient'
import { Account, Transaction } from '@/types'
import React, { Dispatch, SetStateAction } from 'react'
import { IoIosArrowDown } from 'react-icons/io'

export const FormTransactionAccountTransactionEditPage = <T extends Transaction | initialTransactionInterface>({accounts , transaction, setTransaction, openedWindow, setOpenedWindow }: {accounts: Account[],  transaction: T, setTransaction: Dispatch<SetStateAction<T>>, openedWindow: string, setOpenedWindow: Dispatch<SetStateAction<string>> }) => {

    const openWindow = () => {
        if (openedWindow == "account") {
            setOpenedWindow("");
        }
        else {
            setOpenedWindow("account");
        }
    }
    return (
        <>
            <label htmlFor="Account" className='formLabel'>Transaction's Account</label>
            <div onClick={openWindow} className='relative flex items-center justify-between rounded-lg bg-zinc-800/50 h-10 px-2'>
                <h1>{transaction.account.name}</h1>
                <IoIosArrowDown className='h-5 w-5' />
                {openedWindow == "account" && (
                    <div className='w-full max-h-52 overflow-y-auto absolute z-50 top-10 rounded-lg flex flex-col space-y-3 left-0 dropdown p-4'>
                        {accounts.map((account) => (
                            <div 
                                className='dropdownItem flex items-center justify-between p-2 rounded-lg text-sm'
                                onClick={() => setTransaction({...transaction, account, accountId: account.id})}
                            >
                                <h1>{account.name}</h1>
                                <h1 className={`font-semibold max-w-20 line-clamp-1 ${account.balance > 0 ? "text-green-400" : "text-red-400"}`}>${account.balance}</h1>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </>
    )
}
