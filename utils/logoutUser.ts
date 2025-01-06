


export const logoutUser = async () => {
    try {
        const res = await fetch(`/api/logout`, {
            method: "POST",
            headers: {
                "Content-Type" : "application/json",
            },
            credentials: "include"
        });
    }
    catch(error) {
        console.error(error);
    }
}