import { createClient } from "@coinbasejs/onchain";

const apiKey = process.env.API_KEY;
if (!apiKey) throw new Error("API_KEY not found");

const client = createClient({ apiKey });

const response = await client.listAddressTransactions([
  {
    address: "0x0e73fc61bb9d6b7588910c2d14e83bae68222c5d",
    pageSize: 2,
  },
]);

console.log(response);
