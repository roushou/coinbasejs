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
  listAddressTransactions: (
    parameters: ListAddressTransactionsParameters,
  ) => Promise<ListAddressTransactionsResponse>;
  listBalanceDetails: (
    parameters: ListBalanceDetailsParameters,
  ) => Promise<ListBalanceDetailsResponse>;
  listBalanceHistories: (
    parameters: ListBalanceHistoriesParameters,
  ) => Promise<ListBalanceHistoriesResponse>;
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
