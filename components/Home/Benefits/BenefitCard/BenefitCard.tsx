import React from 'react'

export const BenefitCard = ({header, text}: {header: string, text: string}) => {
  return (
    <div className="flex flex-col bg-gradient-to-b mt-6 p-6 text-gray-200 rounded-lg">
        <h1 className='text-center font-semibold text-2xl tracking-wider'>{header}</h1>
        <p className='text-lg mt-4'>{text}</p>
    </div>
  )
}
