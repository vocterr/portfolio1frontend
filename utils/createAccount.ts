import { initialAccountInterface } from "@/components/AccountCreate/AccountCreatePageOnClient";


export const createAccount = async (account: initialAccountInterface) => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/account`, {
            method: "POST",
            headers: {
                "Content-Type" : "application/json"
            },
            credentials: "include",
            body: JSON.stringify({account})
        });
        if (res.ok) {
            return { success: true, message: "Account Created Successfully!" };
        }
        else {
            return { success: false, message: "Creating Account Failed. Please try later." };
        }
    }
    catch(error) {
        console.error(error);
    }
}