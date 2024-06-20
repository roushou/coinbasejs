import {
  type ListAddressTransactionsParameters,
  type ListAddressTransactionsResponse,
  listAddressTransactions,
} from "./address/list-address-transactions";
import {
  type ListBalanceDetailsParameters,
  type ListBalanceDetailsResponse,
  listBalanceDetails,
} from "./balance/list-balance-details";
import {
  type ListBalanceHistoriesParameters,
  type ListBalanceHistoriesResponse,
  listBalanceHistories,
} from "./balance/list-balance-histories";
import {
  type ListBalancesParameters,
  type ListBalancesResponse,
  listBalances,
} from "./balance/list-balances";
import { createRpcClient } from "./rpc";

export type Client = {
  /**
   * @example
   *
   * client.listAddressTransactions([{
   *   address: 0x0e73fc61bb9d6b7588910c2d14e83bae68222c5d,
   *   pageSize: 1,
   * }]);
   *
   */
  listAddressTransactions: (
    parameters: ListAddressTransactionsParameters,
  ) => Promise<ListAddressTransactionsResponse>;
  /**
   * @example
   *
   * client.listBalanceDetails([{
   *   address: "0x5ff137d4b0fdcd49dca30c7cf57e578a026d2789",
   *   assetId: "6ecc0dcc-10a2-500e-b315-a3b9abae19ce",
   *   pageSize: 1,
   * }]);
   */
  listBalanceDetails: (
    parameters: ListBalanceDetailsParameters,
  ) => Promise<ListBalanceDetailsResponse>;
  /**
   * @example
   *
   * client.listBalanceHistories([{
   *   address: "0x5ff137d4b0fdcd49dca30c7cf57e578a026d2789",
   *   assetId: "6ecc0dcc-10a2-500e-b315-a3b9abae19ce",
   *   pageSize: 1,
   * }]);
   */
  listBalanceHistories: (
    parameters: ListBalanceHistoriesParameters,
  ) => Promise<ListBalanceHistoriesResponse>;
  /**
   * @example
   *
   * client.listBalances([{
   *   address: "0x5ff137d4b0fdcd49dca30c7cf57e578a026d2789",
   *   pageSize: 1,
   * }]);
   */
  listBalances: (
    parameters: ListBalancesParameters,
  ) => Promise<ListBalancesResponse>;
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
    listAddressTransactions: async (parameters) => {
      return await listAddressTransactions(rpcClient, parameters);
    },
    listBalanceDetails: async (parameters) => {
      return await listBalanceDetails(rpcClient, parameters);
    },
    listBalanceHistories: async (parameters) => {
      return await listBalanceHistories(rpcClient, parameters);
    },
    listBalances: async (parameters) => {
      return await listBalances(rpcClient, parameters);
    },
  };

  return client;
}
