"use client"

import { Goal } from '@/types'
import { timeConverter } from '@/utils/timeConverter';
import React, { FormEvent, useState } from 'react'
import { FormGoalMainInfoGoalEditPage } from './Form/FormGoalMainInfoGoalEditPage';
import { FormGoalDateGoalEditPage } from './Form/FormGoalDateGoalEditPage';
import { editGoal } from '@/utils/editGoal';

export const GoalEditPageOnClient = ({initialGoal}: {initialGoal: Goal}) => {
    const [goal, setGoal] = useState<Goal>(initialGoal);
    const [statusMessage, setStatusMessage] = useState<{success: boolean, message: string} | null>(null);

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        const result = await editGoal(goal, goal.id);
        setStatusMessage({success: result!.success, message: result!.message})
    }
  return (
    <div className="flex flex-col mt-[104px] h-full w-full">
            <div className="card form w-[85%] self-center">
                <div className="flex items-start justify-between">
                    <div>
                        <h1 className="max-w-32 line-clamp-1">{initialGoal.title}</h1>
                        <h2 className="text-gray-400 text-xs">Editing Page</h2>
                    </div>
                    <p className="text-gray-400 text-xs py-1 px-3 rounded-lg bg-zinc-800/50">goal set by <b className="text-blue-400">{timeConverter(initialGoal.createdAt)}</b></p>
                </div>

                <form className="flex flex-col mt-6" onSubmit={(e) => handleSubmit(e)}>
                    <FormGoalMainInfoGoalEditPage goal={goal} setGoal={setGoal}/>
                    <FormGoalDateGoalEditPage goal={goal} setGoal={setGoal}/>
                    {statusMessage?.success ? (
                        <p className='text-green-400 self-center text-sm mt-2'>{statusMessage.message}</p>
                    ) : (
                        <p className='text-red-400 self-center text-sm mt-2'>{statusMessage?.message}</p>
                    )}
                    <button className='submitButton'>
                        Submit Changes
                    </button>
                </form>
            </div>
        </div>
  )
}
