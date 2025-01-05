"use client";

import { Account } from '@/types'
import React, { FormEvent, useState } from 'react'
import { FiArrowDown, FiArrowDownCircle } from 'react-icons/fi';
import {IoIosArrowDown} from "react-icons/io" 
import { FormAccountTypeAccountEditPage } from './Form/FormAccountTypeAccountEditPage';
import { FormAccountMainInfoAccountEditPage } from './Form/FormAccountMainInfoAccountEditPage';
import { editAccount } from '@/utils/editAccount';

export const AccountEditPageOnClient = ({initialAccount, accountId}: {initialAccount: Account, accountId: string}) => {
  const [account, setAccount] = useState<Account>(initialAccount);
  const [openedWindow, setOpenedWindow] = useState("");
  const [statusMessage, setStatusMessage] = useState<{
    success: boolean;
    message: string;
  } | null>(null);

  const handleFormSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const result = await editAccount( account, accountId);
    setStatusMessage({message: result!.message, success: result!.success});
  }
    return (
    <div className='mt-[104px] flex flex-col h-full w-full'>
      <div className='card form self-center'>
        <div className='flex items-start justify-between'>
          <div>
            <h1>{initialAccount.name}</h1>
            <h2 className='text-xs text-gray-400'>Editing Page</h2>
          </div>

          <div className='bg-zinc-800/50 rounded-lg py-[6px] px-5'>
            <h1 className='text-xs font-semibold text-amber-400'>{initialAccount.type}</h1>
          </div>
        </div>

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
