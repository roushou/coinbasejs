import type { DefaultBodyType, HttpResponseResolver, PathParams } from "msw";
import type { RpcRequestConfig } from "../rpc";

// https://mswjs.io/docs/best-practices/custom-request-predicate

export function withRpcMethod<
  Params extends PathParams,
  RequestBodyType extends DefaultBodyType,
  ResponseBodyType extends DefaultBodyType,
>(
  expectedBody: { method: RpcRequestConfig["method"] },
  resolver: HttpResponseResolver<Params, RequestBodyType, ResponseBodyType>,
): HttpResponseResolver<Params, RequestBodyType, ResponseBodyType> {
  return async (args) => {
    const { request } = args;

    // Ignore requests that have a non-JSON body.
    const contentType = request.headers.get("Content-Type") || "";
    if (!contentType.includes("application/json")) {
      return;
    }

    // Ignore requests from handlers that don't specify the rpc method
    if (!expectedBody || !("method" in expectedBody)) {
      return;
    }

    const body = await request.clone().json();
    if (body?.method !== expectedBody.method) {
      return;
    }

    return resolver(args);
  };
}
