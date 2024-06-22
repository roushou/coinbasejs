import { createClient } from "@coinbase-platform/paymaster";

const apiKey = process.env.API_KEY;
if (!apiKey) throw new Error("API_KEY not found");

const client = createClient({ apiKey });

const response = await client.getUserOperationByHash([
  "0x77c0b560eb0b042902abc5613f768d2a6b2d67481247e9663bf4d68dec0ca122",
]);

console.log(response);
