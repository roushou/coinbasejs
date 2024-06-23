import {
  type CreateCheckoutParameters,
  createCheckout,
} from "@coinbasejs/commerce";

const apiKey = process.env.API_KEY;
if (!apiKey) throw new Error("API_KEY not found");

const parameters: CreateCheckoutParameters = {
  name: "Nvidia RTX 4080",
  description: "Graphic Card",
  pricing_type: "fixed_price",
  local_price: {
    amount: "1000.00",
    currency: "USD",
  },
  logo_url: "",
  requested_info: [],
};

const response = await createCheckout(parameters, apiKey);

console.log(JSON.stringify(response, null, 2));
