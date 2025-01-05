import React from 'react'
import { IconType } from 'react-icons/lib'

export const FeatureCard = ({header, text, icon: Icon}: {header: string, text: string, icon: IconType}) => {
    return (
        <div className="flex flex-col rounded-lg bg-gradient-to-b p-6">
            <div className="flex items-center space-x-3">
                <div className="rounded-lg bg-zinc-800/50 p-2">
                    <Icon className="h-6 w-6 text-gray-300" />
                </div>
                <h1 className='text-white'>{header}</h1>
            </div>

            <div className='mt-4 text-gray-300'>
                <p>{text}</p>
            </div>
        </div>
    )
}
