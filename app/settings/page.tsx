import { SettingsPageOnClient } from "@/components/SettingsPage/SettingsPageOnClient";
import { Settings } from "@/types";
import { fetchSettingsOnServer } from "@/utils/fetchSettingsOnServer";
import { initiateSettings } from "@/utils/initiateSettings";
import { cookies } from "next/headers";




export default async function SettingsPage() {
    const cookieStore = await cookies();
    const token = cookieStore.get("token")?.value;
    const settings: Settings = await fetchSettingsOnServer(token);
    if (!settings) {
        await initiateSettings(token);
    }
    return (
        <SettingsPageOnClient initialSettings={settings}/>
    );
}