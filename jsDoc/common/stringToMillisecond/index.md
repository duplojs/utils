The stringToMillisecond() function converts durations expressed as a string ("10s", "2h", "1.5d", etc.) or a number into milliseconds. It throws a typed error if the format is invalid.

Signature: `stringToMillisecond(value)` → returns a value

The input value is not mutated.

```ts
{@include common/stringToMillisecond/example.ts[3,4]}
```

@see https://utils.duplojs.dev/en/v1/api/common/stringToMillisecond
