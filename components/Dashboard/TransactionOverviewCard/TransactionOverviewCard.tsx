import { Transaction } from '@/types';
import { timeConverter } from '@/utils/timeConverter';
import Link from 'next/link';
import React from 'react';
import { FiDollarSign } from 'react-icons/fi';

export const TransactionOverviewCard = ({ transaction }: { transaction: Transaction }) => {
    return (
        <div className="card flex flex-col">
            {transaction ? (
                <>
                    <div className="flex items-center justify-between">
                        <div>
                            <h1 className='mb-2'>Last Transaction</h1>
                            <Link href="/transactions" className='viewButton'>View Transactions</Link>
                        </div>

                        <div className="py-2 px-4 bg-gray-800 rounded-full">
                            <h1 className="text-blue-400 font-semibold text-sm">
                                {timeConverter(transaction.date)}
                            </h1>
                        </div>
                    </div>

                    {/* Transaction Category */}
                    <div className="mt-6 flex justify-center">
                        <div className="py-2 px-6 rounded-full bg-gray-800 text-green-400 font-semibold text-lg">
                            {transaction.category}
                        </div>
                    </div>

                    {/* Description */}
                    <p className="text-center text-gray-400 mt-4">{transaction.description}</p>

                    {/* Amount and Account */}
                    <div className="mt-6 text-center">
                        <h1
                            className={`text-2xl font-bold tracking-wide ${transaction.amount > 0 ? 'text-green-400' : 'text-red-400'
                                }`}
                        >
                            ${transaction.amount}
                        </h1>
                        <p className="mt-2 text-lg text-gray-400">{transaction.amount > 0 ? 'INCOME' : 'EXPENSE'}</p>
                        <p className="mt-1 text-xl font-semibold text-white">{transaction.account.name}</p>
                    </div>
                </>
            ) : (
                <>

                <div className='flex items-center justify-between'>

                        <h1>Recent Transactions</h1>
                        <div className='rounded-lg bg-zinc-800/50 p-2'>
                            <FiDollarSign className='h-7 w-7' />
                        </div>

                    </div>
                    <h1 className='mt-6'>You don't have any transactions yet</h1>
                    <Link href="create-transaction" className='submitButton self-center text-center'>
                        Add Transaction
                    </Link>
                </>
                
            )}

        </div>
    );
};
