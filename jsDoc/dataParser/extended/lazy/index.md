Creates an extended lazy data parser resolved at runtime.

**Supported call styles:**
- Method: `DPE.lazy(getter, definition?)` -> returns a lazy parser

Defers parser creation until execution, useful for recursive schemas.

```ts
{@include dataParser/extended/lazy/example.ts[3,24]}
```

@see https://utils.duplojs.dev/en/v1/api/dataParser/lazy

@namespace DPE
