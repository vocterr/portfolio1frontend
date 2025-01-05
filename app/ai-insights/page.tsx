import { AIInsight } from "@/types";
import { fetchAIInsightsOnServer } from "@/utils/fetchAIIinsightsOnServer";
import { timeConverter } from "@/utils/timeConverter";
import { cookies } from "next/headers";


export default async function AIInsightsPage() {
    const cookieStore = await cookies();
    const token = cookieStore.get('token')?.value;
    const AIInsights: AIInsight[] = await fetchAIInsightsOnServer(token);

    const getRelevanceColor = (relevance: number) => {
        if (relevance > 0.8) return "green";
        if (relevance > 0.6) return "limegreen";
        if (relevance > 0.4) return "orange";
        if (relevance > 0.2) return "darkorange";
        return "red";
    };


    const getRelevanceText = (relevance: number) => {
        if (relevance > 0.8) return "Likely a really good advice";
        if (relevance > 0.6) return "Good advice with some caveats";
        if (relevance > 0.4) return "Possibly useful, but not guaranteed";
        if (relevance > 0.2) return "Less likely to be a good advice";
        return "Unlikely to be good advice";
    };


    return (
        <div className="mt-[104px] h-full w-full flex flex-col">
            {AIInsights.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 3xl:grid-cols-4 gap-10 w-[85%] sm:w-[40%] md:w-[90%] lg:w-[75%] xl:w-[82%] 2xl:w-[70%] 3xl:w-[80%] self-center">
                {AIInsights.map((insight) => (
                    <div className="card">
                        <div className="flex items-center justify-between">
                            <h1 className="max-w-32 line-clamp-1">{`${insight.type[0].toUpperCase()}${insight.type.slice(1).toLowerCase()}`}</h1>
                            <p className="text-gray-400 rounded-lg bg-zinc-800/50 py-1 px-3 text-xs">posted on <b>{timeConverter(insight.createdAt)}</b></p>
                        </div>

                        <div className="flex flex-col mt-6">
                            <p className="text-gray-300">{insight.content}</p>
                            <p className=" mt-6 mb-1 text-gray-400 text-xs">Relevance Score: <b style={{ color: `${getRelevanceColor(insight.relevance)}` }}>{insight.relevance}</b></p>
                            <div className="h-2 rounded-full w-full bg-zinc-800/50">
                                <div
                                    style={{
                                        backgroundColor: getRelevanceColor(insight.relevance),
                                        width: `${(insight.relevance / 1) * 100}%`,
                                        height: "100%",
                                    }}
                                    className="rounded-full"
                                ></div>
                            </div>

                            {/* Relevance Text */}
                            <p className="mt-1 text-xs text-gray-400 ">
                                {getRelevanceText(insight.relevance)}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
            ) : (
                <div></div>
            )}
            
        </div>
    );
}