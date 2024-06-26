# Coinbase Developer Platform SDK

> [!WARNING]
> This library is under active development so things might change and break between releases.

This is a TypeScript SDK for the [Coinbase Developer Platform](https://docs.cdp.coinbase.com/).

## Features:

- Build Onchain
    - Node RPC [ ]
    - Onchain Data [✔️]
    - Paymaster [ ]
    - Mesh [ ]
    - Faucet
- Payments
    - Commerce [ ]
    - Onramp [ ]
- Wallets
    - Smart Wallet [ ]
    - Coinbase Wallet [ ]
    - Embedded Wallet [ ]
- Trade []

## Overview

```ts
// 1. Import modules
import { createClient, createRpcClient } from "@coinbasejs/onchain";

// 2. Create an RPC client
const rpcClient = createRpcClient({
  apiKey: "API_KEY",
  network: "base",
});

// 3. Send request
const response = await rpcClient.request({
  method: "cdp_listBalances",
  parameters: [
    {
      address: "0x5ff137d4b0fdcd49dca30c7cf57e578a026d2789",
      pageSize: 1,
    },
  ],
});

// For convenience, you can also create a higher-level client
const client = createClient({
  apiKey: "API_KEY",
  network: "base",
});

// Send request
const balances = await client.getBalances([{
  address: "0x5ff137d4b0fdcd49dca30c7cf57e578a026d2789",
  pageSize: 1,
}]);
```

## Documentation

Read the [documentation](https://coinbasejs.com/) to learn more about coinbasejs.

## License

[MIT](./LICENSE) License
