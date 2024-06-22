import * as http from "@coinbase-platform/utils/http";
import { BASE_URL } from "./constants";

type GetCheckoutResponse = {
  data: Checkout;
  warning: string[];
};

export async function getCheckout(
  id: string,
  apiKey: string,
): Promise<GetCheckoutResponse> {
  return await http.get(`${BASE_URL}/checkouts/${id}`, {
    headers: {
      "X-CC-Api-Key": apiKey,
    },
  });
}

type GetCheckoutsResponse = {
  data: Checkout[];
  warning: string[];
};

export async function getCheckouts(
  apiKey: string,
): Promise<GetCheckoutsResponse> {
  return await http.get(`${BASE_URL}/checkouts`, {
    headers: {
      "X-CC-Api-Key": apiKey,
    },
  });
}

type CheckoutRequestInfo =
  | "name"
  | "email"
  | "address"
  | "phone"
  | "employer"
  | "occupation";

export type CreateCheckoutParameters = {
  name: string;
  description: string;
  local_price: {
    amount: string;
    currency: string;
  };
  logo_url: string;
  pricing_type: CheckoutPricingType;
  requested_info: CheckoutRequestInfo[];
};

export type CreateCheckoutResponse = {
  data: Checkout;
  warnings: string[];
};

export async function createCheckout(
  parameters: CreateCheckoutParameters,
  apiKey: string,
): Promise<CreateCheckoutResponse> {
  return await http.post(`${BASE_URL}/checkouts`, {
    headers: {
      "X-CC-Api-Key": apiKey,
    },
    body: JSON.stringify(parameters),
  });
}

export type CheckoutPricingType = "fixed_price" | "no_price";

export type Checkout = {
  brand_color: string;
  brand_logo_url: string;
  coinbase_managed_merchant: boolean;
  created_at: string;
  description: string;
  id: string;
  local_price: {
    amount: string | null;
    currency: string | null;
  };
  logo_url: string;
  name: string;
  organization_name: string;
  pricing_type: CheckoutPricingType;
  requested_info: CheckoutRequestInfo[];
  resource: string;
  updated_at: string;
};
