import { GoalEditPageOnClient } from "@/components/GoalEdit/GoalEditPageOnClient";
import { Goal } from "@/types";
import { fetchGoalOnServer } from "@/utils/fetchGoalOnServer";
import { timeConverter } from "@/utils/timeConverter";
import { cookies } from "next/headers";



export default async function GoalEditPage({params}: {params: any}) {
    const cookieStore = await cookies();
    const token = cookieStore.get("token")?.value;
    const awaitedParams = await params;
    const goal: Goal = await fetchGoalOnServer(token, awaitedParams.goalId);
    return (
        <GoalEditPageOnClient initialGoal={goal}/>
    );
}