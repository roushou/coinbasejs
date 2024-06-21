import type { RpcClient, RpcRequestConfig } from "../rpc";

export type SponsorUserOperationParameters = Extract<
  RpcRequestConfig,
  { method: "pm_sponsorUserOperation" }
>["parameters"];

export type SponsorUserOperationResponse = Extract<
  RpcRequestConfig,
  { method: "pm_sponsorUserOperation" }
>["response"]["result"];

/**
 * @param rpc - RPC Client {@link RpcClient}
 * @param parameters - Operation {@link SponsorUserOperationParameters}
 *
 * @example
 *
 * TODO
 *
 */
export async function sponsorUserOperation(
  rpc: RpcClient,
  params: SponsorUserOperationParameters,
): Promise<SponsorUserOperationResponse> {
  const response = await rpc.request({
    method: "pm_sponsorUserOperation",
    parameters: params,
  });
  return response.result;
}
