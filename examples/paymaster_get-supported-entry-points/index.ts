import { createClient } from "@coinbasejs/paymaster";

const apiKey = process.env.API_KEY;
if (!apiKey) throw new Error("API_KEY not found");

const client = createClient({
  apiKey,
  network: "base-sepolia",
});

const response = await client.getSupportedEntrypoints();

console.log(response);
