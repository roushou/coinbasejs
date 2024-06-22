const baseHeaders: HeadersInit = {
  "Content-Type": "application/json",
};

export async function get<TResponse>(
  url: string,
  options?: Omit<RequestInit, "method" | "body">,
): Promise<TResponse> {
  const resp = await fetch(url, {
    method: "GET",
    ...options,
    headers: {
      ...baseHeaders,
      ...options?.headers,
    },
  });
  return (await resp.json()) as TResponse;
}

export async function post<TResponse>(
  url: string,
  options?: Omit<RequestInit, "method">,
): Promise<TResponse> {
  const resp = await fetch(url, {
    method: "POST",
    ...options,
    headers: {
      ...baseHeaders,
      ...options?.headers,
    },
  });
  return (await resp.json()) as TResponse;
}
