"use client"

import { Budget } from '@/types'
import { timeConverter } from '@/utils/timeConverter'
import React, { FormEvent, useState } from 'react'
import { FormBudgetMainInfoBudgetEditPage } from './Form/FormBudgetMainInfoBudgetEditPage'
import { FormBudgetDateBudgetEditPage } from './Form/FormBudgetDateBudgetEditPage'
import { editBudget } from '@/utils/editBudget'

export const BudgetEditPageOnClient = ({ initialBudget }: { initialBudget: Budget }) => {
    const [budget, setBudget] = useState<Budget>(initialBudget);
    const [openedWindow, setOpenedWindow] = useState("");
    const [statusMessage, setStatusMessage] = useState<{success: boolean, message: string} | null>(null);

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        const result = await editBudget(budget, budget.id);
        setStatusMessage({success: result!.success, message: result!.message});
    }
    return (
        <div className="mt-[104px] h-full w-full flex flex-col">
            <div className="card w-[85%] self-center form">
                <div className="flex items-start justify-between">
                    <div>
                        <h1 className='line-clamp-1 max-w-32'>{initialBudget.category}</h1>
                        <h2 className="text-xs text-gray-400">Editing Page</h2>
                    </div>

                    <p className="text-xs rounded-lg py-1 px-3 bg-zinc-800/50 text-gray-400">started by <b className="text-blue-400">{timeConverter(initialBudget.startDate)}</b></p>
                </div>

                <form className="mt-6 flex flex-col " onSubmit={(e) => handleSubmit(e)}>
                    <FormBudgetMainInfoBudgetEditPage budget={budget} setBudget={setBudget}/>
                    <FormBudgetDateBudgetEditPage budget={budget} setBudget={setBudget}/>
                    {statusMessage?.success ? (
                        <p className='text-green-400 text-sm mt-2 text-center'>{statusMessage.message}</p>
                    ) : (
                        <p className='text-red-400 text-sm mt-2 text-center'>{statusMessage?.message}</p>
                    )}
                    <button className='submitButton'>
                        Submit Changes
                    </button>
                </form>
            </div>
        </div>
    )
}
