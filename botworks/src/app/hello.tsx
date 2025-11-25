import { encode as base64 } from "base-64";
import { useEffect } from "react";
import { useUIStore } from '../store/useUIStore';
import { TextInput } from 'react-native'
import { useMCPStore } from '../store/useMCPStore';


async function testNounProject() {
    const key = process.env.EXPO_PUBLIC_NOUN_KEY!;
    const secret = process.env.EXPO_PUBLIC_NOUN_SECRET!;

    // OAuth 1 header (simple HMAC-SHA1 signing)
    const credentials = base64(`${key}:${secret}`);

    const res = await fetch("https://api.thenounproject.com/v2/icon/1", {
        headers: {
            Authorization: `Basic ${credentials}`,
            "Content-Type": "application/json",
        },
    });

    const data = await res.json();
    console.log("ICON:", data);
}

async function testSearch() {
    const key = process.env.EXPO_PUBLIC_NOUN_KEY!;
    const secret = process.env.EXPO_PUBLIC_NOUN_SECRET!;
    const credentials = base64(`${key}:${secret}`);

    const query = "dog";

    const res = await fetch(`https://api.thenounproject.com/v2/search/icons?query=${query}`, {
        headers: {
            Authorization: `Basic ${credentials}`,
        },
    });

    const out = await res.json();
    console.log("RESULTS:", out.icons?.length, out);
}


// example usage

const searchTerm = useUIStore((s) => s.searchTerm);
const setSearchTerm = useUIStore((s) => s.setSearchTerm);

<TextInput
    value={searchTerm}
    onChangeText={setSearchTerm}
/>



export const Dashboard = () => {
    const { data, loading, error, fetchData } = useMCPStore();

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div>
            <h1>MCP Data</h1>
            <ul>
                {data.map((item: any) => (
                    <li key={item.id}>{item.name}</li>
                ))}
            </ul>
        </div>
    );
};