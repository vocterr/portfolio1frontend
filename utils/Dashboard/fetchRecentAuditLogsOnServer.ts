

export const fetchRecentAuditLogsOnServer = async (token: any) => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/recentAuditLogs`, {
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