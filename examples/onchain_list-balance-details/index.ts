import { createClient } from "@coinbasejs/onchain";

const apiKey = process.env.API_KEY;
if (!apiKey) throw new Error("API_KEY not found");

const client = createClient({ apiKey });

const response = await client.listBalanceDetails([
  {
    address: "1dice6GV5Rz2iaifPvX7RMjfhaNPC8SXH",
    assetId: "6ecc0dcc-10a2-500e-b315-a3b9abae19ce",
    pageSize: 1,
  },
]);

console.log(response);
