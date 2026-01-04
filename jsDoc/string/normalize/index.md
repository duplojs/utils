Normalizes a string using the specified Unicode normalization form.

**Supported call styles:**
- Classic: `normalize(input, form)` → returns a normalized string
- Curried: `normalize(form)` → returns a function waiting for the input

The input string is not mutated.

```ts
{@include string/normalize/example.ts[3,11]}
```

@remarks
- Uses the same semantics as [`String.prototype.normalize`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/normalize)

@see https://utils.duplojs.dev/en/v1/api/string/normalize

@namespace S
