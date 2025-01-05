

export const createTransaction = async (transaction: any) => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/transaction`, {
            method: "POST",
            headers: {
                "Content-Type" : "application/json"
            },
            credentials: "include",
            body: JSON.stringify({transaction})
        });
        if (res.ok) {
            return { success: true, message: "Goal Transaction Successfully!" };
        }
        else {
            return { success: false, message: "Creating Transaction Failed. Please try later." };
        }
    }
    catch(error) {
        console.error(error);
    }
}