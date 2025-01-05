import { initialGoalInterface } from "@/components/GoalCreate/GoalCreatePageOnClient";
import { Goal } from "@/types";

export const createGoal = async (goal: initialGoalInterface) => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/goal`, {
            method: "POST",
            headers: {
                "Content-Type" : "application/json"
            },
            credentials: "include",
            body: JSON.stringify({goal})
        });
        if (res.ok) {
            return { success: true, message: "Goal Created Successfully!" };
        }
        else {
            return { success: false, message: "Creating Goal Failed. Please try later." };
        }
    }
    catch(error) {
        console.error(error);
    }
}