import { Budget } from "@/types";
import { fetchBudgetsOnServer } from "@/utils/fetchBudgetsOnServer";
import { timeConverter } from "@/utils/timeConverter";
import { cookies } from "next/headers";
import Link from "next/link";



export default async function BudgetsPage() {
    const cookieStore = await cookies();
    console.log("Cookies", cookieStore.getAll());
    const token = cookieStore.get("token")?.value;
    const budgets: Budget[] = await fetchBudgetsOnServer(token);
    return (
        <div className="flex flex-col mt-[104px] h-full w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 3xl:grid-cols-4 gap-10 self-center w-[85%] sm:w-[50%] md:w-[40%] lg:w-[70%] xl:w-[60%] 2xl:w-[80%]">
                <div className="card h-80 overflow-hidden flex flex-col">
                    <div className="flex items-start justify-between">

                            <h1 className="mb-2 max-w-32 line-clamp-1 h-7 w-32 bg-zinc-800/50 rounded-lg"></h1>

                        <p className="w-24 h-7 bg-zinc-800/50 rounded-lg"></p>
                    </div>
                    <div className="flex flex-col mt-6 space-y-3 text-sm text-gray-300">
                        <h1 className="w-52 h-7 rounded-lg bg-zinc-800/50"></h1>
                        <h1 className="w-52 h-7 rounded-lg bg-zinc-800/50"></h1>
                        <h1 className="w-52 h-7 rounded-lg bg-zinc-800/50"></h1>
                    </div>
                    <h1 className="mt-6 w-64 h-6 rounded-lg bg-zinc-800/50"></h1>

                    <Link href="/create-budget" className="createButton">
                        Add New Budget
                    </Link>
                </div>
                {budgets.map((budget) => {
                    const remaining = budget.allocatedAmount - (budget.budgetAllocations.reduce((acc, val) => acc + val.allocatedAmount, 0) || 0);
                    return (
                        <div className="card relative h-80 overflow-hidden">
                            <div className="flex items-start justify-between">
                                <div>
                                    <h1 className="mb-2 max-w-32 line-clamp-1">{budget.category}</h1>
                                    <Link href={`/budgets/${budget.id}/edit`} className="viewButton">
                                        Edit Budget
                                    </Link>
                                </div>

                                <p className="py-1 px-3 rounded-lg bg-zinc-800/50 text-gray-400 text-xs">started by <b className="text-blue-400 font-semibold">{timeConverter(budget.startDate)}</b></p>
                            </div>
                            <div className="flex flex-col mt-6 space-y-3 text-sm text-gray-300">
                                <h1>Allocated Amount: <b className="text-amber-400">${budget.allocatedAmount}</b></h1>
                                <h1>Remaining Amount: <b className={`${remaining > 0 ? "text-green-400" : "text-red-400"}`}>${remaining}</b></h1>
                                <h1>Budget allocated in <b className="text-amber-400">{budget.budgetAllocations.length}</b> {budget.budgetAllocations.length == 1 ? "different way" : "different ways"}</h1>
                            </div>
                            <h1 className="absolute bottom-2 left-4 text-xs text-gray-400">Budget predicted to end by <b className="text-blue-400">{timeConverter(budget.endDate)}</b></h1>
                        </div>
                    );

                })}
            </div>
        </div>
    );
}