Represents an immutable time value object (`TheTime`) stored in milliseconds.

Signature: `TheTime` → immutable class-like value object

`TheTime` solves unit-fragmentation issues (`hours`, `minutes`, `seconds`) by using a single safe millisecond representation while keeping strong typing and explicit serialization.

```ts
{@include date/theTime/example.ts[3,20]}
```

@remarks
- `TheTime` is not a `number`, but it behaves as an immutable numeric time value.
- Date unit operators (`addMinutes`, `subtractDays`, etc.) target `TheDate`; `TheTime` is used as a normalized duration value.
- Use `D.serialize(theTime)` to convert to `SerializedTheTime`.
- Use `D.createTime(...)` / `D.createTimeOrThrow(...)` to construct instances.

@see https://utils.duplojs.dev/en/v1/api/date/theTime
@see https://utils.duplojs.dev/en/v1/api/date/serialize
@see https://utils.duplojs.dev/en/v1/api/date/createTime

@namespace D
