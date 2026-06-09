Creates a NewType handler for a domain-specific value.

**Supported call styles:**
- Classic with DataParser: `createNewType(name, dataParser, constraints?)` -> returns a handler
- Classic with primitive handler: `createNewType(name, primitiveHandler, constraints?)` -> returns a handler

A NewType validates input with a DataParser, applies optional constraints, and brands the value to prevent accidental mix-ups across the domain. When a primitive handler is provided, its internal DataParser is reused.

```ts
{@include clean/createNewType/example.ts[3,41]}
```

@remarks
- You can pass a single constraint handler, a constraints set handler, or a tuple mixing constraints and constraints sets.
- You can pass a primitive handler such as `C.String`, `C.Number`, or `C.Date` instead of manually passing its DataParser.
- Constraints sets are expanded internally before being added to the NewType, preserving declaration order.

@see https://utils.duplojs.dev/en/v1/api/clean/newType

@namespace C
