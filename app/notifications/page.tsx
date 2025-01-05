import { Notification } from "@/types";
import { fetchNotificationsOnServer } from "@/utils/fetchNotificationsOnServer";
import { timeConverter } from "@/utils/timeConverter";
import { cookies } from "next/headers";



export default async function NotificationsPage() {
    const cookieStore = await cookies();
    const token = cookieStore.get("token")?.value;
    const notifications: Notification[] = await fetchNotificationsOnServer(token);
    return (
        <div className="mt-[104px] h-full w-full flex flex-col">
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 3xl:grid-cols-4 gap-10 self-center w-[85%] sm:w-[50%] md:w-[40%] lg:w-[60%] xl:w-[80%] 2xl:w-[65%] 3xl:w-[75%]">
                {notifications.map((notification) => (
                    <div className="card">
                        <div className="flex items-start justify-between">
                            <div>
                                <h1 className={`${notification.type == "ALERT" ? "text-red-400" : notification.type == "REMINDER" ? "text-amber-400" : "text-green-400"}`}>{notification.type}</h1>
                                <button className="viewButton">
                                    Mark as Read
                                </button>
                            </div>
                            
                            <p className="text-gray-400 text-xs rounded-lg py-1 px-3 bg-zinc-800/50">sent on <b className="text-blue-400">{timeConverter(notification.createdAt)}</b></p>
                        </div>

                        <p className="mt-6 text-gray-300">{notification.message}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}