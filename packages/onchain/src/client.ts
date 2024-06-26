import {
  type GetAddressTransactionsParameters,
  type GetAddressTransactionsResponse,
  getAddressTransactions,
} from "./address/get-address-transactions";
import {
  type GetBalanceDetailsParameters,
  type GetBalanceDetailsResponse,
  getBalanceDetails,
} from "./balance/get-balance-details";
import {
  type GetBalanceHistoriesParameters,
  type GetBalanceHistoriesResponse,
  getBalancehistories,
} from "./balance/get-balance-histories";
import {
  type GetBalancesParameters,
  type GetBalancesResponse,
  getBalances,
} from "./balance/get-balances";
import { type RpcClientConfig, createRpcClient } from "./rpc";

export type Client = {
  /**
   * @example
   *
   * client.getAddressTransactions([{
   *   address: 0x0e73fc61bb9d6b7588910c2d14e83bae68222c5d,
   *   pageSize: 1,
   * }]);
   *
   */
  getAddressTransactions: (
    parameters: GetAddressTransactionsParameters,
  ) => Promise<GetAddressTransactionsResponse>;
  /**
   * @example
   *
   * client.getBalanceDetails([{
   *   address: "0x5ff137d4b0fdcd49dca30c7cf57e578a026d2789",
   *   assetId: "6ecc0dcc-10a2-500e-b315-a3b9abae19ce",
   *   pageSize: 1,
   * }]);
   */
  getBalanceDetails: (
    parameters: GetBalanceDetailsParameters,
  ) => Promise<GetBalanceDetailsResponse>;
  /**
   * @example
   *
   * client.getBalanceHistories([{
   *   address: "0x5ff137d4b0fdcd49dca30c7cf57e578a026d2789",
   *   assetId: "6ecc0dcc-10a2-500e-b315-a3b9abae19ce",
   *   pageSize: 1,
   * }]);
   */
  getBalanceHistories: (
    parameters: GetBalanceHistoriesParameters,
  ) => Promise<GetBalanceHistoriesResponse>;
  /**
   * @example
   *
   * client.getBalances([{
   *   address: "0x5ff137d4b0fdcd49dca30c7cf57e578a026d2789",
   *   pageSize: 1,
   * }]);
   */
  getBalances: (
    parameters: GetBalancesParameters,
  ) => Promise<GetBalancesResponse>;
};

export type ClientConfig = {
  apiKey: string;
  network: RpcClientConfig["network"];
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
 * @param network - The network name to connect to.
 * @param rpcUrl - Your RPC url. Defaults to `https://api.developer.coinbase.com/rpc/v1`
 *
 * @example
 *
 * const client = createClient({
 *   apiKey: API_KEY,
 *   network: "base",
 *   rpcUrl: "https://api.developer.coinbase.com/rpc/v1",
 * });
 *
 */
export function createClient(config: ClientConfig): Client {
  const rpcClient = createRpcClient({
    apiKey: config.apiKey,
    network: config.network,
    url: config.rpcUrl,
  });

  const client: Client = {
    getAddressTransactions: async (parameters) => {
      return await getAddressTransactions(rpcClient, parameters);
    },
    getBalanceDetails: async (parameters) => {
      return await getBalanceDetails(rpcClient, parameters);
    },
    getBalanceHistories: async (parameters) => {
      return await getBalancehistories(rpcClient, parameters);
    },
    getBalances: async (parameters) => {
      return await getBalances(rpcClient, parameters);
    },
  };

  return client;
}
