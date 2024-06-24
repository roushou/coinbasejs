# getSupportedEntrypoints

Retrieve the list of supported entrypoints.

## Usage

```ts
import { createClient } from "@coinbasejs/paymaster";

const client = createClient({ apiKey: "API_KEY" });

const entrypoints = await client.getSupportedEntrypoints();
```

## Return

- Type: `Promise<string[]>`
