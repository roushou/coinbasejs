# Paymaster Client

The Paymaster client interfaces with the Coinbase [Paymaster](https://docs.cdp.coinbase.com/node/docs/paymaster-bundler-qs/) API that allows you to sponsor your users transactions.

## Installation

:::code-group

```sh [bun]
$ bun add @coinbasejs/paymaster
```

```sh [pnpm]
$ pnpm add @coinbasejs/paymaster
```

```sh [yarn]
$ yarn add @coinbasejs/paymaster
```

```sh [npm]
$ npm install @coinbasejs/paymaster
```

:::

## Usage

You can use your own RPC by passing its url in `createClient`. Otherwise it defaults to the RPC provided by Coinbase `https://api.developer.coinbase.com/rpc/v1/base`.

```ts
import { createClient } from "@coinbasejs/paymaster";

const client = createClient({
  apiKey: "API_KEY",
  rpcUrl: "https://your.rpc.com",
});
```

## Parameters

- config: `ClientConfig`

```ts
export type ClientConfig = {
  apiKey: string;
  rpcUrl?: string;
};
```

## Return

- client: `Client`

```ts
type Client = {
  estimateUserOperationGas: (
    parameters: EstimateUserOperationGasParameters,
  ) => Promise<EstimateUserOperationGasResponse>;
  getSupportedEntrypoints: () => Promise<GetSupportedEntrypointsResponse>;
  getUserOperationByHash: (
    parameters: GetUserOperationByHashParameters,
  ) => Promise<GetUserOperationByHashResponse>;
  getUserOperationReceipt: (
    parameters: GetUserOperationReceiptParameters,
  ) => Promise<GetUserOperationReceiptResponse>;
  sendUserOperation: (
    parameters: SendUserOperationParameters,
  ) => Promise<SendUserOperationResponse>;
  sponsorUserOperation: (
    parameters: SponsorUserOperationParameters,
  ) => Promise<SponsorUserOperationResponse>;
};
```
