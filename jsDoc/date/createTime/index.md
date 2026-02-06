Creates a `TheTime` (normalized duration) from numeric or structured inputs.

Signature: `createTime(input, unit?)` → `TheTime | Either<"time-created", TheTime>`

The return type depends on the overload:
- Literal `number + unit` overload returns `TheTime` directly.
- Runtime inputs (`number`, `SerializedTheTime`, `SpoolingTime`, `TheTime`) can return `Either`.

```ts
{@include date/createTime/example.ts[3,18]}
```

@remarks
- `TheTime` represents a duration, not a calendar date.

@see https://utils.duplojs.dev/en/v1/api/date/createTime
@see https://utils.duplojs.dev/en/v1/api/date/createTimeOrThrow

@namespace D
