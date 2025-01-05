import { Goal } from '@/types'
import { timeConverter } from '@/utils/timeConverter'
import Link from 'next/link'
import React from 'react'
import { FiTarget } from 'react-icons/fi'

export const FinancialGoalsOverviewCard = ({ goals }: { goals: Goal[] }) => {
    return (

        <div className='card flex flex-col'>
            <div className='flex items-start justify-between'>
                <div>
                    <h1 className='mb-2'>Your Recent Goals</h1>
                    <Link href="/goals" className='viewButton'>
                        View Goals
                    </Link>
                </div>

                <div className='p-2 rounded-lg bg-gray-800/50'>
                    <FiTarget className='h-7 w-7' />
                </div>
            </div>
            {goals.length > 0 ? (
                <div className='space-y-4'>
                    {goals.map((goal) => (
                        <div className='flex flex-col bg-gray-800/50 mt-6 p-4 rounded-lg shadow-lg shadow-gray-900'>
                            <div className='flex items-center justify-between'>
                                <h1 className='text-amber-400'>{goal.title}</h1>
                                <p className='text-blue-400 text-sm font-semibold'>{timeConverter(goal.createdAt)}</p>
                            </div>

                            <div className='flex items-center space-x-1 mt-4 text-sm'>
                                <h1>Target Amount: </h1>
                                <h1 className='text-amber-400 font-semibold'>${goal.targetAmount}</h1>
                            </div>

                            <div className='flex items-center space-x-1 mt-2 text-sm'>
                                <h1>Current Amount: </h1>
                                <h1 className={`${goal.currentAmount > goal.targetAmount ? "text-green-400" : "text-red-400"} font-semibold`}>${goal.currentAmount}</h1>
                            </div>

                            <div className='flex items-center space-x-1 mt-4'>
                                <h1 className='text-xs text-gray-400'>Targetted to End By</h1>
                                <p className='text-blue-400 font-semibold text-xs'>{timeConverter(goal.targetDate)}</p>
                            </div>

                        </div>
                    ))}
                </div>
            ) : (
                <>
                    <p className='mt-6'>You haven't set any goals yet.</p>
                    <Link href="/create-goal" className='submitButton self-center text-center'>
                        Create Goal
                    </Link>
                </>
                
            )}




        </div>
    )
}
