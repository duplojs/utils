Returns the character at a given index.

**Supported call styles:**
- Classic: `at(input, index)` → returns a character or `undefined`
- Curried: `at(index)` → returns a function waiting for the input

Negative indexes count from the end.
The input string is not mutated.

```ts
{@include string/at/example.ts[3,11]}
```

@remarks
- Uses the same semantics as [`String.prototype.at`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/at)

@see https://utils.duplojs.dev/en/v1/api/string/at

@namespace S
