
export const loginUser = async (name: string, email: string, password: string) => {
    try {
        const res = await fetch(`/api/login`, {
            method: "POST",
            headers: {
                "Content-Type" : "application/json"
            },
            credentials: "include",
            body: JSON.stringify({name, email, password})
        });
        const data = await res.json();
        if (res.ok) {
            return { success: true, message: "Logged In Successfully!" };
            
        }
        else {
            return { success: false, message: "Signing In Failed. Please Try Again" };
        }
    }
    catch(error) {
        console.error(error);
    }
}