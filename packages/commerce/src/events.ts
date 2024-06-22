import * as http from "@coinbase-platform/utils/http";
import type { Charge } from "./charge";
import type { Checkout } from "./checkout";
import { BASE_URL } from "./constants";

export type GetEventResponse = {
  data: Event;
  warnings: string[];
};

export async function getEvent(
  id: string,
  apiKey: string,
): Promise<GetEventResponse> {
  return await http.get(`${BASE_URL}/events/${id}`, {
    headers: {
      "X-CC-Api-Key": apiKey,
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

export async function getEvents(apiKey: string): Promise<GetEventsResponse> {
  return await http.get(`${BASE_URL}/events`, {
    headers: {
      "X-CC-Api-Key": apiKey,
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
