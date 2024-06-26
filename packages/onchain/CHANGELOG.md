# @coinbase-platform/onchain

## 0.2.0

### Minor Changes

- 60a6005: feat: allow to pass network to clients

## 0.1.1

### Patch Changes

- 0cb7fca: refactor!(onchain): use `get` prefix instead of `list`

## 0.1.0

### Minor Changes

- e364617: feat: create Coinbase Developer Platform packages

  - Onchain
  - Paymaster
  - Commerce

## 0.1.5

### Patch Changes

- 545f1e2: fix: add missing transaction type in RPC response type
- 1a178d4: fix: normalize RPC parameters
- aed9a3a: chore: export `RpcTransaction` type
- 825e1ee: chore: rename `BaseRpcResponse` to `RpcResponse`

## 0.1.4

### Patch Changes

- 556e5e6: chore: add JSDoc annotations

## 0.1.3

### Patch Changes

- c0acab0: fix: export rpc types

## 0.1.2

### Patch Changes

- c2e80d3: fix: make rpc client correctly infer response type
- 36fde94: fix: change `listBalanceHistories` return type

## 0.1.1

### Patch Changes

- 66318c2: fix: correctly export bundle

## 0.1.0

### Minor Changes

- 6faca89: feat: integrate Coinbase Onchain Data API

  - add RPC client
  - add `listAddressTransactions`
  - add `listBalanceDetails`
  - add `listBalanceHistories`
  - add `listBalances`
