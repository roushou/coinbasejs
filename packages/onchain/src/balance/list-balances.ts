import type { RpcClient, RpcRequestConfig } from "../rpc";

type Balance = {
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

export type ListBalancesResponse = {
  id: number;
  jsonrpc: string;
  result: {
    balances: Balance[];
    nextPageToken?: string;
  };
};

export type ListBalancesParameters = Extract<
  RpcRequestConfig,
  { method: "cdp_listBalances" }
>["parameters"];

/**
 * @returns The list of token balances specified in parameters.
 *
 * @param rpc - RPC Client {@link RpcClient}
 * @param parameters - List of assets to retrieve the balances {@link ListBalancesParameters}
 *
 * @example
 *
 * const rpcClient = createRpcClient({
 *   apiKey: API_KEY,
 *   rpcUrl: "https://api.developer.coinbase.com/rpc/v1/base",
 * });
 *
 * listBalances(rpcClient, [{
 *   address: "0x5ff137d4b0fdcd49dca30c7cf57e578a026d2789",
 *   pageSize: 1,
 * }]);
 *
 */
export async function listBalances(
  rpc: RpcClient,
  parameters: ListBalancesParameters,
): Promise<ListBalancesResponse> {
  return await rpc.request({
    method: "cdp_listBalances",
    parameters,
  });
}
