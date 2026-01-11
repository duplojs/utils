Clamps a timestamp to the supported safe range.

Signature: `makeSafeTimestamp(input)` → returns a value

The input value is not mutated.

```ts
{@include date/makeSafeTimestamp/example.ts[3,10]}
```

@remarks
- Rounds non-integers, replaces NaN with 0, and clamps to min/max bounds.

@see https://utils.duplojs.dev/en/v1/api/date/makeSafeTimestamp

@namespace D
