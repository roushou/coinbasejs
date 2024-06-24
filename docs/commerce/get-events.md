# getEvents

Retrieve a list of events.

## Usage

```ts
import { createClient } from "@coinbasejs/commerce";

const client = createClient({ apiKey: "API_KEY" });

const events = await client.getEvents();
```

## Parameters

### id

- Type: `string`

## Return

- Type: `Promise<Event[]>`

```ts
export type Event = {
  api_version: string;
  created_at: string;
  data: Charge | Checkout;
  id: string;
  resource: "event";
  type: string;
};
```
