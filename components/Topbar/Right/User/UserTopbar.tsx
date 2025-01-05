"use client";

import { getCookieValue } from '@/utils/getCookieValue';
import { logoutUser } from '@/utils/logoutUser';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { FiInfo, FiLogIn, FiLogOut, FiUser } from 'react-icons/fi';

export const UserTopbar = () => {
    const [isUserOpened, setIsUserOpened] = useState(false);
    const [sessionLogged, setSessionLogged] = useState(false);

    const checkLoginState = () => {
        const logged = getCookieValue("loggedIn");
        setSessionLogged(logged === "yes");
    };

    useEffect(() => {
        // Check login state on mount
        checkLoginState();

        // Poll for cookie changes every 500ms
        const interval = setInterval(() => {
            checkLoginState();
        }, 500);

        // Cleanup the interval on unmount
        return () => clearInterval(interval);
    }, []);

    const handleLogout = async () => {
        // Call logout logic
        await logoutUser();

        // Clear logged-in state locally
        checkLoginState(); // Update immediately after logout
    };

    return (
        <div className='relative topbarIcon'>
            <FiUser onClick={() => setIsUserOpened(!isUserOpened)} className='h-[22px] w-[22px]' />
            {isUserOpened && (
                <div className='dropdown flex flex-col absolute space-y-4 top-14 left-0 p-4 rounded-lg -translate-x-1/2'>
                    {sessionLogged ? (
                        <>
                            <Link
                                href="/user"
                                className='flex items-center space-x-2 justify-center bg-zinc-800/80 hover:bg-zinc-800 transition-all duration-200 hover:scale-[1.03] w-44 h-10 rounded-lg'
                            >
                                <FiInfo className='h-5 w-5' />
                                <h1>Edit User</h1>
                            </Link>
                            <button
                                onClick={handleLogout}
                                className='flex items-center space-x-2 justify-center bg-zinc-800/80 hover:bg-zinc-800 transition-all duration-200 hover:scale-[1.03] w-44 h-10 rounded-lg'
                            >
                                <FiLogOut className='h-5 w-5' />
                                <h1>Log Out</h1>
                            </button>
                        </>
                    ) : (
                        <div className='flex flex-col space-y-4'>
                            <p className='text-center'>You are not logged in</p>
                            <Link
                                href="/signin"
                                className='flex items-center space-x-2 justify-center bg-zinc-800/80 hover:bg-zinc-800 transition-all duration-200 hover:scale-[1.03] w-44 h-10 rounded-lg'
                            >
                                <FiLogIn className='h-5 w-5' />
                                <h1>Sign In</h1>
                            </Link>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};
