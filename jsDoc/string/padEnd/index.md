Pads a string at the end to reach a target length.

**Supported call styles:**
- Classic: `padEnd(input, targetLength, padString)` → returns a padded string
- Curried: `padEnd(targetLength, padString)` → returns a function waiting for the input

The input string is not mutated.

```ts
{@include string/padEnd/example.ts[3,11]}
```

@remarks
- Uses the same semantics as [`String.prototype.padEnd`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padEnd)

@see https://utils.duplojs.dev/en/v1/api/string/padEnd

@namespace S
