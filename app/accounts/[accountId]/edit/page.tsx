import { AccountEditPageOnClient } from "@/components/AccountEdit/AccountEditPageOnClient";
import { fetchAccountOnServer } from "@/utils/fetchAccountOnServer";
import { cookies } from "next/headers";



export default async function AccountEditPage({params}: {params: any}) {
    const cookieStore = await cookies();
    const token = await cookieStore.get("token")?.value;
    const awaitedParams = await params;
    const accountId = awaitedParams.accountId
    const account  = await fetchAccountOnServer(token, accountId);
    return (
        <AccountEditPageOnClient initialAccount={account} accountId={accountId}/>
    );
}