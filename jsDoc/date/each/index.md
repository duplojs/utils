Creates an iterator over a date range with a chosen unit step.

Signature: `each(range, unit?)` → `Iterator<TheDate>`

```ts
{@include date/each/example.ts[3,18]}
```

@remarks
- Supports ascending and descending ranges.
- Includes the end value when exactly aligned with step boundaries.

@see https://utils.duplojs.dev/en/v1/api/date/each

@namespace D
