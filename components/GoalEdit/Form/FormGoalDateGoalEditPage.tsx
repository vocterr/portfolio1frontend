import { initialGoalInterface } from '@/components/GoalCreate/GoalCreatePageOnClient';
import { Goal } from '@/types'
import React, { ChangeEvent, Dispatch, FormEvent, SetStateAction } from 'react'

export const FormGoalDateGoalEditPage = <T extends initialGoalInterface | Goal>({ goal, setGoal }: { goal: T, setGoal: Dispatch<SetStateAction<T>> }) => {


    const handleDateChange = (e: ChangeEvent<HTMLInputElement>) => {
        const newDate = e.target.value;
        setGoal({ ...goal, targetDate: new Date(newDate).toISOString() })
    }

    return (
        <>
            <label htmlFor="Date" className='formLabel mt-4'>Goal's Target Date</label>
            <input
                type='date'
                className='formInput'
                value={new Date(goal.targetDate).toISOString().slice(0, 10)}
                onChange={(e) => handleDateChange(e)}
            />
        </>
    )
}
