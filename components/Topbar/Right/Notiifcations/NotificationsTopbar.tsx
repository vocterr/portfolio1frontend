"use client";

import React, { useEffect, useState } from 'react'
import {AnimatePresence, motion} from "framer-motion"
import { FiBell } from 'react-icons/fi'
import { fetchRecentNotificationsOnClient } from '@/utils/fetchRecentNotificationsOnClient';
import { Notification } from '@/types';
import { timeConverter } from '@/utils/timeConverter';
import { randomColor } from '@/utils/randomColor';
import Link from 'next/link';

export const NotificationsTopbar = () => {
    const [isNotificationsOpened, setIsNotificationsOpened] = useState(false);
    const [notifications, setNotifications] = useState<Notification[]>([]);
    useEffect(() => {
        const fetchNotifications = async () => {
            const fetchedNotifications = await fetchRecentNotificationsOnClient();
            setNotifications(fetchedNotifications);
        }

        fetchNotifications();
    }, []);
    return (
        <div className='topbarIcon relative'>
            <FiBell onClick={() => setIsNotificationsOpened(!isNotificationsOpened)} className=' h-[22px] w-[22px]' />
            {isNotificationsOpened && (
                <div className='flex hover:cursor-default flex-col  p-4 absolute top-14 lg:-left-24 xl:left-4 dropdown rounded-lg w-80 transform -translate-x-1/2'>
                    <h1 className='text-center mb-4 text-white'>Your Recent Notifications</h1>
                    {notifications.length > 0 ? (
                        <div className='flex flex-col space-y-4'>
                            {notifications.map((notification) => (
                                <div className='bg-gradient-to-br from-gray-800 to-gray-900 p-4 rounded-2xl shadow-lg shadow-gray-900 text-white flex flex-col'>
                                    <div className='flex items-center justify-between'>
                                        <h1 className={`${randomColor()}`}>{`${notification.type[0]}${notification.type.slice(1, notification.type.length).toLowerCase()}`}</h1>
                                        <p className='text-xs py-1 px-3 rounded-lg bg-zinc-800/50 text-blue-400'>{timeConverter(notification.createdAt)}</p>
                                    </div>
                                    <p className='mt-4 text-gray-300'>{notification.message}</p>
                                </div>
                            ))}
                            <Link href="/notifications" className='hover:underline underline-offset-4 text-center'>View More</Link>
                        </div>
                    ) : (
                        <h1>You don't have any notifications for now.</h1>
                    )}
                </div>
            )}
        </div>
    )
}
