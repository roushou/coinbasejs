import { RPC_URL } from "@coinbase-platform/utils/constants";
import { http, HttpResponse } from "msw";
import type { DefaultBodyType, PathParams } from "msw";
import { withRpcMethod } from "./predicates";

export const handlers = [
  http.post(
    `${RPC_URL}/API_KEY`,
    withRpcMethod({ method: "cdp_listBalanceDetails" }, async () => {
      return HttpResponse.json({
        id: 1,
        jsonrpc: "2.0",
        result: {
          balances: [
            {
              asset: {
                id: "6ecc0dcc-10a2-500e-b315-a3b9abae19ce",
                type: "native",
                groupId: "0x0000000000000000000000000000000000000000",
                subGroupId: "0061079382712f4d...b823baf6b34a2:12",
              },
              value: 1,
            },
          ],
          nextPageToken: "Zk5sYnVQa0Y3dXVzN2J...WNmZjJlYWJhOjEzIn0",
        },
      });
    }),
  ),
  http.post(
    `${RPC_URL}/API_KEY`,
    withRpcMethod({ method: "cdp_listBalanceHistories" }, async () => {
      return HttpResponse.json({
        id: 1,
        jsonrpc: "2.0",
        result: {
          balanceHistories: [
            {
              blockHeight: 2767233,
              blockHash: "0x980773f020fea...70ee1a2f349241df338",
              value: "4999990000000000000000",
            },
          ],
          nextPageToken: "Zk5sYnVQa0Y3dXVzN2J...WNmZjJlYWJhOjEzIn0",
        },
      });
    }),
  ),
  http.post<PathParams, { method: string }, DefaultBodyType>(
    `${RPC_URL}/API_KEY`,
    withRpcMethod({ method: "cdp_listBalances" }, async () => {
      return HttpResponse.json({
        id: 1,
        jsonrpc: "2.0",
        result: {
          balances: [
            {
              asset: {
                id: "0241d02d-ecc9-59d2-9f0d-d900d56aead6",
                type: "erc721",
                groupId: "0xD4307E0acD12CF46fD6cf93BC264f5D5D1598792",
                subGroupId: "",
              },
              value: 1,
            },
            {
              asset: {
                id: "05170283-cb08-55a7-9d25-1dd7bef278e5",
                type: "erc721",
                groupId: "0x14984dA678d4eFcc4D6204Be9D296608243c8A2D",
                subGroupId: "",
              },
              value: 1,
            },
          ],
          nextPageToken: "ZmI1cjVRMExudjRm...Ny05ZDI1LTFkZDdiZWYyNzhlNSJ9",
        },
      });
    }),
  ),
];
