import { AccountOverviewCard } from "@/components/Dashboard/AccountOverviewCard/AccountOverviewCard";
import { BudgetOverviewCard } from "@/components/Dashboard/BudgetOverviewCard/BudgetOverviewCard";
import { FinancialGoalsOverviewCard } from "@/components/Dashboard/FinancialGoalsOverviewCard/FinancialGoalsOverviewCard";
import { MainOverviewCard } from "@/components/Dashboard/MainOverviewCard/MainOverviewCard";
import { TransactionOverviewCard } from "@/components/Dashboard/TransactionOverviewCard/TransactionOverviewCard";
import { Account, AIInsight, AuditLog, Budget, Goal, Notification, Transaction, User } from "@/types";
import { fetchAccountsOnServer } from "@/utils/Dashboard/fetchAccountsOnServer";
import { fetchRecentGoalsOnServer } from "@/utils/Dashboard/fetchRecentGoalsOnServer";
import { fetchMonthlyBudgetsOnServer } from "@/utils/Dashboard/fetchMonthlyBudgetsOnServer";
import { fetchTransactionOnServer } from "@/utils/Dashboard/fetchTransactionsOnServer";
import { fetchUserOnServer } from "@/utils/fetchUserOnServer";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { fetchRecentAIInsightsOnServer } from "@/utils/Dashboard/fetchRecentAIInsightsOnServer";
import { AIInsightsOverviewCard } from "@/components/Dashboard/AIInsightsOverviewCard/AIInsightsOverviewCard";
import { NotificationsOverviewCard } from "@/components/Dashboard/NotificationsOverviewCard/NotificationsOverviewCard";
import { fetchRecentNotificationsOnServer } from "@/utils/Dashboard/fetchRecentNotificationsOnServer";
import { AuditLogsOverviewCard } from "@/components/Dashboard/AuditLogsOverviewCard/AuditLogsOverviewCard";
import { fetchRecentAuditLogsOnServer } from "@/utils/Dashboard/fetchRecentAuditLogsOnServer";
import React, { Suspense } from "react";
import { ChartsSkeletons } from "@/components/Skeletons/ChartsSkeletons";

const Charts = React.lazy(() =>
    import("@/components/Dashboard/PerformanceMetricsCard/PerformanceMetricsCard")
  );
  
  // Use it with <Suspense> in your component
  
export default async function DashboardPage() {
    const cookieStore = await cookies();
    const token = cookieStore.get("token")?.value;
    const user: User | null = await fetchUserOnServer(token) || null;
    if (!user) {
        redirect("/signup");
    }
    const [accounts, transactions, monthlyBudgets, recentGoals, recentAIInsights, recentNotifications, recentAuditLogs] =
        await Promise.all([
            fetchAccountsOnServer(token),
            fetchTransactionOnServer(token),
            fetchMonthlyBudgetsOnServer(token),
            fetchRecentGoalsOnServer(token),
            fetchRecentAIInsightsOnServer(token),
            fetchRecentNotificationsOnServer(token),
            fetchRecentAuditLogsOnServer(token),
        ]);

    const total = accounts.length > 0 ? accounts.filter((account: Account) => typeof account.balance === "number")
    .map((account: Account) => account.balance)
    .reduce((acc: any, balance: any) => acc + balance, 0)  : 0;
  



    return (
        <div className="flex flex-col mt-[104px] w-full">
            <div className="grid grid-cols-1 w-[85%] sm:w-[50%] md:w-[40%] lg:w-[70%] xl:w-[60%] 2xl:w-[55%] 3xl:w-[45%] self-center lg:grid-cols-2 lg:grid-rows-2 gap-10 rounded-lg">
                <MainOverviewCard accounts={accounts} total={total} user={user} />
                <AccountOverviewCard account={accounts[0]} />
                <TransactionOverviewCard transaction={transactions[0]} />

            </div>
            
            
            <div className="grid grid-cols-1 lg:grid-cols-3 w-[85%] sm:w-[50%] md:w-[40%] lg:w-[90%] xl:w-[80%] 2xl:w-[70%] 3xl:w-[60%] self-center mt-10 gap-10">

                <AIInsightsOverviewCard AIInsights={recentAIInsights} />
                <NotificationsOverviewCard notifications={recentNotifications} />
                <AuditLogsOverviewCard auditLogs={recentAuditLogs} />

            </div>
            
            <div className="mt-10 grid grid-cols-1 w-[85%] sm:w-[50%] md:w-[40%] lg:w-[70%] xl:w-[60%] 2xl:w-[55%] 3xl:w-[45%] self-center lg:grid-cols-2 lg:grid-rows-2 gap-10 rounded-lg">
                <Suspense fallback={<ChartsSkeletons/>}>
                    <Charts transactions={transactions} accounts={accounts} />
                </Suspense>
                
                <BudgetOverviewCard budget={monthlyBudgets[0]} />
                <FinancialGoalsOverviewCard goals={recentGoals} />
            </div>
            
            

            

        </div>
    );
}
