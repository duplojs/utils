Checks whether a string is present in a list.

**Supported call styles:**
- Classic: `isIn(input, list)` → returns a boolean
- Curried: `isIn(list)` → returns a function waiting for the input
- Classic predicate: `isIn(input, list)` → narrows the string type
- Curried predicate: `isIn(list)` → narrows the string type

The input array is not mutated.

```ts
{@include string/isIn/example.ts[3,25]}
```

@remarks
- Predicate overloads (type guards) narrow the output type

@see https://utils.duplojs.dev/en/v1/api/string/isIn

@namespace S
