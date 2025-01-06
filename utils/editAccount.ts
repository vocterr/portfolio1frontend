import { Account } from "@/types"
import { FormEvent } from "react";


export const editAccount = async (account: Account, accountId: string) => {
    try {
        const res = await fetch(`/api/account/${accountId}`, {
            method: "PATCH",
            headers: {
                "Content-Type" : "application/json"
            },
            credentials: "include",
            body: JSON.stringify({account})
        });
        if (res.ok) {
            return { success: true, message: "Account Updated Successfully!" };
        }
        else {
            return { success: false, message: "Updating Account Failed. Please try later." };
        }
    }
    catch(error) {
        console.error(error);
    }
}