Creates a constraints set handler to apply multiple constraints to a primitive.

**Supported call styles:**
- Classic: `createConstraintsSet(primitiveHandler, constraints)` -> returns a handler

A constraints set validates input with the primitive DataParser, applies all constraint checkers, and tags the value with each constraint name. Use it to compose multiple constraints once and reuse the handler.

```ts
{@include clean/createConstraintsSet/example.ts[3,27]}
```

@remarks
- You can pass a single constraint handler or a tuple of constraints.
- The handler accepts both raw values and primitives.

@see https://utils.duplojs.dev/en/v1/api/clean/constraints

@namespace C
