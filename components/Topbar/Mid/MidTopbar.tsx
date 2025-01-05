import Link from 'next/link'
import React from 'react'
import { FiCpu, FiCreditCard, FiHome, FiPieChart, FiRepeat, FiTarget } from 'react-icons/fi'

export const MidTopbar = () => {
  return (
    <div className='hidden lg:flex items-center space-x-4 absolute left-1/2 -translate-x-1/2'>
        <Link href="/dashboard" className='topbarIcon'>
          <FiHome className='h-[22px] w-[22px]'/>
        </Link>
        <Link href="/accounts" className='topbarIcon'>
          <FiPieChart className='h-[22px] w-[22px]'/>
        </Link>
        <Link href="/budgets" className='topbarIcon'>
          <FiCreditCard className='h-[22px] w-[22px]'/>
        </Link>
        <Link href="/transactions" className='topbarIcon'>
          <FiRepeat className='h-[22px] w-[22px]'/>
        </Link>
        <Link href="/goals" className='topbarIcon'>
          <FiTarget className='h-[22px] w-[22px]'/>
        </Link>
        <Link href="/ai-insights" className='topbarIcon'>
          <FiCpu className='h-[22px] w-[22px]'/>
        </Link>

    </div>
  )
}
