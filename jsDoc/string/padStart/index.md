Pads a string at the start to reach a target length.

**Supported call styles:**
- Classic: `padStart(input, targetLength, padString)` → returns a padded string
- Curried: `padStart(targetLength, padString)` → returns a function waiting for the input

The input string is not mutated.

```ts
{@include string/padStart/example.ts[3,11]}
```

@remarks
- Uses the same semantics as [`String.prototype.padStart`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padStart)

@see https://utils.duplojs.dev/en/v1/api/string/padStart

@namespace S
