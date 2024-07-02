import * as http from "@coinbasejs/utils/http";
import { BASE_URL } from "./constants";

export type GetChargeResponse = {
  data: Charge;
  warnings: string[];
};

export async function getCharge(
  id: string,
  apiKey: string,
): Promise<GetChargeResponse> {
  return await http.get(`${BASE_URL}/charges/${id}`, {
    headers: {
      "X-CC-Api-Key": apiKey,
    },
  });
}

export type GetChargesResponse = {
  data: Charge[];
  warnings: string[];
};

export async function getCharges(apiKey: string): Promise<GetChargesResponse> {
  return await http.get(`${BASE_URL}/charges`, {
    headers: {
      "X-CC-Api-Key": apiKey,
    },
  });
}

export type ChargePricing = {
  amount: string;
  currency: string;
};

export type CreateChargeParameters = {
  name: string;
  description: string;
  pricing_type: ChargePricingType;
  local_price: ChargePricing;
};

export type CreateChargeResponse = {
  data: Charge;
  warnings: string[];
};

export async function createCharge(
  parameters: CreateChargeParameters,
  apiKey: string,
): Promise<CreateChargeResponse> {
  return await http.post(`${BASE_URL}/charges`, {
    headers: {
      "X-CC-Api-Key": apiKey,
    },
    body: JSON.stringify(parameters),
  });
}

export type ChargePricingType = "fixed_price" | "no_price";

export type Charge = {
  brand_color: string;
  brand_logo_url: string;
  charge_kind: "WEB3";
  code: string;
  collected_email: boolean;
  created_at: string;
  description: string;
  expires_at: string;
  hosted_url: string;
  id: string;
  // TODO: add type
  // metadata: any;
  name: string;
  organization_name: string;
  // TODO: check type
  payments: string[];
  pricing: {
    local: ChargePricing;
    settlement: ChargePricing;
  };
  pricing_type: ChargePricingType;
  pwcb_only: boolean;
  redirects: {
    cancel_url: string;
    success_url: string;
    will_redirect_after_success: boolean;
  };
  support_email: string;
  third_party_provider: string;
  timeline: Array<{
    status: "COMPLETED" | "EXPIRED" | "FAILED" | "NEW" | "PENDING" | "SIGNED";
    time: string;
  }>;
  web3_data: {
    contract_caller_request_id: string;
    failure_events: Array<{
      input_token_address: string;
      network_fee_paid: string;
      reason: string;
      sender: string;
      timestamp: string;
      tx_hash: string;
    }>;
    settlement_currency_addresses: Record<string, string>;
    subsidized_payments_chain_to_tokens: Record<
      string,
      { tokenAddresses: string[] }
    >;
    success_events: Array<{
      finalized: boolean;
      input_token_address: string;
      input_token_amount: string;
      network_fee_paid: string;
      recipient: string;
      sender: string;
      timestamp: string;
      tx_hash: string;
    }>;
    transfer_intent: {
      call_data: {
        deadline: string;
        fee_amount: string;
        id: string;
        operator: string;
        prefix: string;
        recipient: string;
        recipient_amount: string;
        recipient_currency: string;
        refund_destination: string;
        signature: string;
      };
      metadata: {
        chain_id: number;
        contract_address: string;
        sender: string;
      };
      contract_address: string;
      contract_addresses: Record<string, string>;
    } | null;
  };
  web3_retail_payment_metadata: {
    quote_id: string;
    source_amount: {
      amount: string | null;
      currency: string | null;
    };
    exchange_rate_with_spread: {
      amount: string | null;
      currency: string | null;
    };
    exchange_rate_without_spread: {
      amount: string | null;
      currency: string | null;
    };
    max_retail_payment_value_usd: number;
    fees: string[];
  };
  web3_retail_payments_enabled: boolean;
};
