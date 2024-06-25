import type { RpcClient, RpcRequestConfig } from "../rpc";

export type GetBalanceHistoriesParameters = Extract<
  RpcRequestConfig,
  { method: "cdp_listBalanceHistories" }
>["parameters"];

export type GetBalanceHistoriesResponse = Extract<
  RpcRequestConfig,
  { method: "cdp_listBalanceHistories" }
>["response"]["result"];

/**
 * @returns The list of balance histories of assets specified in parameters.
 *
 * @param rpc - RPC Client {@link RpcClient}
 * @param parameters - List of assets to retrieve the balance details {@link GetBalanceHistoriesParameters}
 *
 * @example
 *
 * const rpcClient = createRpcClient({
 *   apiKey: API_KEY,
 *   rpcUrl: "https://api.developer.coinbase.com/rpc/v1/base",
 * });
 *
 * getBalanceHistories(rpcClient, [{
 *   address: "0x5ff137d4b0fdcd49dca30c7cf57e578a026d2789",
 *   assetId: "6ecc0dcc-10a2-500e-b315-a3b9abae19ce",
 *   pageSize: 1,
 * }]);
 *
 */
export async function getBalancehistories(
  rpc: RpcClient,
  parameters: GetBalanceHistoriesParameters,
): Promise<GetBalanceHistoriesResponse> {
  const response = await rpc.request({
    method: "cdp_listBalanceHistories",
    parameters,
  });
  return response.result;
}
