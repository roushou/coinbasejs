import type { RpcClient, RpcRequestConfig } from "../rpc";

export type SendUserOperationParameters = Extract<
  RpcRequestConfig,
  { method: "eth_sendUserOperation" }
>["parameters"];

export type SendUserOperationResponse = Extract<
  RpcRequestConfig,
  { method: "eth_sendUserOperation" }
>["response"]["result"];

/**
 * @param rpc - RPC Client {@link RpcClient}
 * @param parameters - Operation {@link SendUserOperationParameters}
 *
 * @example
 *
 * TODO
 *
 */
export async function sendUserOperation(
  rpc: RpcClient,
  params: SendUserOperationParameters,
): Promise<SendUserOperationResponse> {
  const response = await rpc.request({
    method: "eth_sendUserOperation",
    parameters: params,
  });
  return response.result;
}
