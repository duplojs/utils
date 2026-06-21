The group() function evaluates several Either values, or functions returning an Either, and aggregates their Right values into a Success.

**Supported call styles:**
- Object: `group({ key: either })` → returns a Success containing a typed object
- Array or tuple: `group([either, getter])` → returns a Success containing an array or typed tuple

Values are evaluated in order. The first Left is returned as-is and subsequent getters are not called. The input object or array is not mutated.

```ts
{@include either/group/example.ts[3,32]}
```

@remarks
- The `const` generic parameter automatically infers an array literal as a tuple without requiring an assertion.
- Getters can be used to defer work until the preceding values have succeeded.

@see https://utils.duplojs.dev/en/v1/api/either/group

@namespace E
