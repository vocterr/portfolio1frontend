
export const initiateSettings = async (token: any) => {
    try {
        const res = await fetch(`/api/settings`, {
            method: "POST",
            headers: {
                "Content-Type" : "application/json",
                "Cookie": `token=${token}`
            },
        });
    }
    catch(error) {
        console.error(error);
    }
}