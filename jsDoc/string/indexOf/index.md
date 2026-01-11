Finds the first index of a substring.

**Supported call styles:**
- Classic: `indexOf(input, searchString, position?)` → returns an index or `undefined`
- Curried: `indexOf(searchString)` → returns a function waiting for the input

The input string is not mutated.

```ts
{@include string/indexOf/example.ts[3,11]}
```

@remarks
- Returns `undefined` when the substring is not found
- Uses the same semantics as [`String.prototype.indexOf`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf)

@see https://utils.duplojs.dev/en/v1/api/string/indexOf

@namespace S
