
export const loginUser = async (name: string, email: string, password: string) => {
    try {
        const res = await fetch(`/apilogin`, {
            method: "POST",
            headers: {
                "Content-Type" : "application/json"
            },
            credentials: "include",
            body: JSON.stringify({name, email, password})
        });
        const data = await res.json();
        if (res.ok) {
            localStorage.setItem("token", data.token);
            localStorage.setItem("loggedIn", data.loggedIn);
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