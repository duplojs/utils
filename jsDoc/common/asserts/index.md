The asserts() function throws when a predicate fails and narrows the input type when it passes.

**Supported call styles:**
- Classic: `asserts(input, predicate)` → narrows the input type or throws

It throws an `AssertsError` with the failing input value.

```ts
{@include common/asserts/example.ts[3,15]}
```

@see https://utils.duplojs.dev/en/v1/api/common/asserts
