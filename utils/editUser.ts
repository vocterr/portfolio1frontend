import { Account, User } from "@/types"
import { FormEvent } from "react";


export const editUser = async (formdata: FormData) => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/user`, {
            method: "PATCH",
            credentials: "include",
            body: formdata
        });
        if (res.ok) {
            return { success: true, message: "User Updated Successfully!" };
        }
        else {
            return { success: false, message: "Updating User Failed. Please try later." };
        }
    }
    catch(error) {
        console.error(error);
    }
}