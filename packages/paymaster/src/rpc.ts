import { RPC_URL } from "@coinbasejs/utils/constants";
import * as http from "@coinbasejs/utils/http";

export type RpcClient = {
  __url: string;
  request: <
    TConfig extends RpcRequestConfig,
    TMethod extends RpcRequestConfig["method"],
  >(
    config: Extract<TConfig, { method: TMethod }> extends {
      parameters: infer TParameters;
    }
      ? { method: TMethod; parameters: TParameters }
      : { method: TMethod; parameters?: never },
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
          // Fallback to empty array because that's the minimum accepted by Coinbase API
          params: config.parameters ?? [],
        }),
      });
    },
  };
}

export type RpcRequestConfig =
  | {
      method: "eth_supportedEntryPoints";
      response: RpcResponse<string[]>;
    }
  | {
      method: "eth_getUserOperationByHash";
      parameters: string[];
      response: RpcResponse<{
        sender: string;
        nonce: string;
        initCode: string;
        callData: string;
        callGasLimit: string;
        verificationGasLimit: string;
        preVerificationGas: string;
        maxFeePerGas: string;
        maxPriorityFeePerGas: string;
        signature: string;
        paymasterAndData: string;
        blockNumber: number;
        blockHash: string;
        transactionHash: string;
      }>;
    }
  | {
      method: "eth_getUserOperationReceipt";
      parameters: string[];
      response: RpcResponse<{
        userOpHash: string;
        entryPoint: string;
        sender: string;
        nonce: string;
        paymaster: string | null;
        actualGasCost: string;
        actualGasUsed: string;
        success: boolean;
        reason: string;
        logs: Array<{
          address: string;
          topics: string;
          data: string;
          blockNumber: string;
          transactionHash: string;
          transactionIndex: string;
          blockHash: string;
          logIndex: string;
          removed: boolean;
        }>;
        receipt: {
          blockHash: string;
          blockNumber: string;
          from: string;
          to: string;
          cumulativeGasUsed: string;
          gasUsed: string;
          contractAddress: string | null;
          logs: [null];
          logsBloom: string;
          status: number;
          type: string;
          transactionHash: string;
          transactionIndex: string;
          effectiveGasPrice: string;
        };
      }>;
    }
  | {
      method: "eth_sendUserOperation";
      parameters: [UserOperation, string];
      response: RpcResponse<string>;
    }
  | {
      method: "eth_estimateUserOperationGas";
      parameters: [UserOperation, string];
      response: RpcResponse<{
        preVerificationGas: string;
        verificationGasLimit: string;
        callGasLimit: string;
      }>;
    }
  | {
      method: "pm_sponsorUserOperation";
      parameters: [UserOperation, string];
      response: RpcResponse<{
        paymasterAndData: string;
        preVerificationGas: string;
        verificationGasLimit: string;
        callGasLimit: string;
      }>;
    };

type UserOperation = {
  sender: string;
  nonce: string;
  initCode: string;
  callData: string;
  callGasLimit: string;
  verificationGasLimit: string;
  preVerificationGas: string;
  maxFeePerGas: string;
  maxPriorityFeePerGas: string;
  signature: string;
  paymasterAndData: string;
};

type RpcResponse<TResult> = {
  id: number;
  jsonrpc: string;
  result: TResult;
};
