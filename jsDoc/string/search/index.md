Searches a string for a pattern and returns the index.

**Supported call styles:**
- Classic: `search(input, pattern)` → returns an index or `undefined`
- Curried: `search(pattern)` → returns a function waiting for the input

The input string is not mutated.

```ts
{@include string/search/example.ts[3,11]}
```

@remarks
- Returns `undefined` when the pattern is not found
- Uses the same semantics as [`String.prototype.search`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search)

@see https://utils.duplojs.dev/en/v1/api/string/search

@namespace S
