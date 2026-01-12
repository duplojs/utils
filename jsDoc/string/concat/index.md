Concatenates strings into a new string.

**Supported call styles:**
- Classic: `concat(input, text, ...textsRest)` → returns a new string
- Curried: `concat(text)` → returns a function waiting for the input

The input string is not mutated.

```ts
{@include string/concat/example.ts[3,11]}
```

@remarks
- Classic style supports concatenating multiple strings via rest parameters
- Curried style concatenates only two strings (`text` into `input`)
- Uses the same semantics as [`String.prototype.concat`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/concat)

@see https://utils.duplojs.dev/en/v1/api/string/concat

@namespace S
