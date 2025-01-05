import { initialAccountInterface } from '@/components/AccountCreate/AccountCreatePageOnClient'
import { Account } from '@/types'
import React, { Dispatch, SetStateAction } from 'react'

export const FormAccountMainInfoAccountEditPage = <T extends Account | initialAccountInterface>({ account, setAccount }: { account: T, setAccount: Dispatch<SetStateAction<T>> }) => {
    return (
        <>
            <label htmlFor="name" className='formLabel'>Account Name</label>
            <input
                className='formInput'
                value={account.name}
                onChange={(e) => setAccount({ ...account, name: e.target.value })}
            />
            
            
            <label htmlFor="Currency" className='formLabel mt-4'>Account Currency</label>
                <input
                    id="currency"
                    className="formInput"
                    value={account.currency}
                    onChange={(e) =>
                        setAccount({ ...account, currency: e.target.value })
                    }
                    placeholder="Enter Currency"
                />


            <label htmlFor="balance" className='formLabel mt-4'>Account Balance</label>
            <div className="relative">
                <span className="absolute left-3 top-2 text-gray-400">$</span>
                <input
                    id="balance"
                    className="bg-zinc-800/50 h-10 pl-8 pr-2 rounded-lg w-full"
                    value={account.balance}
                    type="number"
                    onChange={(e) =>
                        setAccount({ ...account, balance: Number(e.target.value) })
                    }
                    placeholder="Enter balance"
                />

            </div>

        </>
    )
}
