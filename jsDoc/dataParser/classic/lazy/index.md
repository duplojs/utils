Creates a lazy data parser resolved at runtime.

**Supported call styles:**
- Classic: `DP.lazy(getter, definition?)` -> returns a lazy parser
- Curried: not available

Defers parser creation until execution, useful for recursive schemas.

```ts
{@include dataParser/classic/lazy/example.ts[3,24]}
```

@see https://utils.duplojs.dev/en/v1/api/dataParser/lazy

@namespace DP
