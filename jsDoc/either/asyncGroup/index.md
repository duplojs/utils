The asyncGroup() function evaluates several synchronous or asynchronous Either values, promises, Futures, or getters and aggregates their Right values into a Success.

**Supported call styles:**
- Object: `asyncGroup({ key: either })` → returns a Promise of a Success containing a typed object
- Array or tuple: `asyncGroup([either, getter])` → returns a Promise of a Success containing an array or typed tuple

Values are awaited in order. The first Left is returned as-is and subsequent getters are not called. The input object or array is not mutated.

```ts
{@include either/asyncGroup/example.ts[3,35]}
```

@remarks
- The `const` generic parameter automatically infers an array literal as a tuple without requiring an assertion.
- Use getters to defer asynchronous work until the preceding values have succeeded.

@see https://utils.duplojs.dev/en/v1/api/either/asyncGroup

@namespace E
