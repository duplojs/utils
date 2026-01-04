Slices a portion of a string.

**Supported call styles:**
- Classic: `slice(input, start, end?)` → returns a substring
- Curried: `slice(start, end?)` → returns a function waiting for the input

The input string is not mutated.

```ts
{@include string/slice/example.ts[3,11]}
```

@remarks
- Uses the same semantics as [`String.prototype.slice`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice)

@see https://utils.duplojs.dev/en/v1/api/string/slice

@namespace S
