Checks whether a string is a valid `SerializedTheDate`.

Signature: `isSerializedTheDate(input)` → returns a value

The input value is not mutated.

```ts
{@include date/isSerializedTheDate/example.ts[3,13]}
```

@remarks
- A valid serialized date follows the pattern `date${number}${"+" | "-"}` and must contain a safe timestamp value.

@see https://utils.duplojs.dev/en/v1/api/date/isSerializedTheDate

@namespace D
