# Installation

The Coinbase Developer Platform provides a wide range of products such as onchain data, staking, wallets, trades and more. And what you are building might or might not need to use all those features. To give you flexibility, several packages are provided.

::: warning
**coinbasejs** is under active development so things might change and break between releases.
:::

Packages are designed to interface solely with their specific product and are available in this format `@coinbasejs/<package>`.

For example, if you intend to work with the [Commerce](https://docs.cdp.coinbase.com/commerce-onchain/docs/welcome/) product.

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

Currently coinbasejs supports the following products.

- [Commerce](https://docs.cdp.coinbase.com/commerce-onchain/docs/welcome/): `@coinbasejs/commerce`
- [Onchain](https://docs.cdp.coinbase.com/onchain-data/docs/welcome/): `@coinbasejs/onchain`
- [Paymaster](https://docs.cdp.coinbase.com/node/docs/paymaster-bundler-qs/): `@coinbasejs/paymaster`

The all-in-one package `@coinbasejs/sdk` is available if you intend to use many Coinbase products. This is basically a re-export of all the other packages.

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
