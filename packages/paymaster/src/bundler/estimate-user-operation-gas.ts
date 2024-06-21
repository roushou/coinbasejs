import type { RpcClient, RpcRequestConfig } from "../rpc";

export type EstimateUserOperationGasParameters = Extract<
  RpcRequestConfig,
  { method: "eth_estimateUserOperationGas" }
>["parameters"];

export type EstimateUserOperationGasResponse = Extract<
  RpcRequestConfig,
  { method: "eth_estimateUserOperationGas" }
>["response"]["result"];

/**
 * @returns The gas estimates of the operation
 *
 * @param rpc - RPC Client {@link RpcClient}
 * @param parameters - User operation {@link EstimateUserOperationGasParameters}
 *
 * @example
 *
 * TODO
 *
 */
export async function estimateUserOperationGas(
  rpc: RpcClient,
  params: EstimateUserOperationGasParameters,
): Promise<EstimateUserOperationGasResponse> {
  const response = await rpc.request({
    method: "eth_estimateUserOperationGas",
    parameters: params,
  });
  return response.result;
}
