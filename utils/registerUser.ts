
export const registerUser = async (name: string, email: string, password: string) => {
    try {
        const res = await fetch(`/api/register`, {
            method: "POST",
            headers: {
                "Content-Type" : "application/json"
            },
            credentials: "include",
            body: JSON.stringify({name, email, password})
        });
        if (res.ok) {
            return { success: true, message: "User Created Successfully!" };
        }
        else {
            return { success: false, message: "Creating User Failed. Please try later." };
        }
    }
    catch(error) {
        console.error(error);
    }
}