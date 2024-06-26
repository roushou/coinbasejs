import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "coinbasejs",
  description:
    "Build powerful applications on top of the Coinbase Developer Platform",
  themeConfig: {
    outline: [2, 3],
    logo: "/logo.svg",
    search: {
      provider: "local",
    },
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Guide", link: "/introduction", activeMatch: "/introduction" },
      {
        text: "Examples",
        link: "https://github.com/roushou/coinbasejs/tree/main/examples",
        target: "_blank",
        rel: "noopener noreferrer",
      },
    ],
    sidebar: [
      {
        text: "Introduction",
        items: [
          { text: "Installation", link: "/introduction/installation" },
          { text: "Getting started", link: "/introduction/getting-started" },
        ],
      },
      {
        text: "Commerce",
        items: [
          { text: "Client", link: "/commerce/client" },
          {
            text: "Charge",
            items: [
              { text: "getCharge", link: "/commerce/get-charge" },
              { text: "getCharges", link: "/commerce/get-charges" },
              { text: "createCharge", link: "/commerce/create-charge" },
            ],
          },
          {
            text: "Checkout",
            items: [
              { text: "getCheckout", link: "/commerce/get-checkout" },
              { text: "getCheckouts", link: "/commerce/get-checkouts" },
              { text: "createCheckout", link: "/commerce/create-checkout" },
            ],
          },
          {
            text: "Event",
            items: [
              { text: "getEvent", link: "/commerce/get-event" },
              { text: "getEvents", link: "/commerce/get-events" },
            ],
          },
        ],
      },
      {
        text: "Onchain",
        items: [
          { text: "Client", link: "/onchain/client" },
          {
            text: "Balance",
            items: [
              { text: "getBalances", link: "/onchain/get-balances" },
              {
                text: "getBalanceDetails",
                link: "/onchain/get-balance-details",
              },
              {
                text: "getBalanceHistories",
                link: "/onchain/get-balance-histories",
              },
            ],
          },
          {
            text: "Transactions",
            items: [
              {
                text: "getAddressTransactions",
                link: "/onchain/get-address-transactions",
              },
            ],
          },
        ],
      },
      {
        text: "Paymaster",
        items: [
          { text: "Client", link: "/paymaster/client" },
          {
            text: "Bundler",
            items: [
              {
                text: "getSupportedEntrypoints",
                link: "/paymaster/get-supported-entrypoints",
              },
            ],
          },
        ],
      },
    ],
    socialLinks: [
      { icon: "github", link: "https://github.com/roushou/coinbasejs" },
      { icon: "x", link: "https://x.com/roushou_" },
    ],
    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © 2024-present Roushou",
    },
  },
  lastUpdated: true,
});
