import type { Client } from "@coinbasejs/onchain";

declare module "hono" {
  interface Env {
    Bindings: {
      API_KEY: string;
    };
    Variables: {
      onchain: Client;
    };
  }
}
