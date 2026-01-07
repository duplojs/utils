Creates a TheTime from a time value, unit, or spooling time input.

Signature: `createTime(input, unit?)` → returns a value

The input value is not mutated.

```ts
{@include date/createTime/example.ts[3,21]}
```

@remarks
- Returns an Either tagged "time-created" or "time-created-error" for unsafe inputs.

@see https://utils.duplojs.dev/en/v1/api/date/createTime

@namespace D
