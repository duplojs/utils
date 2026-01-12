Creates a TheDate from a timestamp in milliseconds.

Signature: `createTheDate(input)` → returns a value

The input value is not mutated.

```ts
{@include date/createTheDate/example.ts[3,10]}
```

@remarks
- The input is rounded and clamped to the supported timestamp range.

@see https://utils.duplojs.dev/en/v1/api/date/createTheDate

@namespace D
