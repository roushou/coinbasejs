import type { RpcClient, RpcRequestConfig } from "../rpc";

type BalanceHistory = {
  blockHeight: number;
  blockHash: string;
  value: number;
};

export type ListBalanceHistoriesResponse = {
  id: number;
  jsonrpc: string;
  result: {
    balanceHistories: BalanceHistory[];
    nextPageToken?: string;
  };
};

export type ListBalanceHistoriesParameters = Extract<
  RpcRequestConfig,
  { method: "cdp_listBalanceHistories" }
>["parameters"];

/**
 * @returns The list of balance histories of assets specified in parameters.
 *
 * @param rpc - RPC Client {@link RpcClient}
 * @param parameters - List of assets to retrieve the balance details {@link ListBalanceHistoriesParameters}
 *
 * @example
 *
 * const rpcClient = createRpcClient({
 *   apiKey: API_KEY,
 *   rpcUrl: "https://api.developer.coinbase.com/rpc/v1/base",
 * });
 *
 * listBalanceHistories(rpcClient, [{
 *   address: "0x5ff137d4b0fdcd49dca30c7cf57e578a026d2789",
 *   assetId: "6ecc0dcc-10a2-500e-b315-a3b9abae19ce",
 *   pageSize: 1,
 * }]);
 *
 */
export async function listBalanceHistories(
  rpc: RpcClient,
  parameters: ListBalanceHistoriesParameters,
): Promise<ListBalanceHistoriesResponse> {
  return await rpc.request({
    method: "cdp_listBalanceHistories",
    parameters,
  });
}
