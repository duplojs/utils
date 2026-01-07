The and() function combines several predicates or type guards. All must succeed for the result to be true and the type to be narrowed to the intersection.

**Supported call styles:**
- Classic: `and(input, predicates)` → returns a value
- Curried: `and(predicates)` → returns a function waiting for the input
- Classic predicate: `and(input, predicates)` → narrows the input type
- Curried predicate: `and(predicates)` → narrows the input type

Predicate overloads (type guards) narrow the output type.

```ts
{@include common/and/example.ts[3,36]}
```

@see https://utils.duplojs.dev/en/v1/api/common/and

@namespace C
