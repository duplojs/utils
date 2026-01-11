Replaces all matches in a string.

**Supported call styles:**
- Classic: `replaceAll(input, pattern, replacement)` → returns a new string
- Curried: `replaceAll(pattern, replacement)` → returns a function waiting for the input

The input string is not mutated.

```ts
{@include string/replaceAll/example.ts[3,11]}
```

@remarks
- Uses the same semantics as [`String.prototype.replaceAll`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replaceAll)

@see https://utils.duplojs.dev/en/v1/api/string/replaceAll

@namespace S
