import { Account, Transaction } from "@/types"

export const editTransaction = async (transaction: Transaction, transactionId: string) => {
    try {
        const res = await fetch(`/api/transaction/${transactionId}`, {
            method: "PATCH",
            headers: {
                "Content-Type" : "application/json"
            },
            credentials: "include",
            body: JSON.stringify({transaction})
        });
        if (res.ok) {
            return { success: true, message: "Transaction Updated Successfully!" };
        }
        else {
            return { success: false, message: "Updating Transaction Failed. Please try later." };
        }
    }
    catch(error) {
        console.error(error);
    }
}