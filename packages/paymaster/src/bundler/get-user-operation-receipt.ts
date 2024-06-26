import type { RpcClient, RpcRequestConfig } from "../rpc";

export type GetUserOperationReceiptParameters = Extract<
  RpcRequestConfig,
  { method: "eth_getUserOperationReceipt" }
>["parameters"];

export type GetUserOperationReceiptResponse = Extract<
  RpcRequestConfig,
  { method: "eth_getUserOperationReceipt" }
>["response"]["result"];

/**
 * @returns The user operation receipt
 *
 * @param rpc - RPC Client {@link RpcClient}
 * @param parameters - Operation hash {@link GetUserOperationReceiptParameters}
 *
 * @example
 *
 * const rpcClient = createRpcClient({
 *   apiKey: API_KEY,
 *   network: "base",
 * });
 *
 * await getUserOperationReceipt(
 *   rpcClient,
 *   ["0x77c0b560eb0b042902abc5613f768d2a6b2d67481247e9663bf4d68dec0ca122"],
 * );
 *
 */
export async function getUserOperationReceipt(
  rpc: RpcClient,
  params: GetUserOperationReceiptParameters,
): Promise<GetUserOperationReceiptResponse> {
  const response = await rpc.request({
    method: "eth_getUserOperationReceipt",
    parameters: params,
  });
  return response.result;
}
