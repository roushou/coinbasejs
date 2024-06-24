# Commerce Client

The Commerce client interfaces with the Coinbase [Commerce](https://docs.cdp.coinbase.com/commerce-onchain/docs/welcome/) API that allows you to accept cryptocurrencies for your services and your customers to pay with their computer and mobile devices.

## Installation

:::code-group

```sh [bun]
$ bun add @coinbasejs/commerce
```

```sh [pnpm]
$ pnpm add @coinbasejs/commerce
```

```sh [yarn]
$ yarn add @coinbasejs/commerce
```

```sh [npm]
$ npm install @coinbasejs/commerce
```

:::

## Usage

```ts
import { createClient } from "@coinbasejs/commerce";

const client = createClient({ apiKey: "API_KEY" });
```

## Parameters

- config: `ClientConfig`

```ts
export type ClientConfig = {
  apiKey: string;
  baseUrl?: string;
};
```

## Return

- client: `Client`

```ts
type Client = {
  __url: string;
  createCharge: (parameters: CreateChargeParameters) => Promise<Charge>;
  createCheckout: (parameters: CreateCheckoutParameters) => Promise<Checkout>;
  getCharge: (id: string) => Promise<Charge>;
  getCharges: () => Promise<Charge[]>;
  getCheckout: (id: string) => Promise<Checkout>;
  getCheckouts: () => Promise<Checkout[]>;
  getEvent: (id: string) => Promise<Event>;
  getEvents: () => Promise<Event[]>;
};
```
