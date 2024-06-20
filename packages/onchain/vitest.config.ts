import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    root: __dirname,
    environment: "node",
    setupFiles: ["./vitest.setup.ts"],
    includeSource: ["src/**/*.ts"],
  },
  define: {
    "import.meta.vitest": "undefined",
  },
});
