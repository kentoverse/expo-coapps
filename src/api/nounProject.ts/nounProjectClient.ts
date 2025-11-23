const API_BASE = process.env.EXPO_PUBLIC_API_BASE_URL || "http://localhost:3100";

export async function getIconFromProxy(iconId: number) {
  const res = await fetch(`${API_BASE}/api/icon/${iconId}`);
  if (!res.ok) throw new Error(`Icon proxy failed ${res.status}`);
  return res.json();
}

export async function updateBlacklistProxy(ids: number[], type = "icon", overwrite = false) {
  const res = await fetch(`${API_BASE}/api/blacklist`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ ids, type, overwrite }),
  });
  if (!res.ok) throw new Error(`Blacklist proxy failed ${res.status}`);
  return res.json();
}