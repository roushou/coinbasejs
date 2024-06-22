import { createClient } from "@coinbase-platform/paymaster";

const apiKey = process.env.API_KEY;
if (!apiKey) throw new Error("API_KEY not found");

const client = createClient({ apiKey });

const response = await client.getSupportedEntrypoints();

console.log(response);
