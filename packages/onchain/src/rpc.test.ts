import { RPC_URL } from "@coinbasejs/utils/constants";
import { describe, expect, test } from "vitest";
import { createRpcClient } from "./rpc";

describe("rpc", () => {
  test("should set network", async () => {
    const rpcBase = createRpcClient({
      apiKey: "API_KEY",
      network: "base",
      url: "https://api.developer.coinbase.com/rpc/v1",
    });
    expect(rpcBase.__url).toEqual(
      "https://api.developer.coinbase.com/rpc/v1/base",
    );

    const rpcBaseSepolia = createRpcClient({
      apiKey: "API_KEY",
      network: "base-sepolia",
      url: "https://api.developer.coinbase.com/rpc/v1",
    });
    expect(rpcBaseSepolia.__url).toEqual(
      "https://api.developer.coinbase.com/rpc/v1/base-sepolia",
    );
  });

  test("should set RPC url", async () => {
    const rpc = createRpcClient({
      apiKey: "API_KEY",
      network: "base-sepolia",
      url: "https://coinbase.com/other/rpc",
    });
    expect(rpc.__url).toEqual("https://coinbase.com/other/rpc/base-sepolia");
  });

  test(`should default RPC url to ${RPC_URL}`, async () => {
    const rpc = createRpcClient({
      apiKey: "API_KEY",
      network: "base-sepolia",
    });
    expect(rpc.__url).toEqual(`${RPC_URL}/base-sepolia`);
  });
});
