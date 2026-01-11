Replaces the first match in a string.

**Supported call styles:**
- Classic: `replace(input, pattern, replacement)` → returns a new string
- Curried: `replace(pattern, replacement)` → returns a function waiting for the input

The input string is not mutated.

```ts
{@include string/replace/example.ts[3,11]}
```

@remarks
- Only the first occurrence is replaced
- Uses the same semantics as [`String.prototype.replace`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace)

@see https://utils.duplojs.dev/en/v1/api/string/replace

@namespace S
