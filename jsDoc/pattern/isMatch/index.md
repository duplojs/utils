Checks whether a value matches a pattern.

**Supported call styles:**
- Classic: `isMatch(input, pattern)` → returns a boolean
- Curried: `isMatch(pattern)` → returns a function waiting for the input
- Classic predicate: `isMatch(input, pattern)` → narrows the input type
- Curried predicate: `isMatch(pattern)` → narrows the input type

The input is not mutated.

```ts
{@include pattern/isMatch/example.ts[3,16]}
```

@remarks
- Predicate overloads (type guards) narrow the output type

@see https://utils.duplojs.dev/en/v1/api/pattern/isMatch

@namespace P
