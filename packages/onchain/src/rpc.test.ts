import { describe, expect, test } from "vitest";
import { RPC_URL } from "./constants";
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
});
