import { Account } from "@/types";
import { fetchAccountsOnServer } from "@/utils/Dashboard/fetchAccountsOnServer";
import { timeConverter } from "@/utils/timeConverter";
import { cookies } from "next/headers";
import Link from "next/link";



export default async function AccountsPage() {
    const cookieStore = await cookies();
    const token = cookieStore.get("token")?.value;
    const accounts: Account[] | [] = await fetchAccountsOnServer(token) ?? [];
    return (
        <div className="mt-[104px] h-full w-full flex flex-col">
            <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 3xl:grid-cols-4 self-center w-[85%] sm:w-[50%] md:w-[40%] lg:w-[60%] xl:w-[50%] 2xl:w-[60%] 3xl:w-[70%] gap-10">
                <div className="card flex flex-col h-80 overflow-hidden">
                    <div className="flex items-start justify-between">

                        <h1 className="mb-2 bg-zinc-800/50 rounded-lg h-7 w-32"></h1>

                        <div className="bg-zinc-800/50 rounded-lg h-7 w-24">
                        </div>
                    </div>

                    <div className="flex flex-col space-y-3 mt-6 text-gray-300">
                        <h1 className="h-7 w-52 bg-zinc-800/50 rounded-lg"></h1>
                        <h1 className="h-7 w-52 bg-zinc-800/50 rounded-lg"></h1>
                        <h1 className="h-7 w-52 bg-zinc-800/50 rounded-lg"></h1>
                    </div>
                    <h1 className="h-6 w-64 mt-6 bg-zinc-800/50 rounded-lg"></h1>
                    <Link href="/create-account" className="createButton">
                        Create New Account
                    </Link>

                </div>
                {accounts?.map((account) => (
                    <div className="card">
                        <div className="flex items-start justify-between">
                            <div>
                                <h1 className="mb-2">{account.name}</h1>
                                <Link className="viewButton" href={`/accounts/${account.id}/edit`}>
                                    Edit Account
                                </Link>
                            </div>
                            <div className="bg-zinc-800/50 rounded-lg px-3 py-2">
                                <h1 className={`text-xs ${account.type == "SAVINGS" ? "text-blue-400" : account.type == "CHECKING" ? "text-amber-400" : "text-green-400"}`}>{account.type}</h1>
                            </div>
                        </div>

                        <div className="flex flex-col space-y-3 mt-6 text-gray-300">
                            <h1>Account's Currency: <b className="text-amber-400">{account.currency}</b> </h1>
                            <h1>Account's Balance: <b className={`${account.balance > 0 ? "text-green-400" : "text-red-400"}`}>${account.balance}</b> </h1>
                            <h1>Total Transactions: <b className="text-amber-400">{account.transactions.length}</b></h1>
                        </div>
                        <h1 className="text-gray-400 text-xs mt-6">Account created on <b className="text-blue-400">{timeConverter(account.createdAt)} {new Date(account.createdAt).getFullYear()}</b> </h1>
                    </div>
                ))}
            </div>
        </div>
    );
}