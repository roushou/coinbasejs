import { RPC_URL } from "./constants";
import * as http from "./http";

export type RpcClient = {
  __url: string;
  request: <TResponse>(config: RpcRequestConfig) => Promise<TResponse>;
};

export type RpcClientConfig = {
  apiKey: string;
  /**
   * Coinbase platform RPC endpoint.
   * Defaults to `https://api.developer.coinbase.com/rpc/v1/base`
   */
  url?: string;
};

export function createRpcClient({
  apiKey,
  url = RPC_URL,
}: RpcClientConfig): RpcClient {
  return {
    __url: url,
    request: async (config) => {
      return await http.post(`${url}/${apiKey}`, {
        body: JSON.stringify({
          jsonrpc: "2.0",
          id: 1,
          method: config.method,
          params: config.parameters,
        }),
      });
    },
  };
}

export type RpcRequestConfig =
  | {
      method: "cdp_listAddressTransactions";
      parameters: Array<{
        address: string;
        /** Provided from a previous response's nextPageToken */
        pageToken?: string;
        /** Number of balances to receive in a page. The default value is 25. The maximum value is 100, and values supplied over this will be coerced to the maximum. */
        pageSize?: number;
      }>;
    }
  | {
      method: "cdp_listBalanceDetails";
      parameters: Array<{
        address: string;
        assetId: string;
        /** Provided from a previous response's nextPageToken */
        pageToken?: string;
        /** Number of balances to receive in a page. The default value is 25. The maximum value is 100, and values supplied over this will be coerced to the maximum. */
        pageSize?: number;
      }>;
    }
  | {
      method: "cdp_listBalanceHistories";
      parameters: Array<{
        address: string;
        assetId: string;
        /** Provided from a previous response's nextPageToken */
        pageToken?: string;
        /** Number of balances to receive in a page. The default value is 25. The maximum value is 100, and values supplied over this will be coerced to the maximum. */
        pageSize?: number;
      }>;
    }
  | {
      method: "cdp_listBalances";
      parameters: Array<{
        address: string;
        /** Provided from a previous response's nextPageToken */
        pageToken?: string;
        /** Number of balances to receive in a page. The default value is 25. The maximum value is 100, and values supplied over this will be coerced to the maximum. */
        pageSize?: number;
      }>;
    };
