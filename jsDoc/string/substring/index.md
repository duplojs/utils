Extracts a substring from a string.

**Supported call styles:**
- Classic: `substring(input, start, end?)` → returns a substring
- Curried: `substring(start, end?)` → returns a function waiting for the input

The input string is not mutated.

```ts
{@include string/substring/example.ts[3,11]}
```

@remarks
- Uses the same semantics as [`String.prototype.substring`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substring)

@see https://utils.duplojs.dev/en/v1/api/string/substring

@namespace S
