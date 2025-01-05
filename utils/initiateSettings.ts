
export const initiateSettings = async (token: any) => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/settings`, {
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