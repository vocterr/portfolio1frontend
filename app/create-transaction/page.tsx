import { TransactionCreatePageOnClient } from "@/components/TransactionCreate/TransactionCreatePageOnClient";
import { Account } from "@/types";
import { fetchAccountsOnServer } from "@/utils/Dashboard/fetchAccountsOnServer";
import { cookies } from "next/headers";




export default async function CreateTransactionPage() {
    const cookieStore = await cookies();
    const token = cookieStore.get("token")?.value;
    const accounts: Account[]  = await fetchAccountsOnServer(token);
    return (
        <TransactionCreatePageOnClient accounts={accounts}/>
    );
}