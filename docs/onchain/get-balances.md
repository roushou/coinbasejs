# getBalances

Retrieve a list of balance.

## Usage

```ts
import { createClient } from "@coinbasejs/onchain";

const client = createClient({ apiKey: "API_KEY" });

const balances = await client.getBalances([
  {
    address: "0x5ff137d4b0fdcd49dca30c7cf57e578a026d2789",
    pageSize: 1,
  },
]);
```

## Parameters

### parameters

- Type `GetBalancesParameters`

```ts
type GetBalancesParameters = Array<{
  address: string;
  pageToken?: string;
  pageSize?: number;
}>;
```

## Return

- Type: `Promise<GetBalancesResponse>`

```ts
type GetBalancesResponse = {
  balances: RpcBalance[];
  nextPageToken: string
};

type RpcBalance = {
  asset: {
    id: string;
    type:
      | "native"
      | "erc20"
      | "erc721"
      | "erc1155"
      | "creditAlphanum4"
      | "fa2"
      | (string & {});
    groupId: string;
    subGroupId: string;
  };
  value: number;
};
```
