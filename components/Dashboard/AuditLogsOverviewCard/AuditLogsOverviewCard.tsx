import { AuditLog } from '@/types'
import { timeConverter } from '@/utils/timeConverter'
import Link from 'next/link'
import React from 'react'
import { FiActivity } from 'react-icons/fi'

export const AuditLogsOverviewCard = ({ auditLogs }: { auditLogs: AuditLog[] }) => {
  return (
    <div className='card'>
      <div className='flex items-start justify-between'>
        <div>
          <h1 className='mb-2'>Your Recent Actions</h1>
          <Link href="/actions" className='viewButton'>
            View Actions
          </Link>
        </div>

        <div className='p-2 rounded-lg bg-zinc-800/50'>
          <FiActivity className='h-7 w-7' />
        </div>
      </div>
      {auditLogs.length > 0 ? (
        <div className='mt-6 space-y-4'>
          {auditLogs.map((auditLog) => (
            <div className='bg-gray-800/50 shadow-lg shadow-gray-900 p-4 rounded-lg'>
              <div className='flex items-center justify-between'>
                <h1 className='text-amber-400 line-clamp-1'>{auditLog.action}</h1>
                <h1 className='font-semibold p-2 rounded-lg bg-gray-800 text-blue-400 text-sm'>{timeConverter(auditLog.createdAt)}</h1>
              </div>
              <p className='mt-2 text-gray-300'>
                {auditLog.description}
              </p>
              <p className='mt-2 text-gray-300'>IP: <b className='text-green-400 font-normal'>{auditLog.ipAddress}</b></p>
            </div>
          ))}
        </div>
      ) : (
        <p className='mt-6'>We've not received any activities from you.</p>
      )}

    </div>
  )
}
