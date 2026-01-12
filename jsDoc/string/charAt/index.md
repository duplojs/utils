Returns the character at the given index.

**Supported call styles:**
- Classic: `charAt(input, index)` → returns a character
- Curried: `charAt(index)` → returns a function waiting for the input

The input string is not mutated.

```ts
{@include string/charAt/example.ts[3,11]}
```

@remarks
- Uses the same semantics as [`String.prototype.charAt`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charAt)

@see https://utils.duplojs.dev/en/v1/api/string/charAt

@namespace S
