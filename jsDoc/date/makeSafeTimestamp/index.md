Normalizes a timestamp into the supported safe range.

Signature: `makeSafeTimestamp(timestamp)` → `number`

```ts
{@include date/makeSafeTimestamp/example.ts[3,11]}
```

@remarks
- `NaN` becomes `0`.
- Floating values are rounded.
- Values outside bounds are clamped.

@see https://utils.duplojs.dev/en/v1/api/date/makeSafeTimestamp

@namespace D
