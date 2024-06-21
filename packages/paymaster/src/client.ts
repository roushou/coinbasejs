import {
  type EstimateUserOperationGasParameters,
  type EstimateUserOperationGasResponse,
  estimateUserOperationGas,
} from "./bundler/estimate-user-operation-gas";
import {
  type GetSupportedEntrypointsResponse,
  getSupportedEntrypoints,
} from "./bundler/get-supported-entrypoints";
import {
  type GetUserOperationReceiptParameters,
  type GetUserOperationReceiptResponse,
  getUserOperationReceipt,
} from "./bundler/get-user-operation-receipt";
import {
  type GetUserOperationByHashParameters,
  type GetUserOperationByHashResponse,
  getUserOperationByHash,
} from "./bundler/get-user-operations-by-hash";
import {
  type SendUserOperationParameters,
  type SendUserOperationResponse,
  sendUserOperation,
} from "./bundler/send-user-operation";
import { createRpcClient } from "./rpc";
import {
  type SponsorUserOperationParameters,
  type SponsorUserOperationResponse,
  sponsorUserOperation,
} from "./sponsor/sponser-user-operation";

export type Client = {
  /**
   * @example
   *
   * TODO
   *
   */
  estimateUserOperationGas: (
    parameters: EstimateUserOperationGasParameters,
  ) => Promise<EstimateUserOperationGasResponse>;
  /**
   * @example
   *
   * client.getUserOperationByHash([
   *   "0x77c0b560eb0b042902abc5613f768d2a6b2d67481247e9663bf4d68dec0ca122",
   * ]);
   *
   */
  /**
   * @example
   *
   * client.getSupportedEntrypoints();
   *
   */
  getSupportedEntrypoints: () => Promise<GetSupportedEntrypointsResponse>;
  /**
   * @example
   *
   * client.getUserOperationByHash([
   *   "0x77c0b560eb0b042902abc5613f768d2a6b2d67481247e9663bf4d68dec0ca122",
   * ]);
   *
   */
  getUserOperationByHash: (
    parameters: GetUserOperationByHashParameters,
  ) => Promise<GetUserOperationByHashResponse>;
  /**
   * @example
   *
   * client.getUserOperationReceipt([
   *   "0x77c0b560eb0b042902abc5613f768d2a6b2d67481247e9663bf4d68dec0ca122",
   * ]);
   *
   */
  getUserOperationReceipt: (
    parameters: GetUserOperationReceiptParameters,
  ) => Promise<GetUserOperationReceiptResponse>;
  /**
   * @example
   *
   * TODO
   *
   */
  sendUserOperation: (
    parameters: SendUserOperationParameters,
  ) => Promise<SendUserOperationResponse>;
  /**
   * @example
   *
   * TODO
   *
   */
  sponsorUserOperation: (
    parameters: SponsorUserOperationParameters,
  ) => Promise<SponsorUserOperationResponse>;
};

export type ClientConfig = {
  apiKey: string;
  /**
   * Coinbase platform RPC endpoint.
   * Defaults to `https://api.developer.coinbase.com/rpc/v1/base`
   */
  rpcUrl?: string;
};

/**
 * @returns The Client
 *
 * @param apiKey - Your API key
 * @param rpcUrl - Your RPC url. Defaults to `https://api.developer.coinbase.com/rpc/v1/base`
 *
 * @example
 *
 * const client = createClient({
 *   apiKey: API_KEY,
 *   rpcUrl: "https://api.developer.coinbase.com/rpc/v1/base",
 * });
 *
 */
export function createClient(config: ClientConfig): Client {
  const rpcClient = createRpcClient({
    apiKey: config.apiKey,
    url: config.rpcUrl,
  });

  const client: Client = {
    estimateUserOperationGas: async (parameters) => {
      return await estimateUserOperationGas(rpcClient, parameters);
    },
    getSupportedEntrypoints: async () => {
      return await getSupportedEntrypoints(rpcClient);
    },
    getUserOperationByHash: async (parameters) => {
      return await getUserOperationByHash(rpcClient, parameters);
    },
    getUserOperationReceipt: async (parameters) => {
      return await getUserOperationReceipt(rpcClient, parameters);
    },
    sendUserOperation: async (parameters) => {
      return await sendUserOperation(rpcClient, parameters);
    },
    sponsorUserOperation: async (parameters) => {
      return await sponsorUserOperation(rpcClient, parameters);
    },
  };

  return client;
}
