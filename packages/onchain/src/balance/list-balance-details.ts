import type { RpcClient, RpcRequestConfig } from "../rpc";

type BalanceDetails = {
  asset: {
    id: string;
    // TODO: Add all token types
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

export type ListBalanceDetailsResponse = {
  id: number;
  jsonrpc: string;
  result: {
    balances: BalanceDetails[];
    nextPageToken?: string;
  };
};

export type ListBalanceDetailsParameters = Extract<
  RpcRequestConfig,
  { method: "cdp_listBalanceDetails" }
>["parameters"];

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
  return await rpc.request({
    method: "cdp_listBalanceDetails",
    parameters,
  });
}
