import { initialBudgetInterface } from '@/components/BudgetCreate/BudgetCreatePageOnClient'
import { Budget } from '@/types'
import React, { Dispatch, SetStateAction } from 'react'

export const FormBudgetMainInfoBudgetEditPage = <T extends initialBudgetInterface | Budget>({budget, setBudget}: {budget: T, setBudget: Dispatch<SetStateAction<T>>}) => {
  return (
    <>
        <label htmlFor="category" className='formLabel'>Budget's Category</label>
        <input 
            className='formInput'
            value={budget.category}
            onChange={(e) => setBudget({...budget, category: e.target.value})}
        />
        <label htmlFor="allocated Amount" className='formLabel mt-4'>Budget's Allocated Amount</label>
        <div className='relative'>
            <span className='text-green-400 absolute top-2 left-3'>$</span>
            <input 
              className='bg-zinc-800/50 h-10 px-2  rounded-lg w-full focus:outline-none pl-8 pr-2 '
              value={budget.allocatedAmount}
              onChange={(e) => setBudget({...budget, allocatedAmount: Number(e.target.value)})}
            />
        </div>
    </>
  )
}
