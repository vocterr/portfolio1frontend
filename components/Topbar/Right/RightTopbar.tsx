import React from 'react'
import { FiBell, FiMenu, FiMoreHorizontal, FiSettings, FiUser } from 'react-icons/fi'
import { MenuTopbar } from './Menu/MenuTopbar'
import { NotificationsTopbar } from './Notiifcations/NotificationsTopbar'
import { UserTopbar } from './User/UserTopbar'
import Link from 'next/link'

export const RightTopbar = () => {
    return (
        <div>
            <MenuTopbar/>
            <div className='hidden lg:flex items-center space-x-2'>
                
                <NotificationsTopbar/>
                <UserTopbar/>
                <Link href="/settings" className='topbarIcon'>
                    <FiSettings className='h-[22px] w-[22px]'/>
                </Link>
            </div>
        </div>
    )
}
