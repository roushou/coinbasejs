# getAddressTransactions

Retrieve the transaction list of an address.

## Usage

```ts
import { createClient } from "@coinbasejs/onchain";

const client = createClient({ apiKey: "API_KEY" });

const transactions = await client.getAddressTransactions([
  {
    address: "0x0e73fc61bb9d6b7588910c2d14e83bae68222c5d",
    pageSize: 2,
  },
]);
```

## Parameters

### parameters

- Type `GetAddressTransactionsParameters`

```ts
type GetAddressTransactionsParameters = Array<{
  address: string;
  pageToken?: string | undefined;
  pageSize?: number | undefined;
}>;
```

## Return

- Type: `Promise<GetAddressTransactionsResponse>`

```ts
type GetAddressTransactionsResponse = {
  addressTransactions: RpcAddressTransaction[];
  nextPageToken?: string | undefined;
}

type RpcAddressTransaction = {
  name: string;
  hash: string;
  blockHash: string;
  blockHeight: string;
  status: string;
  ethereum: RpcTransaction;
};
```
