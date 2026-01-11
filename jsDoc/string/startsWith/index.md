Checks whether a string starts with a substring.

**Supported call styles:**
- Classic: `startsWith(input, searchString)` → returns a boolean
- Curried: `startsWith(searchString)` → returns a function waiting for the input
- Classic predicate: `startsWith(input, searchString)` → narrows the string type
- Curried predicate: `startsWith(searchString)` → narrows the string type

The input string is not mutated.

```ts
{@include string/startsWith/example.ts[3,20]}
```

@remarks
- Predicate overloads (type guards) narrow the output type
- Uses the same semantics as [`String.prototype.startsWith`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/startsWith)

@see https://utils.duplojs.dev/en/v1/api/string/startsWith

@namespace S
