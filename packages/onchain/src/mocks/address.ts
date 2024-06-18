import { http, HttpResponse } from "msw";
import type { DefaultBodyType, PathParams } from "msw";
import { RPC_URL } from "../constants";
import { withRpcMethod } from "./predicates";

export const handlers = [
  http.post<PathParams, { method: string }, DefaultBodyType>(
    `${RPC_URL}/API_KEY`,
    withRpcMethod({ method: "cdp_listAddressTransactions" }, async () => {
      return HttpResponse.json({
        id: 1,
        jsonrpc: "2.0",
        result: {
          // TODO
          addressTransactions: [],
          nextPageToken: "ZmI1cjVRMExudjRm...Ny05ZDI1LTFkZDdiZWYyNzhlNSJ9",
        },
      });
    }),
  ),
];
