Clamps a time value to the supported safe range.

Signature: `makeSafeTimeValue(input)` → returns a value

The input value is not mutated.

```ts
{@include date/makeSafeTimeValue/example.ts[3,10]}
```

@remarks
- Rounds non-integers, replaces NaN with 0, and clamps to min/max bounds.

@see https://utils.duplojs.dev/en/v1/api/date/makeSafeTimeValue

@namespace D
