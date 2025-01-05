

export const fetchBudgetOnServer = async (token: any, budgetId: any) => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/budget/${budgetId}`, {
            method: "GET",
            headers: {
                "Content-Type" : "application/json",
                "Cookie" : `token=${token}`
            }
        });
        const data = await res.json();
        return data;
    }
    catch(error) {
        console.error(error);
    }
}