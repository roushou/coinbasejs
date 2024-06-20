import { RPC_URL } from "./constants";
import * as http from "./http";

export type RpcClient = {
  __url: string;
  request: <
    TConfig extends RpcRequestConfig,
    TMethod extends RpcRequestConfig["method"],
  >(
    config: TConfig extends {
      method: TMethod;
      parameters: infer TParameters;
    }
      ? { method: TMethod; parameters: TParameters }
      : never,
  ) => Promise<
    TConfig extends { method: TMethod; response: infer TResponse }
      ? TResponse
      : never
  >;
};

export type RpcClientConfig = {
  apiKey: string;
  /**
   * Coinbase platform RPC endpoint.
   * Defaults to `https://api.developer.coinbase.com/rpc/v1/base`
   */
  url?: string;
};

/**
 * @returns The RPC client
 *
 * @param apiKey - Your API key
 * @param url - Your RPC url. Defaults to `https://api.developer.coinbase.com/rpc/v1/base`
 *
 * @example
 *
 * const rpcClient = createRpcClient({
 *   apiKey: API_KEY,
 *   rpcUrl: "https://api.developer.coinbase.com/rpc/v1/base",
 * });
 *
 */
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
      response: BaseRpcResponse<{
        addressTransactions: RpcAddressTransaction[];
        nextPageToken?: string;
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
      response: BaseRpcResponse<{
        balances: RpcBalanceDetails[];
        nextPageToken?: string;
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
      response: BaseRpcResponse<{
        balanceHistories: RpcBalanceHistory[] | null;
        nextPageToken?: string;
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
      response: BaseRpcResponse<{
        balances: RpcBalance[];
        nextPageToken?: string;
      }>;
    };

type BaseRpcResponse<TResult> = {
  id: number;
  jsonrpc: string;
  result: TResult;
};

export type RpcAddressTransaction = {
  name: string;
  hash: string;
  blockHash: string;
  blockHeight: string;
  // TODO: can be narrowed to a union
  status: string;
};

export type RpcBalance = {
  asset: {
    id: string;
    // TODO: Add all token types
    type:
      | "native"
      | "erc20"
      | "erc721"
      | "erc1155"
      | "creditAlphanum4"
      | "fa2"
      | (string & {});
    groupId: string;
    subGroupId: string;
  };
  value: number;
};

export type RpcBalanceDetails = {
  asset: {
    id: string;
    // TODO: Add all token types
    type:
      | "native"
      | "erc20"
      | "erc721"
      | "erc1155"
      | "creditAlphanum4"
      | "fa2"
      | (string & {});
    groupId: string;
    subGroupId: string;
  };
  value: number;
};

export type RpcBalanceHistory = {
  blockHeight: number;
  blockHash: string;
  value: number;
};
