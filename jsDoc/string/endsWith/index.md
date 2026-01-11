Checks whether a string ends with a substring.

**Supported call styles:**
- Classic: `endsWith(input, searchString)` → returns a boolean
- Curried: `endsWith(searchString)` → returns a function waiting for the input
- Classic predicate: `endsWith(input, searchString)` → narrows the string type
- Curried predicate: `endsWith(searchString)` → narrows the string type

The input string is not mutated.

```ts
{@include string/endsWith/example.ts[3,20]}
```

@remarks
- Predicate overloads (type guards) narrow the output type
- Uses the same semantics as [`String.prototype.endsWith`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/endsWith)

@see https://utils.duplojs.dev/en/v1/api/string/endsWith

@namespace S
