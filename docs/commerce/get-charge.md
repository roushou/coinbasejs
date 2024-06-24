# getCharge

Retrieve a charge by id.

## Usage

```ts
import { createClient } from "@coinbasejs/commerce";

const client = createClient({ apiKey: "API_KEY" });

const charge = await client.getCharge("<charge-id>");
```

## Parameters

### id

- Type: `string`

## Return

- Type: `Promise<Charge>`

```ts
type Charge = {
  brand_color: string;
  brand_logo_url: string;
  charge_kind: "WEB3";
  checkout: {
    id: string;
  };
  code: string;
  collected_email: boolean;
  confirmed_at: string;
  created_at: string;
  description: string;
  expires_at: string;
  hosted_url: string;
  id: string;
  name: string;
  organization_name: string;
  payments: string[];
  pricing: {
    local: {
      amount: string;
      currency: string;
    };
    settlement: {
      amount: string;
      currency: string;
    };
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
  timeline: {
    status: "COMPLETED" | "EXPIRED" | "FAILED" | "NEW" | "PENDING" | "SIGNED";
    time: string;
  };
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
```
