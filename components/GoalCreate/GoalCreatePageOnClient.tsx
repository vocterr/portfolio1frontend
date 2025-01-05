"use client";

import React, { FormEvent, useState } from 'react'
import { FormGoalMainInfoGoalEditPage } from '../GoalEdit/Form/FormGoalMainInfoGoalEditPage'
import { FormGoalDateGoalEditPage } from '../GoalEdit/Form/FormGoalDateGoalEditPage'
import { Goal, User } from '@/types';
import { createGoal } from '@/utils/createGoal';

export interface initialGoalInterface {
    title: string,
    targetAmount: number,
    currentAmount: number,
    targetDate: string
}

const initialGoal = {
    title: "",
    targetAmount: 0,
    currentAmount: 0,
    targetDate: new Date().toISOString(),
}

export const GoalCreatePageOnClient = () => {
    const [goal, setGoal] = useState<initialGoalInterface>(initialGoal);
    const [statusMessage, setStatusMessage] = useState<{success: boolean, message: string} | null>(null);

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        const result = await createGoal(goal);
        setStatusMessage({success: result!.success, message: result!.message});
    }
  return (
    <div className="flex flex-col mt-[104px] h-full w-full">
            <div className="card w-[85%] form self-center">

                <h1>Add Your New Goal</h1>

                <form className="flex flex-col mt-6" onSubmit={(e) => handleSubmit(e)}>
                    <FormGoalMainInfoGoalEditPage goal={goal} setGoal={setGoal} />
                    <FormGoalDateGoalEditPage goal={goal} setGoal={setGoal} />
                    {statusMessage?.success ? (
                        <p className='text-green-400  mt-2 text-sm text-center'>{statusMessage.message}</p>
                    ) : (
                        <p className='text-red-400 mt-2 text-sm text-center'>{statusMessage?.message}</p>
                    )}
                    <button className='submitButton'>
                        Add Goal
                    </button>
                </form>
            </div>
        </div>
  )
}
