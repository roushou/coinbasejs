import { RPC_URL } from "@coinbasejs/utils/constants";
import { describe, expect, test } from "vitest";
import { createRpcClient } from "./rpc";

describe("rpc", () => {
  test("should set RPC url", async () => {
    const rpc = createRpcClient({
      apiKey: "API_KEY",
      url: "https://coinbase.com/other/rpc",
    });
    expect(rpc.__url).toEqual("https://coinbase.com/other/rpc");
  });

  test(`should default RPC url to ${RPC_URL}`, async () => {
    const rpc = createRpcClient({ apiKey: "API_KEY" });
    expect(rpc.__url).toEqual(RPC_URL);
  });

  test("should get supported entrypoints", async () => {
    const rpc = createRpcClient({ apiKey: "API_KEY" });
    const response = await rpc.request({
      method: "eth_supportedEntryPoints",
    });
    expect(response).toEqual({
      id: 1,
      jsonrpc: "2.0",
      result: ["0x5FF137D4b0FDCD49DcA30c7CF57E578a026d2789"],
    });
  });

  test("should get user operation by hash", async () => {
    const rpc = createRpcClient({ apiKey: "API_KEY" });
    await rpc.request({
      method: "eth_getUserOperationByHash",
      parameters: [
        "0x77c0b560eb0b042902abc5613f768d2a6b2d67481247e9663bf4d68dec0ca122",
      ],
    });
  });

  test("should get user operation receipt", async () => {
    const rpc = createRpcClient({ apiKey: "API_KEY" });
    await rpc.request({
      method: "eth_getUserOperationReceipt",
      parameters: [
        "0x77c0b560eb0b042902abc5613f768d2a6b2d67481247e9663bf4d68dec0ca122",
      ],
    });
  });
});
