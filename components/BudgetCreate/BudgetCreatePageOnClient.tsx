"use client";

import React, { FormEvent, useState } from 'react'
import { FormBudgetMainInfoBudgetEditPage } from '../BudgetEdit/Form/FormBudgetMainInfoBudgetEditPage'
import { FormBudgetDateBudgetEditPage } from '../BudgetEdit/Form/FormBudgetDateBudgetEditPage'
import { Budget } from '@/types'
import { createBudget } from '@/utils/createBudget';


export interface initialBudgetInterface {
    allocatedAmount: number,
    category: string,
    endDate: string,
    startDate: string,
}
const initialBudget = {
    allocatedAmount: 0,
    category: "",
    endDate: new Date().toISOString(),
    startDate: new Date().toISOString(),
}

export const BudgetCreatePageOnClient = () => {
    const [budget, setBudget] = useState<initialBudgetInterface>(initialBudget);
    const [statusMessage, setStatusMessage] = useState<{success: boolean, message: string} | null>(null);
   
    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        const result = await createBudget(budget);
        setStatusMessage({success: result!.success, message: result!.message});
    }

    return (
        <div className="mt-[104px] h-full w-full flex flex-col">
            <div className="card w-[85%] form self-center">
                <h1>Add New Budget</h1>

                <form className="mt-6 flex flex-col " onSubmit={(e) => handleSubmit(e)}>
                    <FormBudgetMainInfoBudgetEditPage budget={budget} setBudget={setBudget} />
                    <FormBudgetDateBudgetEditPage budget={budget} setBudget={setBudget} />
                    {statusMessage?.success ? (
                        <p className='text-green-400 text-sm mt-2 text-center'>{statusMessage.message}</p>
                    ) : (
                        <p className='text-red-400 text-sm mt-2 text-center'>{statusMessage?.message}</p>
                    )}
                    <button className='submitButton'>
                        Add Budget
                    </button>
                </form>
            </div>
        </div>
    )
}
