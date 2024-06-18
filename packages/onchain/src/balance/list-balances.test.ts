import { describe, test } from "vitest";
import { RPC_URL } from "../constants";
import { createRpcClient } from "../rpc";
import { listBalances } from "./list-balances";

describe("list-balances", () => {
  test("should list balances", async () => {
    const rpcClient = createRpcClient({
      url: RPC_URL,
      apiKey: "API_KEY",
    });
    await listBalances(rpcClient, [
      {
        address: "0x5ff137d4b0fdcd49dca30c7cf57e578a026d2789",
        pageSize: 1,
      },
    ]);
  });
});
