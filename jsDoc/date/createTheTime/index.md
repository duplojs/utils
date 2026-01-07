Creates a TheTime from a time value in milliseconds.

Signature: `createTheTime(input)` → returns a value

The input value is not mutated.

```ts
{@include date/createTheTime/example.ts[3,7]}
```

@remarks
- The input is rounded and clamped to the supported time range.

@see https://utils.duplojs.dev/en/v1/api/date/createTheTime

@namespace D
