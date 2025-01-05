import { Budget } from '@/types';
import { timeConverter } from '@/utils/timeConverter';
import Link from 'next/link';
import React from 'react';
import { FiBarChart2, FiDollarSign, FiExternalLink } from 'react-icons/fi';

export const BudgetOverviewCard = ({ budget }: { budget: Budget }) => {
    let remaining = budget?.allocatedAmount || 0;

    return (
        <div className="card flex flex-col">
            {/* Header */}
            {budget ? (
                <>
                    <div className='flex items-center justify-between'>
                        <div>
                            <h1 className='mb-2'>Highest Allocated Budget</h1>
                            <Link href="/budgets" className='viewButton'>View Budgets</Link>
                        </div>

                        <div className='p-2 rounded-lg bg-zinc-800/80'>
                            <FiDollarSign className='h-7 w-7' />
                        </div>
                    </div>


                    {/* Category */}
                    <h1 className="text-rose-400 text-center mt-4 font-bold text-lg">{budget.category}</h1>
                    <p className="text-center text-sm text-gray-400 mt-2">
                        Allocated{' '}
                        <b className="text-lg font-semibold tracking-wider text-green-400">${budget.allocatedAmount}</b>
                    </p>

                    {/* Allocations */}
                    <div className="mt-6 space-y-4">
                        {budget.budgetAllocations.map((allocation) => {
                            remaining -= allocation.allocatedAmount;
                            return (
                                <div
                                    key={allocation.id}
                                    className="rounded-xl bg-gray-800/50 p-4 flex justify-between items-center shadow-md"
                                >
                                    <div>
                                        <h1 className="text-green-400 font-semibold">
                                            ${allocation.allocatedAmount}{' '}
                                            <span className="text-gray-400">on</span>{' '}
                                            <span className="text-amber-400">{allocation.transaction.category}</span>
                                        </h1>
                                    </div>
                                    <h1 className="text-sm font-semibold text-blue-400">
                                        {timeConverter(allocation.transaction.date)}
                                    </h1>
                                </div>
                            );
                        })}
                    </div>

                    {/* Remaining Budget */}
                    <h1 className="mt-8 text-xl font-semibold text-gray-400">
                        Remaining budget:{' '}
                        <b className="text-green-400 text-2xl tracking-wide">${remaining}</b>
                    </h1>
                </>
            ) : (
                <>
                    <div className='flex items-center justify-between'>

                        <h1>List of Budgets</h1>
                        <div className='rounded-lg bg-zinc-800/50 p-2'>
                            <FiBarChart2 className='h-7 w-7' />
                        </div>

                    </div>
                    <h1 className='mt-6'>You don't have any budgets yet</h1>
                    <Link href="create-budget" className='submitButton self-center text-center'>
                        Add Budget
                    </Link>
                </>
            )}
        </div>
    );
};
