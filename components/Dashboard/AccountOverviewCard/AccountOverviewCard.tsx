import { Account } from '@/types';
import Link from 'next/link';
import React from 'react';
import { FiUsers } from 'react-icons/fi';

export const AccountOverviewCard = ({ account }: { account: Account }) => {
    return (
        <div className="card flex flex-col">
            {account ? (
                <>
                    <div className="flex items-center justify-between">
                        <div>
                            <h1 className='mb-2'>{account.name}</h1>
                            <Link href="/accounts" className='viewButton'>
                                View Accounts
                            </Link>
                        </div>

                        <div className="py-1 px-4 rounded-full bg-gray-800">
                            <h1 className="text-amber-400 text-sm py-1 font-semibold">{account.type}</h1>
                        </div>
                    </div>

                    {/* Currency */}
                    <div className="mt-6 flex justify-center">
                        <div className="py-2 px-6 rounded-full bg-gray-800 text-blue-400 text-lg font-bold">
                            {account.currency}
                        </div>
                    </div>

                    {/* Total Balance */}
                    <div className="mt-6 text-center">
                        <h1 className="text-lg text-gray-400">Total Balance</h1>
                        <h1 className="text-3xl font-bold text-green-400 mt-2">${account.balance}</h1>
                    </div>
                </>
            ) : (
                <>
                    <div className='flex items-center justify-between'>

                        <h1>List of Accounts</h1>
                        <div className='rounded-lg bg-zinc-800/50 p-2'>
                            <FiUsers className='h-7 w-7' />
                        </div>

                    </div>
                    <h1 className='mt-6'>You don't have any accounts yet</h1>
                    <Link href="create-account" className='submitButton self-center text-center'>
                        Create Account
                    </Link>
                </>

            )}
            {/* Header */}

        </div>
    );
};
