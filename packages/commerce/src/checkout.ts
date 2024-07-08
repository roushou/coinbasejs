import * as http from "@coinbasejs/utils/http";
import type { RequestConfig } from "./client";
import { BASE_URL } from "./constants";

type GetCheckoutResponse = {
  data: Checkout;
  warning: string[];
};

export async function getCheckout(
  id: string,
  config: RequestConfig,
): Promise<GetCheckoutResponse> {
  const baseUrl = config.baseUrl ?? BASE_URL;
  return await http.get(`${baseUrl}/checkouts/${id}`, {
    headers: {
      "X-CC-Api-Key": config.apiKey,
    },
  });
}

type GetCheckoutsResponse = {
  data: Checkout[];
  warning: string[];
};

export async function getCheckouts(
  config: RequestConfig,
): Promise<GetCheckoutsResponse> {
  const baseUrl = config.baseUrl ?? BASE_URL;
  return await http.get(`${baseUrl}/checkouts`, {
    headers: {
      "X-CC-Api-Key": config.apiKey,
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
  config: RequestConfig,
): Promise<CreateCheckoutResponse> {
  const baseUrl = config.baseUrl ?? BASE_URL;
  return await http.post(`${baseUrl}/checkouts`, {
    headers: {
      "X-CC-Api-Key": config.apiKey,
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
