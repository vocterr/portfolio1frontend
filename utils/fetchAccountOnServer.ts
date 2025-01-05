

export const fetchAccountOnServer = async (token: any, accountId: any) => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/account/${accountId}`, {
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