# Getting started

## Overview

**coinbasejs** is a TypeScript library that allows you to integrate seamlessly with the [Coinbase Developer Platform](https://docs.cdp.coinbase.com/). It is modular, lightweight and fully typed to provide the best developer experience.

::: warning
**coinbasejs** is under active development so things might change and break between releases.
:::

Given the wide range of products available, **coinbasejs** provides several packages available in this format `@coinbasejs/<package>`. A package is designed to interface solely with a specific product.

Currently the following products are supported:

- [Commerce](https://docs.cdp.coinbase.com/commerce-onchain/docs/welcome/): `@coinbasejs/commerce`
- [Onchain](https://docs.cdp.coinbase.com/onchain-data/docs/welcome/): `@coinbasejs/onchain`
- [paymaster](https://docs.cdp.coinbase.com/node/docs/paymaster-bundler-qs/): `@coinbasejs/paymaster`

## Installation

Choose packages matching products you want to integrate with. For example, if you intend to work with the [Commerce](https://docs.cdp.coinbase.com/commerce-onchain/docs/welcome/) product.

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

The all-in-one package `@coinbasejs/sdk` is provided for convenience if you intend to integrate with many products. This is basically a re-export of all other packages.

:::code-group

```sh [bun]
$ bun add @coinbasejs/sdk
```

```sh [pnpm]
$ pnpm add @coinbasejs/sdk
```

```sh [yarn]
$ yarn add @coinbasejs/sdk
```

```sh [npm]
$ npm install @coinbasejs/sdk
```

:::

## Quick Start

An example to integrate with the [Onchain](https://docs.cdp.coinbase.com/onchain-data/docs/welcome/) product.

### 1. Install the package

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

### 2. Create your client

Create your client by passing it your API key. If needed, you can also pass your `RPC URL`. Otherwise it will default to `https://api.developer.coinbase.com/rpc/v1/base`.

```ts
import { createClient } from "@coinbasejs/onchain";

const client = createClient({ apiKey: "API_KEY" });
```

### 3. Send your request

```ts
import { createClient } from "@coinbasejs/sdk/commerce";

const client = createClient({ apiKey: "API_KEY" });

const response = await client.listBalances([ // [!code focus:8]
  {
    address: "0x5ff137d4b0fdcd49dca30c7cf57e578a026d2789",
    pageSize: 1,
  },
]);
```
