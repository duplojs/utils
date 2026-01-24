Finds all matches of a pattern in a string.

@deprecated Use `extractAll` instead.

**Supported call styles:**
- Classic: `matchAll(input, pattern)` → returns an iterator of matches
- Curried: `matchAll(pattern)` → returns a function waiting for the input

The input string is not mutated.

```ts
{@include string/matchAll/example.ts[3,18]}
```

@remarks
- Uses the same semantics as [`String.prototype.matchAll`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/matchAll)

@see https://utils.duplojs.dev/en/v1/api/string/matchAll

@namespace S
