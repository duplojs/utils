Creates a port handler for a contract interface.

**Supported call styles:**
- Classic: `createPort<Port>()` -> returns a handler

The handler enforces the port contract at compile time and stays runtime-free. It is meant to be composed with use cases.

```ts
{@include clean/createPort/example.ts[3,50]}
```

@remarks
- This helper adds no runtime logic; it only validates the contract at compile time.

@see https://utils.duplojs.dev/en/v1/api/clean/port

@namespace C
