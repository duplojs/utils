Extracts details about the first match of a pattern in a string.

**Supported call styles:**
- Classic: `extract(input, pattern)` → returns an ExtractResult or `undefined`
- Curried: `extract(pattern)` → returns a function waiting for the input

The input string is not mutated.

```ts
{@include string/extract/example.ts[3,20]}
```

@remarks
- Uses the same semantics as [`String.prototype.match`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match)

@see https://utils.duplojs.dev/en/v1/api/string/extract

@namespace S
