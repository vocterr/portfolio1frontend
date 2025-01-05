import { initialAccountInterface } from '@/components/AccountCreate/AccountCreatePageOnClient'
import { Account, AccountType } from '@/types'
import React, { Dispatch, SetStateAction } from 'react'
import { IoIosArrowDown } from 'react-icons/io'

export const FormAccountTypeAccountEditPage = <T extends Account | initialAccountInterface>({ openedWindow, setOpenedWindow, account, setAccount }: { account: T, setAccount: Dispatch<SetStateAction<T>>, openedWindow: string, setOpenedWindow: Dispatch<SetStateAction<string>> }) => {


    const openWindow = () => {
        if (openedWindow == "type") {
            setOpenedWindow("")
        }
        else {
            setOpenedWindow("type")
        }
    }
    return (
        <>
            <label htmlFor="Account Type" className='formLabel mt-4'>Account Type</label>
            <div onClick={openWindow} className='relative flex items-center justify-between bg-zinc-800/50 rounded-lg h-10 px-2'>
                <h1 className=' text-amber-400'>{account.type}</h1>
                <IoIosArrowDown className='h-5 w-5' />
                {openedWindow == "type" && (
                    <div className='absolute top-10 transform dropdown left-0 p-4  rounded-lg w-full space-y-3'>
                        <button type='button' onClick={() => setAccount({ ...account, type: AccountType.SAVINGS })} className='typeOption'>Savings</button>
                        <button type='button' onClick={() => setAccount({ ...account, type: AccountType.CHECKING })} className='typeOption'>Checking</button>
                        <button type='button' onClick={() => setAccount({ ...account, type: AccountType.CREDIT_CARD })} className='typeOption'>Credit Card</button>
                        <button type='button' onClick={() => setAccount({ ...account, type: AccountType.INVESTMENT })} className='typeOption'>Investment</button>
                        <button type='button' onClick={() => setAccount({ ...account, type: AccountType.CASH })} className='typeOption'>Cash</button>
                    </div>
                )}
            </div>
        </>
    )
}
