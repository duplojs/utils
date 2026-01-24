Extracts details about all matches of a pattern in a string.

**Supported call styles:**
- Classic: `extractAll(input, pattern)` → returns a generator of ExtractResult
- Curried: `extractAll(pattern)` → returns a function waiting for the input

The input string is not mutated.

```ts
{@include string/extractAll/example.ts[3,20]}
```

@remarks
- Uses the same semantics as [`String.prototype.matchAll`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/matchAll)

@see https://utils.duplojs.dev/en/v1/api/string/extractAll

@namespace S
