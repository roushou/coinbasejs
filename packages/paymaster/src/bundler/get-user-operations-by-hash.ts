import type { RpcClient, RpcRequestConfig } from "../rpc";

export type GetUserOperationByHashParameters = Extract<
  RpcRequestConfig,
  { method: "eth_getUserOperationByHash" }
>["parameters"];

export type GetUserOperationByHashResponse = Extract<
  RpcRequestConfig,
  { method: "eth_getUserOperationByHash" }
>["response"]["result"];

/**
 * @returns The user operation
 *
 * @param rpc - RPC Client {@link RpcClient}
 * @param parameters - Operation hash {@link GetUserOperationByHashParameters}
 *
 * @example
 *
 * const rpcClient = createRpcClient({
 *   apiKey: API_KEY,
 *   rpcUrl: "https://api.developer.coinbase.com/rpc/v1/base",
 * });
 *
 * await getUserOperationByhash(
 *   rpcClient,
 *   ["0x77c0b560eb0b042902abc5613f768d2a6b2d67481247e9663bf4d68dec0ca122"],
 * );
 *
 */
export async function getUserOperationByHash(
  rpc: RpcClient,
  params: GetUserOperationByHashParameters,
): Promise<GetUserOperationByHashResponse> {
  const response = await rpc.request({
    method: "eth_getUserOperationByHash",
    parameters: params,
  });
  return response.result;
}
