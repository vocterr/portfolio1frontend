"use client";

import { User } from '@/types'
import { timeConverter } from '@/utils/timeConverter';
import React, { useState } from 'react'
import { FormUserPage } from './Form/FormUserPage';

export const UserPageOnClient = ({initialUser}: {initialUser: User}) => {
    const [user, setUser] = useState<User>(initialUser);
  return (
    <div className='flex flex-col mt-[104px] h-full w-full'>
        <div className='card form w-[85%]'>
            <div className='flex items-center justify-between'>
                <h1 className='max-w-36 line-clamp-1'>{initialUser.name}</h1>
                <p className='text-xs py-1 px-3 rounded-lg bg-zinc-800/50'>created on <b className='text-blue-400'>{timeConverter(user.createdAt)}</b></p>
            </div>
            <FormUserPage setUser={setUser} user={user}/>
        </div>
    </div>
  )
}
