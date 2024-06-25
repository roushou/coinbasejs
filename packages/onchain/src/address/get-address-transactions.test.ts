import { RPC_URL } from "@coinbasejs/utils/constants";
import { describe, test } from "vitest";
import { createRpcClient } from "../rpc";
import { getAddressTransactions } from "./get-address-transactions";

describe("get-address-transactions", () => {
  test("should get transactions of address", async () => {
    const rpcClient = createRpcClient({
      url: RPC_URL,
      apiKey: "API_KEY",
    });
    await getAddressTransactions(rpcClient, [
      {
        address: "0x5ff137d4b0fdcd49dca30c7cf57e578a026d2789",
        pageSize: 1,
      },
    ]);
  });
});
