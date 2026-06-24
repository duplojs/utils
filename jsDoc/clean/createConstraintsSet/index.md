Creates a constraints set handler to apply multiple constraints to a primitive.

**Supported call styles:**
- Classic: `createConstraintsSet(primitiveHandler, constraints)` -> returns a handler

A constraints set validates input with the primitive DataParser, applies all constraint checkers, and tags the value with each constraint name. Use it to compose multiple constraints once and reuse the handler.

On validation failure, `create` and `createWithUnknown` return `Left<"createConstraintsSetError", ConstraintError<...>>`. The error contains the failing `dataParserError` and a `constraintName` resolved from the checker source.

```ts
{@include clean/createConstraintsSet/example.ts[3,27]}
```

@remarks
- You can pass a single constraint handler, a constraints set handler, or a tuple mixing constraints and constraints sets.
- Constraints sets are expanded internally, so their contained constraints are applied in declaration order.
- The handler accepts both raw values and primitives.
- When a constraint checker fails, `constraintName` points to the constraint that owns the checker, including constraints expanded from nested sets.
- When primitive parsing fails before any constraint checker is responsible, `constraintName` falls back to the first constraint name in the set.

@see https://utils.duplojs.dev/en/v1/api/clean/constraints

@namespace C
