Returns the arctangent of the quotient of its arguments.

**Supported call styles:**
- Classic: `atan2(axisY, axisX)` → returns a number
- Curried: `atan2(axisX)` → returns a function waiting for axisY

```ts
{@include number/atan2/example.ts[3,11]}
```

@remarks
- Uses the same semantics as [`Math.atan2`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/atan2)

@see https://utils.duplojs.dev/en/v1/api/number/atan2

@namespace N
