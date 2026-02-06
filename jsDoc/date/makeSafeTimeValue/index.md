Normalizes a time value into the supported safe range.

Signature: `makeSafeTimeValue(timeValue)` → `number`

```ts
{@include date/makeSafeTimeValue/example.ts[3,11]}
```

@remarks
- `NaN` becomes `0`.
- Floating values are rounded.
- Values outside bounds are clamped.

@see https://utils.duplojs.dev/en/v1/api/date/makeSafeTimeValue

@namespace D
