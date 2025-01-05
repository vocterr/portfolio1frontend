import { FormTransactionMainInfoTransactionEditPage } from "@/components/TransactionEdit/Form/FormTransactionMainInfoTransactionEditPage";
import { TransactionEditPageOnClient } from "@/components/TransactionEdit/TransactionEditPageOnClient";
import { Account, Transaction } from "@/types";
import { fetchAccountsOnServer } from "@/utils/Dashboard/fetchAccountsOnServer";
import { fetchTransactionOnServer } from "@/utils/fetchTransactionOnServer";
import { timeConverter } from "@/utils/timeConverter";
import { cookies } from "next/headers";



export default async function TransactionEditPage({params}: {params: any}) {
    const cookieStore = await cookies();
    const token = cookieStore.get("token")?.value;
    const awaitedParams = await params;
    const transactionId = awaitedParams.transactionId;
    const transaction: Transaction = await fetchTransactionOnServer(token, transactionId);
    const accounts: Account[] = await fetchAccountsOnServer(token);
    return (
        <TransactionEditPageOnClient accounts={accounts} initialTransaction={transaction}/>
    );
}