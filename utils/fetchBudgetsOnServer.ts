export const fetchBudgetsOnServer = async (token: string | undefined) => {
    if (!token) {
        console.error("Token is missing. Cannot fetch budgets.");
        return [];
    }

    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/budgets`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Cookie: `token=${token}`, // Pass the token via the Cookie header
            },
        });

        if (!res.ok) {
            throw new Error(`Failed to fetch budgets: ${res.status} ${res.statusText}`);
        }

        const data = await res.json();
        console.log("Fetched budgets:", data);
        return data;
    } catch (error) {
        console.error("Error fetching budgets:", error);
        return []; // Return an empty array in case of errors
    }
};
