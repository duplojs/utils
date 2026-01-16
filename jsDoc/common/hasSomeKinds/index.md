The hasSomeKinds() function checks that a value carries at least one of the requested kinds and acts as a type guard toward their union.

**Supported call styles:**
- Classic: `hasSomeKinds(input, kinds)` → returns a value
- Curried: `hasSomeKinds(kinds)` → returns a function waiting for the input
- Classic predicate: `hasSomeKinds(input, kinds)` → narrows the input type
- Curried predicate: `hasSomeKinds(kinds)` → narrows the input type

Predicate overloads (type guards) narrow the output type.

```ts
{@include common/hasSomeKinds/example.ts[3,22]}
```

@see https://utils.duplojs.dev/en/v1/api/common/hasSomeKinds
