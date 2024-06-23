import { getCharge, getCharges } from "@coinbasejs/commerce";

const apiKey = process.env.API_KEY;
if (!apiKey) throw new Error("API_KEY not found");

// Get a charge by id
const chargeId = "fb86d331-1db8-44f2-a96c-235d2a855ad3";
const charge = await getCharge(chargeId, apiKey);
console.log(JSON.stringify(charge, null, 2));

// Get all charges
const charges = await getCharges(apiKey);
console.log(JSON.stringify(charges, null, 2));
