

export const fetchCampaigns = async () => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/campaigns`, {
            method: "GET",
            headers: {"Content-Type" : "application/json"}
        });
        const data = await res.json();
        return data;
    }
    catch(error) {
        console.error(error);
    }
}