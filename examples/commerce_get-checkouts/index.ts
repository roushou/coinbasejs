import { getCheckout, getCheckouts } from "@coinbase-platform/commerce";

const apiKey = process.env.API_KEY;
if (!apiKey) throw new Error("API_KEY not found");

// Get a checkout by id
const checkoutId = "a6e9fdd6-877d-4b2d-9d2e-70e810211b52";
const checkout = await getCheckout(checkoutId, apiKey);
console.log(JSON.stringify(checkout, null, 2));

// Get all checkouts
const checkouts = await getCheckouts(apiKey);
console.log(JSON.stringify(checkouts, null, 2));
