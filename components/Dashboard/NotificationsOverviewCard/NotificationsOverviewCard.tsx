import { Notification } from '@/types'
import { timeConverter } from '@/utils/timeConverter'
import Link from 'next/link'
import React from 'react'
import { FiBell } from 'react-icons/fi'

export const NotificationsOverviewCard = ({notifications}: {notifications: Notification[]}) => {
  return (
    <div className='card'>
        <div className='flex items-start justify-between mb-6'>
            <div>
                <h1 className='mb-2'>Recent Notifications</h1>
                <Link href="/notifications" className='viewButton'>View Notifications</Link>
            </div>
           
            <div className='p-2 rounded-lg bg-zinc-800/50'>
                <FiBell className='h-7 w-7'/>
            </div>
        </div>
        {notifications.length > 0 ? (
            <div className='space-y-4'>
            {notifications.map((notification) => (
                <div className='flex flex-col bg-gray-800/50 rounded-lg shadow-gray-900 shadow-lg p-4'>
                    <div className='flex items-center justify-between'>
                        <h1 className={`text-lg ${notification.type == "ALERT" ? "text-red-400" : notification.type == "UPDATE" ? "text-green-400" : "text-amber-400"}`}>{notification.type}</h1>
                        <h1 className='bg-gray-800 p-2 rounded-lg text-blue-400 font-semibold text-sm'>{timeConverter(notification.createdAt)}</h1>
                    </div>

                    <h1 className='mt-2 text-gray-300'>{notification.message}</h1>
                </div>
            ))}
        </div>
        ) : (
            <p>You haven't received any notifications yet.</p>
        )}
        
        
    </div>
  )
}
