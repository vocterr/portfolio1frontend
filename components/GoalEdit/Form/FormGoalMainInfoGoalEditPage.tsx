import { initialGoalInterface } from '@/components/GoalCreate/GoalCreatePageOnClient'
import { Goal } from '@/types'
import React, { Dispatch, SetStateAction } from 'react'

export const FormGoalMainInfoGoalEditPage = <T extends initialGoalInterface | Goal>({ goal, setGoal }: { goal: T, setGoal: Dispatch<SetStateAction<T>> }) => {
    return (
        <>
            <label htmlFor="Title" className="formLabel">Goal's Title</label>
            <input
                className="formInput"
                value={goal.title}
                onChange={(e) => setGoal({ ...goal, title: e.target.value })}
            />
            <label htmlFor="Target Amount" className="formLabel mt-4">Goal's Target Amount</label>
            <div className='relative'>
                <span className='absolute top-2 left-3 text-green-400'>$</span>
                <input
                    className='bg-zinc-800/50 h-10 px-2  rounded-lg w-full focus:outline-none pl-8 pr-2'
                    value={goal.targetAmount}
                    onChange={(e) => setGoal({...goal, targetAmount: Number(e.target.value)})}
                />
            </div>
            <label htmlFor="Current Amount" className="formLabel mt-4">Goal's Current Amount</label>
            <div className='relative'>
                <span className='absolute top-2 left-3 text-green-400'>$</span>
                <input
                    className='bg-zinc-800/50 h-10 px-2  rounded-lg w-full focus:outline-none pl-8 pr-2'
                    value={goal.currentAmount}
                    onChange={(e) => setGoal({...goal, currentAmount: Number(e.target.value)})}
                />
            </div>
        </>
    )
}
