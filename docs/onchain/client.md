# Onchain Client

The Onchain client interfaces with the Coinbase [Onchain](https://docs.cdp.coinbase.com/onchain-data/docs/welcome/) API that allows you to retrieve onchain data.

## Installation

:::code-group

```sh [bun]
$ bun add @coinbasejs/onchain
```

```sh [pnpm]
$ pnpm add @coinbasejs/onchain
```

```sh [yarn]
$ yarn add @coinbasejs/onchain
```

```sh [npm]
$ npm install @coinbasejs/onchain
```

:::

## Usage

You can use your own RPC by passing its url in `createClient`. Otherwise it defaults to the RPC provided by Coinbase `https://api.developer.coinbase.com/rpc/v1`.

```ts
import { createClient } from "@coinbasejs/onchain";

const client = createClient({
  apiKey: "API_KEY",
  network: "base",
  rpcUrl: "https://your.rpc.com",
});
```

## Parameters

- config: `ClientConfig`

```ts
export type ClientConfig = {
  apiKey: string;
  network: "base" | "base-sepolia";
  rpcUrl?: string;
};
```

## Return

- client: `Client`

```ts
type Client = {
  getAddressTransactions: (
    parameters: GetAddressTransactionsParameters,
  ) => Promise<GetAddressTransactionsResponse>;
  getBalanceDetails: (
    parameters: GetBalanceDetailsParameters,
  ) => Promise<GetBalanceDetailsResponse>;
  getBalanceHistories: (
    parameters: GetBalanceHistoriesParameters,
  ) => Promise<GetBalanceHistoriesResponse>;
  getBalances: (
    parameters: GetBalancesParameters,
  ) => Promise<GetBalancesResponse>;
};
```
