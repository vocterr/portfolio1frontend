


export const logoutUser = async () => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/logout`, {
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