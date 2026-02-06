Checks whether a string is a valid `SerializedTheTime`.

Signature: `isSerializedTheTime(input)` → returns a value

The input value is not mutated.

```ts
{@include date/isSerializedTheTime/example.ts[3,13]}
```

@remarks
- A valid serialized time follows the pattern `time${number}${"+" | "-"}` and must contain a safe time value.

@see https://utils.duplojs.dev/en/v1/api/date/isSerializedTheTime

@namespace D
