import { Account, Settings } from "@/types"
import { FormEvent } from "react";


export const editSettings = async (settings: Settings) => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/settings`, {
            method: "PATCH",
            headers: {
                "Content-Type" : "application/json"
            },
            credentials: "include",
            body: JSON.stringify({settings})
        });
    }
    catch(error) {
        console.error(error);
    }
}