import { Transaction } from "@/types";
import { fetchTransactionOnServer } from "@/utils/Dashboard/fetchTransactionsOnServer";
import { timeConverter } from "@/utils/timeConverter";
import { cookies } from "next/headers";
import Link from "next/link";

export default async function TransactionsPage() {
    const cookieStore = await cookies();
    const token = cookieStore.get("token")?.value;
    const transactions: Transaction[] | [] = await fetchTransactionOnServer(token) || [];

    return (
        <div className="mt-[104px] flex flex-col h-full w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 3xl:grid-cols-4  gap-10 self-center w-[85%] sm:w-[45%] md:w-[40%] lg:w-[65%] xl:w-[50%] 2xl:w-[65%] 3xl:w-[70%] ">
                <div className="card flex flex-col space-y-4">
                    <div className="flex items-start justify-between">
                        <h1 className="h-7 w-32 rounded-lg bg-zinc-800/50"></h1>
                        <p className="h-7 w-24 bg-zinc-800/50 rounded-lg"></p>
                    </div>

                    <div className="flex items-center justify-between bg-zinc-800/50  h-10 w-full rounded-lg">

                    </div>
                    <div className="bg-zinc-900/50 h-10 w-full rounded-lg flex items-center justify-between">

                    </div>

                    {/* Description */}
                    <div className="text-gray-400 text-sm">
                        <h1 className="font-semibold mb-2 bg-zinc-800/50 rounded-lg w-28 h-6"></h1>
                        <p className="bg-zinc-800/50 rounded-lg w-64 h-7"></p>
                    </div>
                    <Link href="/create-transaction" className="createButton">
                        Add New Transaction
                    </Link>
                </div>
                {transactions.map((transaction) => (
                    <div key={transaction.id} className="card flex flex-col space-y-4">
                        {/* Header */}
                        <div className="flex items-start justify-between">
                            <div>
                                <h1 className="font-bold text-lg mb-2">{transaction.account.name}</h1>
                                <Link className="viewButton" href={`/transactions/${transaction.id}/edit`}>
                                    Edit Transaction
                                </Link>
                            </div>

                            <p className="text-sm font-semibold text-blue-400 px-4 py-1 bg-zinc-800/50 rounded-lg">
                                {timeConverter(transaction.date)}
                            </p>
                        </div>

                        {/* Type and Category */}
                        <div className="flex items-center justify-between bg-zinc-800/50 py-3 px-4 rounded-lg">
                            <h1
                                className={`text-sm font-semibold ${transaction.type === "EXPENSE" ? "text-red-400" : "text-green-400"
                                    }`}
                            >
                                {transaction.type}
                            </h1>
                            <h1 className="text-sm text-amber-400 font-semibold">{transaction.category}</h1>
                        </div>

                        {/* Amount */}
                        <div className="bg-zinc-900/50 py-3 px-4 rounded-lg flex items-center justify-between">
                            <h1 className="text-sm font-semibold text-gray-400">Transaction Amount</h1>
                            <h1
                                className={`font-bold text-lg ${transaction.type === "EXPENSE" ? "text-red-400" : "text-green-400"
                                    }`}
                            >
                                ${transaction.amount}
                            </h1>
                        </div>

                        {/* Description */}
                        <div className="text-gray-400 text-sm">
                            <h1 className="font-semibold mb-1">Description</h1>
                            <p>{transaction.description || "No description provided."}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
