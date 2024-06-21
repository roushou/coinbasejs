import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    root: __dirname,
    environment: "node",
    setupFiles: ["./vitest.setup.ts"],
  },
  define: {
    "import.meta.vitest": "undefined",
  },
});
