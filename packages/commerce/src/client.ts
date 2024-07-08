import {
  type Charge,
  type CreateChargeParameters,
  createCharge,
  getCharge,
  getCharges,
} from "./charge";
import {
  type Checkout,
  type CreateCheckoutParameters,
  createCheckout,
  getCheckout,
  getCheckouts,
} from "./checkout";
import { BASE_URL } from "./constants";
import { type Event, getEvent, getEvents } from "./events";

export type Client = {
  __url: string;
  createCharge: (parameters: CreateChargeParameters) => Promise<Charge>;
  createCheckout: (parameters: CreateCheckoutParameters) => Promise<Checkout>;
  getCharge: (id: string) => Promise<Charge>;
  getCharges: () => Promise<Charge[]>;
  getCheckout: (id: string) => Promise<Checkout>;
  getCheckouts: () => Promise<Checkout[]>;
  getEvent: (id: string) => Promise<Event>;
  getEvents: () => Promise<Event[]>;
};

export type ClientConfig = {
  apiKey: string;
  baseUrl?: string;
};

export function createClient(config: ClientConfig): Client {
  const url = config.baseUrl ?? BASE_URL;

  const client: Client = {
    __url: url,
    createCharge: async (parameters) => {
      const response = await createCharge(parameters, {
        apiKey: config.apiKey,
        baseUrl: url,
      });
      return response.data;
    },
    createCheckout: async (parameters) => {
      const response = await createCheckout(parameters, {
        apiKey: config.apiKey,
        baseUrl: url,
      });
      return response.data;
    },
    getCharge: async (id) => {
      const response = await getCharge(id, {
        apiKey: config.apiKey,
        baseUrl: url,
      });
      return response.data;
    },
    getCharges: async () => {
      const response = await getCharges({
        apiKey: config.apiKey,
        baseUrl: url,
      });
      return response.data;
    },
    getCheckout: async (id) => {
      const response = await getCheckout(id, {
        apiKey: config.apiKey,
        baseUrl: url,
      });
      return response.data;
    },
    getCheckouts: async () => {
      const response = await getCheckouts({
        apiKey: config.apiKey,
        baseUrl: url,
      });
      return response.data;
    },
    getEvent: async (id) => {
      const response = await getEvent(id, {
        apiKey: config.apiKey,
      });
      return response.data;
    },
    getEvents: async () => {
      const response = await getEvents({
        apiKey: config.apiKey,
      });
      return response.data;
    },
  };

  return client;
}

export type RequestConfig = {
  apiKey: string;
  baseUrl?: string;
};
