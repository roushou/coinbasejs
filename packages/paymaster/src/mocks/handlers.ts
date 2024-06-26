import { RPC_URL } from "@coinbasejs/utils/constants";
import { http, HttpResponse } from "msw";
import type { DefaultBodyType, PathParams } from "msw";
import { withRpcMethod } from "./predicates";

export const handlers = [
  http.post<PathParams, { method: string }, DefaultBodyType>(
    `${RPC_URL}/base/API_KEY`,
    withRpcMethod({ method: "eth_supportedEntryPoints" }, async () => {
      return HttpResponse.json({
        id: 1,
        jsonrpc: "2.0",
        result: ["0x5FF137D4b0FDCD49DcA30c7CF57E578a026d2789"],
      });
    }),
  ),
  http.post<PathParams, { method: string }, DefaultBodyType>(
    `${RPC_URL}/base/API_KEY`,
    withRpcMethod({ method: "eth_getUserOperationByHash" }, async () => {
      return HttpResponse.json({
        id: 1,
        jsonrpc: "2.0",
        // TODO: set value
        result: [],
      });
    }),
  ),
  http.post<PathParams, { method: string }, DefaultBodyType>(
    `${RPC_URL}/base/API_KEY`,
    withRpcMethod({ method: "eth_getUserOperationReceipt" }, async () => {
      return HttpResponse.json({
        id: 1,
        jsonrpc: "2.0",
        result: {
          userOpHash:
            "0x13574b2256b73bdc33fb121052f64b3803161e5ec602a6dc9e56177ba387e700",
          entryPoint: "0x5FF137D4b0FDCD49DcA30c7CF57E578a026d2789",
          sender: "0x023fEF87894773DF227587d9B29af8D17b4dBB5A",
          nonce: "0x1",
          paymaster: null,
          actualGasCost: "0x6f75ef8d",
          actualGasUsed: "0x329af",
          success: true,
          reason: "",
          logs: [
            {
              address: "0x5FF137D4b0FDCD49DcA30c7CF57E578a026d2789",
              topics: [
                "0xbb47ee3e183a558b1a2ff0874b079f3fc5478b7454eacf2bfc5af2ff5878f972",
              ],
              data: "0x",
              blockNumber: "0x27fb22e",
              transactionHash:
                "0x0f9b0e5868beaf345d8d55895c8037ae85adb91c422c00badcdcae8a0bf247a1",
              transactionIndex: "0x4",
              blockHash:
                "0x965e08190b1093c078bde81f67362203834784e34cf499d516f1a7b9c7a7b29e",
              logIndex: "0x13",
              removed: false,
            },
          ],
          receipt: {
            blockHash:
              "0x965e08190b1093c078bde81f67362203834784e34cf499d516f1a7b9c7a7b29e",
            blockNumber: "0x27fb22e",
            from: "0x425d190ef5F561aFc8728593cA13EAf2FD9E3380",
            to: "0x25aD59adbe00C2d80c86d01e2E05e1294DA84823",
            cumulativeGasUsed: "0xe13e1",
            gasUsed: "0x329af",
            contractAddress: null,
            logs: [null],
            logsBloom:
              "0x000000010000000000000000800000000000000000000008000000000200000000080000020000020002080100010000001080000000000000100210000000000000000000000008000000000000808010000000000000000001000000000000000000000e000000000000000000080000002200000000408880000000000040000020000000000001000000080000002040000000040000000000000008000020000000000100000040000000000000000000000000000000000220000000400000000000000000000100000010000044000000800020000a100000010020000000000040000081000000000000000000000000000000400000000000100000",
            status: 1,
            type: "0x2",
            transactionHash:
              "0x0f9b0e5868beaf345d8d55895c8037ae85adb91c422c00badcdcae8a0bf247a1",
            transactionIndex: "0x4",
            effectiveGasPrice: "0x6f75ef8d",
          },
        },
      });
    }),
  ),
];
