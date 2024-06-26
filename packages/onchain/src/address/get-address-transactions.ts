import type { RpcClient, RpcRequestConfig } from "../rpc";

export type GetAddressTransactionsParameters = Extract<
  RpcRequestConfig,
  { method: "cdp_listAddressTransactions" }
>["parameters"];

export type GetAddressTransactionsResponse = Extract<
  RpcRequestConfig,
  { method: "cdp_listAddressTransactions" }
>["response"]["result"];

/**
 * @returns The list of transactions of specified address.
 *
 * @param rpc - RPC Client {@link RpcClient}
 * @param parameters - List of addresses to retrieve the transactions {@link GetAddressTransactionsParameters}
 *
 * @example
 *
 * const rpcClient = createRpcClient({
 *   apiKey: API_KEY,
 *   network: "base",
 * });
 *
 * getAddressTransactions(rpcClient, [{
 *   address: 0x0e73fc61bb9d6b7588910c2d14e83bae68222c5d,
 *   pageSize: 1,
 * }]);
 *
 */
export async function getAddressTransactions(
  rpc: RpcClient,
  parameters: GetAddressTransactionsParameters,
): Promise<GetAddressTransactionsResponse> {
  const response = await rpc.request({
    method: "cdp_listAddressTransactions",
    parameters,
  });
  return response.result;
}
