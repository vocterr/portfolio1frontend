"use client";

import { Account, AccountType } from '@/types';
import { createAccount } from '@/utils/createAccount';
import React, { FormEvent, useState } from 'react'
import { FormAccountMainInfoAccountEditPage } from '../AccountEdit/Form/FormAccountMainInfoAccountEditPage';
import { FormAccountTypeAccountEditPage } from '../AccountEdit/Form/FormAccountTypeAccountEditPage';

export interface initialAccountInterface {
    balance: number,
    currency: string,
    name: string,
    type: AccountType
}

const initialAccount = {
    balance: 0,
    currency: "",
    name: "",
    type: AccountType.CASH,

}

export const AccountCreatePageOnClient = () => {
    const [account, setAccount] = useState<initialAccountInterface>(initialAccount);
    const [statusMessage, setStatusMessage] = useState<{success: boolean, message: string} | null>(null);
    const [openedWindow, setOpenedWindow] = useState("");
    const handleFormSubmit = async (e: FormEvent) => {
        e.preventDefault();
        const result = await createAccount(account);
        setStatusMessage({success: result!.success, message: result!.message});
    }
 
    return (
    <div className='mt-[104px] flex flex-col h-full w-full'>
          <div className='card w-[85%] form self-center'>

            <h1>Create New Account</h1>
    
            <form onSubmit={(e) => handleFormSubmit(e)} className='mt-6 flex flex-col'>
              <FormAccountMainInfoAccountEditPage account={account} setAccount={setAccount}/>
              <FormAccountTypeAccountEditPage openedWindow={openedWindow} setOpenedWindow={setOpenedWindow} account={account} setAccount={setAccount}/>
              {statusMessage && (
                <p
                  className={`mt-4 text-center text-sm ${
                    statusMessage.success ? "text-green-400" : "text-red-400"
                  }`}
                >
                  {statusMessage.message}
                </p>
              )}
              <button  className='submitButton'>
                Submit Changes
              </button>
            </form>
          </div>
        </div>
  )
}
