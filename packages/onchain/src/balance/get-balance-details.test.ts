import { RPC_URL } from "@coinbasejs/utils/constants";
import { describe, test } from "vitest";
import { createRpcClient } from "../rpc";
import { getBalanceDetails } from "./get-balance-details";

describe("get-balance-details", () => {
  test("should get balance details", async () => {
    const rpcClient = createRpcClient({
      url: RPC_URL,
      apiKey: "API_KEY",
    });
    await getBalanceDetails(rpcClient, [
      {
        address: "0x5ff137d4b0fdcd49dca30c7cf57e578a026d2789",
        assetId: "6ecc0dcc-10a2-500e-b315-a3b9abae19ce",
        pageSize: 1,
      },
    ]);
  });
});
