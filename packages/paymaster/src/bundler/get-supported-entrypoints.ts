import type { RpcClient, RpcRequestConfig } from "../rpc";

export type GetSupportedEntrypointsResponse = Extract<
  RpcRequestConfig,
  { method: "eth_supportedEntryPoints" }
>["response"]["result"];

/**
 * @returns The list of supported entrypoints
 *
 * @param rpc - RPC Client {@link RpcClient}
 *
 * @example
 *
 * const rpcClient = createRpcClient({
 *   apiKey: API_KEY,
 *   rpcUrl: "https://api.developer.coinbase.com/rpc/v1/base",
 * });
 *
 * await getSupportedEntrypoints(rpcClient);
 *
 */
export async function getSupportedEntrypoints(
  rpc: RpcClient,
): Promise<GetSupportedEntrypointsResponse> {
  const response = await rpc.request({
    method: "eth_supportedEntryPoints",
  });
  return response.result;
}
