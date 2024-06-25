import { createClient } from "@coinbasejs/onchain";

const apiKey = process.env.API_KEY;
if (!apiKey) throw new Error("API_KEY not found");

const client = createClient({ apiKey });

const response = await client.getBalances([
  {
    address: "0x5ff137d4b0fdcd49dca30c7cf57e578a026d2789",
    pageSize: 1,
  },
]);

console.log(response);
