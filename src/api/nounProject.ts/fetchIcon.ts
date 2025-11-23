import { BASE_URL, getAuthHeader } from "./nounProjectClient";

export async function fetchIcon(iconId: number | string) {
    const response = await fetch(`${BASE_URL}/icon/${iconId}`, {
        headers: {
            Authorization: getAuthHeader(),
            "Content-Type": "application/json",
        },
    });

    if (!response.ok) {
        throw new Error(`Icon fetch failed: ${response.status}`);
    }

    return response.json();
}