import { UserPageOnClient } from "@/components/User/UserPageOnClient";
import { User } from "@/types";
import { fetchUserOnServer } from "@/utils/fetchUserOnServer";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";



export default async function UserPage() {
    const cookieStore = await cookies();
    const token = cookieStore.get("token")?.value;
    const user: User = await fetchUserOnServer(token);
    if (!user) {
        redirect("/signup")
    }
    return (
        <UserPageOnClient initialUser={user}/>
    );
}