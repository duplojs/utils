Creates a TheDate from various inputs.

Signature: `create(input)` → returns a value

The input value is not mutated.

```ts
{@include date/create/example.ts[3,36]}
```

@remarks
- Returns an Either tagged "date-created" or "date-created-error" for invalid inputs.

@see https://utils.duplojs.dev/en/v1/api/date/create

@namespace D
