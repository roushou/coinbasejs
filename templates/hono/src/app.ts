import { createClient } from "@coinbasejs/onchain";
import { zValidator } from "@hono/zod-validator";
import { Hono } from "hono";
import { prettyJSON } from "hono/pretty-json";
import { z } from "zod";

const app = new Hono();

app.use("*", prettyJSON());

app.use("*", async (ctx, next) => {
  const client = createClient({
    apiKey: ctx.env.API_KEY,
    network: "base-sepolia",
  });
  ctx.set("onchain", client);
  await next();
});

app.get("/_health", (ctx) => {
  return ctx.text("healthy");
});

// /balances/0x838aD0EAE54F99F1926dA7C3b6bFbF617389B4D9?pretty
app.get("/balances/:address", async (ctx) => {
  const address = ctx.req.param("address");
  const balances = await ctx.var.onchain.getBalances([
    {
      address,
      pageSize: 5,
    },
  ]);
  return ctx.json(balances);
});

// /balances/details/1dice6GV5Rz2iaifPvX7RMjfhaNPC8SXH/6ecc0dcc-10a2-500e-b315-a3b9abae19ce?pretty&pageSize=3
app.get(
  "/balances/details/:address/:assetId",
  zValidator(
    "query",
    z.object({
      pageSize: z.string().optional(),
    }),
  ),
  async (ctx) => {
    const query = ctx.req.valid("query");

    const details = await ctx.var.onchain.getBalanceDetails([
      {
        address: ctx.req.param("address"),
        assetId: ctx.req.param("assetId"),
        pageSize: query.pageSize ? Number.parseInt(query.pageSize) : undefined,
      },
    ]);

    return ctx.json(details);
  },
);

export default app;
