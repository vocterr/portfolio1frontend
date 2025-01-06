import { Account, Goal } from "@/types"
import { FormEvent } from "react";


export const editGoal = async (goal: Goal, goalId: string) => {
    try {
        const res = await fetch(`$/api/goal/${goalId}`, {
            method: "PATCH",
            headers: {
                "Content-Type" : "application/json"
            },
            credentials: "include",
            body: JSON.stringify({goal})
        });
        if (res.ok) {
            return { success: true, message: "Goal Updated Successfully!" };
        }
        else {
            return { success: false, message: "Updating Goal Failed. Please try later." };
        }
    }
    catch(error) {
        console.error(error);
    }
}