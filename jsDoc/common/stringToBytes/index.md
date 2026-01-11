The stringToBytes() function converts a size ("10mb", "2gb", etc.) or a number into bytes. It throws a typed error if the format is invalid.

Signature: `stringToBytes(value)` → returns a value

The input value is not mutated.

```ts
{@include common/stringToBytes/example.ts[3,4]}
```

@see https://utils.duplojs.dev/en/v1/api/common/stringToBytes

@namespace C
