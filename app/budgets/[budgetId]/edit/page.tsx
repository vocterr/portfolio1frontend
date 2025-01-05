import { BudgetEditPageOnClient } from "@/components/BudgetEdit/BudgetEditPageOnClient";
import { Budget } from "@/types";
import { fetchBudgetOnServer } from "@/utils/fetchBudgetOnServer";
import { timeConverter } from "@/utils/timeConverter";
import { cookies } from "next/headers";



export default async function BudgetEditPage({params}: {params: any}) {
    const cookieStore = await cookies();
    const awaitedParams = await params;
    const token = cookieStore.get("token")?.value;
    const budget: Budget = await fetchBudgetOnServer(token, awaitedParams.budgetId);
    return (
        <BudgetEditPageOnClient initialBudget={budget}/>
    );
}