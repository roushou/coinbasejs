import * as http from "@coinbasejs/utils/http";
import type { Charge } from "./charge";
import type { Checkout } from "./checkout";
import type { RequestConfig } from "./client";
import { BASE_URL } from "./constants";

export type GetEventResponse = {
  data: Event;
  warnings: string[];
};

export async function getEvent(
  id: string,
  config: RequestConfig,
): Promise<GetEventResponse> {
  const baseUrl = config.baseUrl ?? BASE_URL;
  return await http.get(`${baseUrl}/events/${id}`, {
    headers: {
      "X-CC-Api-Key": config.apiKey,
    },
  });
}

export type GetEventsResponse = {
  pagination: {
    order: "asc" | "desc";
    starting_after: string | null;
    ending_before: string | null;
    total: number;
    limit: number;
    yielded: number;
    cursor_range: string[];
    previous_uri: string[];
    next_uri: string;
  };
  data: Array<Event>;
};

export async function getEvents(
  config: RequestConfig,
): Promise<GetEventsResponse> {
  const baseUrl = config.baseUrl ?? BASE_URL;
  return await http.get(`${baseUrl}/events`, {
    headers: {
      "X-CC-Api-Key": config.apiKey,
    },
  });
}

export type Event = {
  api_version: string;
  created_at: string;
  data: Charge | Checkout;
  id: string;
  resource: "event";
  // TODO: should be a union
  type: string;
};
