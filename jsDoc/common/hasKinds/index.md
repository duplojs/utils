The hasKinds() function checks that a value carries all requested kinds and acts as a type guard toward their intersection.

**Supported call styles:**
- Classic: `hasKinds(input, kinds)` → returns a value
- Curried: `hasKinds(kinds)` → returns a function waiting for the input
- Classic predicate: `hasKinds(input, kinds)` → narrows the input type
- Curried predicate: `hasKinds(kinds)` → narrows the input type

Predicate overloads (type guards) narrow the output type.

```ts
{@include common/hasKinds/example.ts[3,22]}
```

@see https://utils.duplojs.dev/en/v1/api/common/hasKinds

@namespace C
