import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["./commerce.ts", "./onchain.ts", "./paymaster.ts"],
  format: ["esm"],
  splitting: true,
  dts: true,
});
