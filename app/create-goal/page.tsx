import { GoalCreatePageOnClient } from "@/components/GoalCreate/GoalCreatePageOnClient";
import { User } from "@/types";
import { fetchUserOnServer } from "@/utils/fetchUserOnServer";
import { cookies } from "next/headers";



export default async function GoalCreatePage() {


    return (
        <GoalCreatePageOnClient/>
    );
}