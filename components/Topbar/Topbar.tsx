import React from 'react'
import { LogoLeftTopbar } from './Left/LogoLeftTopbar'
import { MidTopbar } from './Mid/MidTopbar'
import { RightTopbar } from './Right/RightTopbar'

export const Topbar = () => {
    return (
        <nav className="fixed h-16 w-full z-50 bg-gradient-to-r from-[#111111] via-[#1A1A1A] to-[#111111] ">
            <div className="h-full px-3 flex items-center justify-between mx-auto max-w-screen-lg">
                       
                <LogoLeftTopbar />
                <MidTopbar />
                <RightTopbar />

            </div>
        </nav>
    )
}
