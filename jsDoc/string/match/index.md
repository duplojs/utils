Finds the first match of a pattern in a string.

@deprecated Use `extract` instead.

**Supported call styles:**
- Classic: `match(input, pattern)` → returns a match array or `undefined`
- Curried: `match(pattern)` → returns a function waiting for the input

The input string is not mutated.

```ts
{@include string/match/example.ts[3,11]}
```

@remarks
- Uses the same semantics as [`String.prototype.match`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match)

@see https://utils.duplojs.dev/en/v1/api/string/match

@namespace S
