"use client";

import React, { useState } from "react";
import { FiBell, FiCpu, FiHome, FiMenu, FiRepeat, FiSettings, FiUsers } from "react-icons/fi";
import { AnimatePresence, motion } from "framer-motion";
import { IoIosArrowBack, IoIosArrowDropright, IoIosArrowForward, IoIosArrowUp } from "react-icons/io";
import {MdAttachMoney} from "react-icons/md"
import Link from "next/link";
import { usePathname } from "next/navigation";

export const MenuTopbar = () => {
    const [isMenuOpened, setIsMenuOpened] = useState(false);
    const pathname = usePathname();

    const backdropVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.3 } },
        exit: { opacity: 0, transition: { duration: 0.3 } },
    };

    const menuVariants = {
        hidden: { x: "100%" },
        visible: {
            x: 0,
            transition: { duration: 0.5, ease: "easeOut" },
        },
        exit: {
            x: "100%",
            transition: { duration: 0.5, ease: "easeIn" },
        },
    };

    return (
        <>
            {/* Menu Icon */}
            <FiMenu
                onClick={() => setIsMenuOpened(true)}
                className="h-[26px] w-[26px] lg:hidden cursor-pointer"
            />

            {/* AnimatePresence for animations */}
            <AnimatePresence>
                {isMenuOpened && (
                    <>
                        <motion.div
                            className="fixed inset-0 bg-black bg-opacity-40 z-40"
                            variants={backdropVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            onClick={() => setIsMenuOpened(false)}
                        />

                        <motion.div
                            className="fixed right-0 top-0 h-full w-[80%] sm:w-[60%] md:w-[40%] bg-gradient-to-br from-gray-800 to-gray-900 border-l border-gray-900  z-50 flex flex-col shadow-lg shadow-gray-900"
                            variants={menuVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                        >
                            <IoIosArrowForward onClick={() => setIsMenuOpened(false)} className="absolute top-1/2 right-0 h-6 w-6"/>
                            <div className="flex flex-col mt-6 px-4 space-y-4 text-white h-full justify-center">
                                
                                <Link href="/dashboard" className={`menuItem ${pathname == "/dashboard" ? "from-green-500  to-blue-500" : "from-zinc-800/50 via-zinc-700/50 to-zinc-800/50"}`}>
                                    <FiHome className="h-5 w-5"/>
                                    <h1>Dashboard</h1>
                                </Link>

                                <Link href="/accounts" className={`menuItem ${pathname == "/accounts" ? "from-green-500  to-blue-500" : "from-zinc-800/50 via-zinc-700/50 to-zinc-800/50"}`}>
                                    <FiUsers className="h-5 w-5"/>
                                    <h1>Accounts</h1>
                                </Link>

                                <Link href="/transactions" className={`menuItem ${pathname == "/transactions" ? "from-green-500  to-blue-500" : "from-zinc-800/50 via-zinc-700/50 to-zinc-800/50"}`}>
                                    <FiRepeat className="h-5 w-5"/>
                                    <h1>Transactions</h1>
                                </Link>

                                <Link href="/budgets" className={`menuItem ${pathname == "/budgets" ? "from-green-500  to-blue-500" : "from-zinc-800/50 via-zinc-700/50 to-zinc-800/50"}`}>
                                    <MdAttachMoney className="h-5 w-5"/>
                                    <h1>Budgets</h1>
                                </Link>

                                <Link href="/ai-insights" className={`menuItem ${pathname == "/ai-insights" ? "from-green-500  to-blue-500" : "from-zinc-800/50 via-zinc-700/50 to-zinc-800/50"}`}>
                                    <FiCpu className="h-5 w-5"/>
                                    <h1>AI Insights</h1>
                                </Link>

                                <Link href="/notifications" className={`menuItem ${pathname == "/notifications" ? "from-green-500  to-blue-500" : "from-zinc-800/50 via-zinc-700/50 to-zinc-800/50"}`}>
                                    <FiBell className="h-5 w-5"/>
                                    <h1>Notifications</h1>
                                </Link>

                                <Link href="/settings" className={`menuItem ${pathname == "/settings" ? "from-green-500  to-blue-500" : "from-zinc-800/50 via-zinc-700/50 to-zinc-800/50"}`}>
                                    <FiSettings className="h-5 w-5"/>
                                    <h1>Settings</h1>
                                </Link>

                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
};
