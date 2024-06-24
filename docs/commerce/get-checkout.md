# getCheckout

Retrieve a checkout by id.

## Usage

```ts
import { createClient } from "@coinbasejs/commerce";

const client = createClient({ apiKey: "API_KEY" });

const checkout = await client.getCheckout("<checkout-id>");
```

## Parameters

### id

- Type: `string`

## Return

- Type: `Promise<Checkout>`

```ts
type Checkout = {
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
```
