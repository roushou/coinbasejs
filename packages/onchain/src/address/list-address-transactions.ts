import type { RpcClient, RpcRequestConfig } from "../rpc";

type AddressTransaction = {
  name: string;
  hash: string;
  blockHash: string;
  blockHeight: string;
  // TODO: can be narrowed to a union
  status: string;
};

export type ListAddressTransactionsResponse = {
  id: number;
  jsonrpc: string;
  result: {
    addressTransactions: AddressTransaction[];
    nextPageToken?: string;
  };
};

export type ListAddressTransactionsParameters = Extract<
  RpcRequestConfig,
  { method: "cdp_listAddressTransactions" }
>["parameters"];

/**
 * @returns The list of transactions of specified address.
 *
 * @param rpc - RPC Client {@link RpcClient}
 * @param parameters - List of addresses to retrieve the transactions {@link ListAddressTransactionsParameters}
 *
 * @example
 *
 * const rpcClient = createRpcClient({
 *   apiKey: API_KEY,
 *   rpcUrl: "https://api.developer.coinbase.com/rpc/v1/base",
 * });
 *
 * listAddressTransactions(rpcClient, [{
 *   address: 0x0e73fc61bb9d6b7588910c2d14e83bae68222c5d,
 *   pageSize: 1,
 * }]);
 *
 */
export async function listAddressTransactions(
  rpc: RpcClient,
  parameters: ListAddressTransactionsParameters,
): Promise<ListAddressTransactionsResponse> {
  return await rpc.request({
    method: "cdp_listAddressTransactions",
    parameters,
  });
}
