import { Budget } from "@/types"


export const editBudget = async (budget: Budget, budgetId: string) => {
    try {
        const res = await fetch(`/api/budget/${budgetId}`, {
            method: "PATCH",
            headers: {
                "Content-Type" : "application/json"
            },
            credentials: "include",
            body: JSON.stringify({budget})
        });
        if (res.ok) {
            return { success: true, message: "Budget Updated Successfully!" };
        }
        else {
            return { success: false, message: "Updating Budget Failed. Please try later." };
        }
    }
    catch(error) {
        console.error(error);
    }
}