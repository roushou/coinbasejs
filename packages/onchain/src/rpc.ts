import { RPC_URL } from "@coinbasejs/utils/constants";
import * as http from "@coinbasejs/utils/http";

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
          params: normalize(config.parameters),
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
      response: RpcResponse<{
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
      response: RpcResponse<{
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
      response: RpcResponse<{
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
      response: RpcResponse<{
        balances: RpcBalance[];
        nextPageToken?: string;
      }>;
    };

type RpcResponse<TResult> = {
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
  ethereum: RpcTransaction;
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

export type RpcTransaction = {
  blockHash: string;
  blockNumber: string;
  from: string;
  gas: string;
  gasPrice: string;
  hash: string;
  input: string;
  nonce: string;
  to: string;
  index: string;
  value: string;
  receipt: {
    transactionHash: string;
    transactionIndex: string;
    blockHash: string;
    blockNumber: string;
    from: string;
    to: string;
    cumulativeGasUsed: string;
    gasUsed: string;
    contractAddress: string;
    logs: Array<{
      removed: boolean;
      logIndex: string;
      transactionHash: string;
      transactionIndex: string;
      blockHash: string;
      blockNumber: string;
      address: string;
      data: string;
      topics: string[];
    }>;
    logsBloom: string;
    root: string;
    status: string;
    type: string;
    effectiveGasPrice: string;
  };
  tokenTransfers: Array<{
    tokenAddress: string;
    fromAddress: string;
    toAddress: string;
    value: string;
    transactionIndex: string;
    transactionHash: string;
    logIndex: string;
    blockHash: string;
    blockNumber: string;
    erc721: {
      fromAddress: string;
      toAddress: string;
      tokenId: string;
    };
  }>;
  type: string;
  priorityFeePerGas: string;
  flattenedTraces: Array<{
    error: string;
    type: string;
    from: string;
    to: string;
    value: string;
    gas: string;
    gasUsed: string;
    input: string;
    output: string;
    subtraces: string;
    traceAddress: [];
    traceType: string;
    callType: string;
    traceId: string;
    status: string;
    blockHash: string;
    blockNumber: string;
    transactionHash: string;
    transactionIndex: string;
  }>;
  blockTimestamp: string;
};

/**
 * Transforms addresses into lowercase.
 *
 * Reference: `https://docs.cdp.coinbase.com/onchain-data/docs/onchain-data-api/#parameters`
 */
function normalize(
  parameters: RpcRequestConfig["parameters"],
): RpcRequestConfig["parameters"] {
  for (const element of parameters) {
    element.address = element.address.toLowerCase();
  }
  return parameters;
}

if (import.meta.vitest) {
  const { test, expect } = import.meta.vitest;

  test("should transform addresses into lowercase", () => {
    const parameters: RpcRequestConfig["parameters"] = [
      {
        address: "0x9C5940dFbd4633A67C60CfDC8B81E1d1916b4a08",
        pageSize: 1,
        pageToken: "page-token",
      },
    ];
    const normalized = normalize(parameters);
    for (let i = 0; i < parameters.length; i++) {
      expect(normalized[i]).toStrictEqual({
        address: parameters[i].address.toLowerCase(),
        pageSize: parameters[i].pageSize,
        pageToken: parameters[i].pageToken,
      });
    }
  });
}
