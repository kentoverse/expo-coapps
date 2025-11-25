import crypto from "crypto";
import { Buffer } from "buffer";

const BASE_URL = "https://api.thenounproject.com/v2";
const KEY = process.env.NOUN_KEY!;
const SECRET = process.env.NOUN_SECRET!;

export async function updateBlacklist({
    ids,
    type = "icon",
    overwrite = false,
}: {
    ids: number[];
    type?: "icon" | "collection";
    overwrite?: boolean;
}) {
    const url = `${BASE_URL}/blacklist?type=${type}`;
    const method = "POST";
    const body = JSON.stringify({
        blacklist: ids,
        overwrite,
    });

    // ----- OAuth 1.0 signature -----
    const timestamp = Math.floor(Date.now() / 1000);
    const nonce = crypto.randomBytes(16).toString("hex");

    const params = {
        oauth_consumer_key: KEY,
        oauth_signature_method: "HMAC-SHA1",
        oauth_timestamp: timestamp.toString(),
        oauth_nonce: nonce,
        oauth_version: "1.0",
    };

    const signatureBaseString =
        method +
        "&" +
        encodeURIComponent(url) +
        "&" +
        encodeURIComponent(
            Object.keys(params)
                .sort()
                .map((k) => `${k}=${params[k]}`)
                .join("&")
        );

    const signingKey = `${SECRET}&`;
    const signature = crypto
        .createHmac("sha1", signingKey)
        .update(signatureBaseString)
        .digest("base64");

    const authHeader =
        `OAuth oauth_consumer_key="${KEY}", ` +
        `oauth_signature_method="HMAC-SHA1", ` +
        `oauth_timestamp="${timestamp}", ` +
        `oauth_nonce="${nonce}", ` +
        `oauth_version="1.0", ` +
        `oauth_signature="${encodeURIComponent(signature)}"`;

    // ----- Fetch -----
    const response = await fetch(url, {
        method,
        headers: {
            Authorization: authHeader,
            "Content-Type": "application/json",
        },
        body,
    });

    if (!response.ok) {
        const err = await response.text();
        throw new Error(err);
    }

    return response.json();
}