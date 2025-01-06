


export const fetchRecentNotificationsOnClient = async () => {
    try {
        const res = await fetch(`/api/recentNotifications`, {
            method: "GET",
            headers: {
                "Content-Type" : "application/json"
            },
            credentials: "include"
        });
        const data = await res.json();
        console.log(data);
        return data;
    }
    catch(error) {
        console.error(error);
    }
}