import type { RpcClient, RpcRequestConfig } from "../rpc";

export type ListBalanceDetailsParameters = Extract<
  RpcRequestConfig,
  { method: "cdp_listBalanceDetails" }
>["parameters"];

export type ListBalanceDetailsResponse = Extract<
  RpcRequestConfig,
  { method: "cdp_listBalanceDetails" }
>["response"]["result"];

/**
 * @returns The list of balance details of assets specified in parameters.
 *
 * @param rpc - RPC Client {@link RpcClient}
 * @param parameters - List of assets to retrieve the balance details {@link ListBalanceDetailsParameters}
 *
 * @example
 *
 * const rpcClient = createRpcClient({
 *   apiKey: API_KEY,
 *   rpcUrl: "https://api.developer.coinbase.com/rpc/v1/base",
 * });
 *
 * listBalanceDetails(rpcClient, [{
 *   address: "0x5ff137d4b0fdcd49dca30c7cf57e578a026d2789",
 *   assetId: "6ecc0dcc-10a2-500e-b315-a3b9abae19ce",
 *   pageSize: 1,
 * }]);
 *
 */
export async function listBalanceDetails(
  rpc: RpcClient,
  parameters: ListBalanceDetailsParameters,
): Promise<ListBalanceDetailsResponse> {
  const response = await rpc.request({
    method: "cdp_listBalanceDetails",
    parameters,
  });
  return response.result;
}
