import { initialBudgetInterface } from "@/components/BudgetCreate/BudgetCreatePageOnClient";
import { initialGoalInterface } from "@/components/GoalCreate/GoalCreatePageOnClient";
import { Goal } from "@/types";

export const createBudget = async (budget: initialBudgetInterface) => {
    try {
        const res = await fetch(`/api/budget`, {
            method: "POST",
            headers: {
                "Content-Type" : "application/json"
            },
            credentials: "include",
            body: JSON.stringify({budget})
        });
        if (res.ok) {
            return { success: true, message: "Budget Created Successfully!" };
        }
        else {
            return { success: false, message: "Creating Budget Failed. Please try later." };
        }
    }
    catch(error) {
        console.error(error);
    }
}