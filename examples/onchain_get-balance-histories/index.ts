import { createClient } from "@coinbasejs/onchain";

const apiKey = process.env.API_KEY;
if (!apiKey) throw new Error("API_KEY not found");

const client = createClient({ apiKey });

const response = await client.getBalanceHistories([
  {
    address: "0x0e73fc61bb9d6b7588910c2d14e83bae68222c5d",
    assetId: "123d82ca-b3f4-527c-ace7-559d5791a564",
  },
]);

console.log(response);
