import type { RpcClient, RpcRequestConfig } from "../rpc";

export type GetBalancesParameters = Extract<
  RpcRequestConfig,
  { method: "cdp_listBalances" }
>["parameters"];

export type GetBalancesResponse = Extract<
  RpcRequestConfig,
  { method: "cdp_listBalances" }
>["response"]["result"];

/**
 * @returns The list of token balances specified in parameters.
 *
 * @param rpc - RPC Client {@link RpcClient}
 * @param parameters - List of assets to retrieve the balances {@link GetBalancesParameters}
 *
 * @example
 *
 * const rpcClient = createRpcClient({
 *   apiKey: API_KEY,
 *   rpcUrl: "https://api.developer.coinbase.com/rpc/v1/base",
 * });
 *
 * getBalances(rpcClient, [{
 *   address: "0x5ff137d4b0fdcd49dca30c7cf57e578a026d2789",
 *   pageSize: 1,
 * }]);
 *
 */
export async function getBalances(
  rpc: RpcClient,
  parameters: GetBalancesParameters,
): Promise<GetBalancesResponse> {
  const response = await rpc.request({
    method: "cdp_listBalances",
    parameters,
  });
  return response.result;
}
