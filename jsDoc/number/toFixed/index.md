Formats a number using fixed-point notation.

**Supported call styles:**
- Classic: `toFixed(value, digits)` → returns a string
- Curried: `toFixed(digits)` → returns a function waiting for the value

```ts
{@include number/toFixed/example.ts[3,17]}
```

@remarks
- Uses the same semantics as [`Number.prototype.toFixed`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed)

@see https://utils.duplojs.dev/en/v1/api/number/toFixed

@namespace N
