import { describe, test } from "vitest";
import { RPC_URL } from "../constants";
import { createRpcClient } from "../rpc";
import { listAddressTransactions } from "./list-address-transactions";

describe("list-address-transactions", () => {
  test("should list transactions of address", async () => {
    const rpcClient = createRpcClient({
      url: RPC_URL,
      apiKey: "API_KEY",
    });
    await listAddressTransactions(rpcClient, [
      {
        address: "0x5ff137d4b0fdcd49dca30c7cf57e578a026d2789",
        pageSize: 1,
      },
    ]);
  });
});
