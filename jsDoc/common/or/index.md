The or() function combines several predicates or type guards: if at least one passes, the result is true and the type is narrowed to the union of accepted cases.

**Supported call styles:**
- Classic: `or(input, predicates)` → returns a value
- Curried: `or(predicates)` → returns a function waiting for the input
- Classic predicate: `or(input, predicates)` → narrows the input type
- Curried predicate: `or(predicates)` → narrows the input type

Predicate overloads (type guards) narrow the output type.

```ts
{@include common/or/example.ts[3,24]}
```

@see https://utils.duplojs.dev/en/v1/api/common/or

@namespace C
