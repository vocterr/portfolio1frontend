import { Account, User } from '@/types';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export const MainOverviewCard = ({ user, accounts, total }: { user: User; accounts: Account[]; total: number }) => {
    return (
        <div className="card lg:row-span-2">
            {/* Header */}
            <div className="flex items-center justify-between">
                <div>
                    <h1>Hello, {user.name}!</h1>
                    <p className="text-sm text-gray-400 mt-1">{user.email}</p>
                </div>

                <Image
                    src={user.profilePicture || "/images/defaultUser.avif"}
                    alt="profile picture"
                    width={50}
                    height={50}
                    className="rounded-full ring-4 ring-green-500 object-cover h-[44px] w-[44px]"
                />


            </div>

            {/* Role Badge */}
            <div className="mt-4 flex justify-between items-center">

                <div className="mt-1 bg-green-700 text-xs font-semibold tracking-widest uppercase  py-1 px-4 rounded-full">
                    {user.role}
                </div>

                <Link href="/accounts" className="text-xs font-semibold bg-rose-500 py-2 px-5 rounded-full transition hover:bg-rose-600">
                    View Accounts
                </Link>


            </div>

            {/* Accounts Overview */}
            <div className="mt-6 bg-gray-800/50 p-4 rounded-lg">
                <h2 className="text-lg font-semibold">Total Accounts</h2>
                <p className="text-2xl font-extrabold mt-2">{accounts.length}</p>
            </div>

            {/* Total Balance */}
            <div className="mt-6 bg-gray-800/50 p-4 rounded-lg">
                <h2 className="text-lg font-semibold">Total Balance</h2>
                <p className="text-3xl font-extrabold text-green-400 mt-2">${total.toFixed(2)}</p>
            </div>
        </div>
    );
};
