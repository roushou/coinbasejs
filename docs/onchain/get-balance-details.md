# getBalanceDetails

Retrieve the details of a balance.

## Usage

```ts
import { createClient } from "@coinbasejs/onchain";

const client = createClient({ apiKey: "API_KEY" });

const details = await client.getBalanceDetails([
  {
    address: "1dice6GV5Rz2iaifPvX7RMjfhaNPC8SXH",
    assetId: "6ecc0dcc-10a2-500e-b315-a3b9abae19ce",
    pageSize: 1,
  },
]);
```

## Parameters

### parameters

- Type `GetBalanceDetailsParameters`

```ts
type GetBalanceDetailsParameters = Array<{
  address: string;
  assetId: string;
  pageToken?: string | undefined;
  pageSize?: number | undefined;
}>;
```

## Return

- Type: `Promise<GetBalanceDetailsResponse>`

```ts
type GetBalanceDetailsResponse = {
  balances: RpcBalanceDetails[];
  nextPageToken?: string | undefined;
}

type RpcBalanceDetails = {
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
