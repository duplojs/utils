Creates a NewType handler for a domain-specific value.

**Supported call styles:**
- Classic: `createNewType(name, dataParser, constraints?)` -> returns a handler

A NewType validates input with a DataParser, applies optional constraints, and brands the value to prevent accidental mix-ups across the domain.

```ts
{@include clean/createNewType/example.ts[3,29]}
```

@see https://utils.duplojs.dev/en/v1/api/clean/newType

@namespace C
