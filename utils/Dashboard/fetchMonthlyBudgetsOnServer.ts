

export const fetchMonthlyBudgetsOnServer = async (token: any) => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/monthlyBudgets`, {
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