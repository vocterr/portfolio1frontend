import { Goal } from "@/types";
import { fetchGoalsOnServer } from "@/utils/fetchGoalsOnServer";
import { timeConverter } from "@/utils/timeConverter";
import { cookies } from "next/headers";
import Link from "next/link";



export default async function GoalsPage() {
    const cookieStore = await cookies();
    const token = await cookieStore.get("token")?.value;
    const goals: Goal[] = await fetchGoalsOnServer(token);
    return (
        <div className="mt-[104px] h-full w-full flex flex-col">
            <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-10 self-center w-[85%] sm:w-[50%] lg:w-[70%] xl:w-[60%] 2xl:w-[65%]">
                <div className="card">
                    <div className="flex items-start justify-between">
                        <h1 className="h-7 w-32 rounded-lg bg-zinc-800/50"></h1>
                        <p className="h-7 w-24 rounded-lg bg-zinc-800/50"></p>
                    </div>

                    <div className="flex flex-col mt-6  text-sm text-gray-300">
                        <h1 className="rounded-lg h-7 w-52 bg-zinc-800/50"></h1>
                        <h1 className="rounded-lg mt-3 h-7 w-52 bg-zinc-800/50"></h1>
                        <div className="mt-6">
                            <h2 className="bg-zinc-800/50 rounded-lg h-4 w-28"></h2>
                            <div className="h-2 rounded-full bg-zinc-800/50 w-full mt-1">
                            </div>
                        </div>
                        <p className="mt-6 h-5 w-64 rounded-lg bg-zinc-800/50"></p>
                        <Link href="/create-goal" className="createButton">
                            Add New Goal
                        </Link>
                    </div>
                </div>
                {goals.map((goal) => (
                    <div className="card">
                        <div className="flex items-start justify-between">
                            <div>
                                <h1 className="mb-2">{goal.title}</h1>
                                <Link href={`/goals/${goal.id}/edit`} className="viewButton">
                                    Edit Goal
                                </Link>
                            </div>
                            <p className="text-xs py-1 px-3 rounded-lg bg-zinc-800/50 text-gray-400 ">goal set by <b className="text-blue-400">{timeConverter(goal.targetDate)}</b></p>
                        </div>

                        <div className="flex flex-col mt-6  text-sm text-gray-300">
                            <h1 >Target Amount: <b className="text-amber-400">${goal.targetAmount}</b></h1>
                            <h1 className="mt-3">Current Amount: <b className="text-green-400">${goal.currentAmount}</b></h1>
                            <div className="mt-6">
                                <h2 className="text-xs text-gray-400 font-semibold">Completed in <b className="text-amber-400">{(goal.currentAmount / goal.targetAmount) * 100}%</b></h2>
                                <div className="h-2 rounded-full w-full bg-zinc-800/50 mt-1">
                                    <div className="rounded-full" style={{ backgroundColor: "green", height: "100%", width: `${(goal.currentAmount / goal.targetAmount) * 100}%` }}></div>
                                </div>
                            </div>
                            <p className="mt-6 text-xs text-gray-400">targetted to finish by <b className="text-blue-400">{timeConverter(goal.targetDate)}</b></p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}