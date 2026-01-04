Splits a string into an array of substrings.

**Supported call styles:**
- Classic: `split(input, separator, params?)` → returns an array of strings
- Curried: `split(separator)` → returns a function waiting for the input

The input string is not mutated.

```ts
{@include string/split/example.ts[3,11]}
```

@remarks
- Uses the same semantics as [`String.prototype.split`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split)

@see https://utils.duplojs.dev/en/v1/api/string/split

@namespace S
