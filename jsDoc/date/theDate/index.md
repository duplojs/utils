Represents an immutable date-time object (`TheDate`) based on UTC.

Signature: `TheDate` → immutable class extending `Date`

`TheDate` solves two recurring problems: accidental mutation of native `Date`, and ambiguity between object dates and transport formats. You manipulate a stable object in code, and serialize it explicitly when you need to cross process boundaries.

```ts
{@include date/theDate/example.ts[3,23]}
```

@remarks
- `TheDate` is immutable: mutation methods from `Date` are intentionally disabled.
- Use `D.serialize(theDate)` to convert to `SerializedTheDate`.
- Use `D.create(...)` / `D.createOrThrow(...)` to construct instances.

@see https://utils.duplojs.dev/en/v1/api/date/theDate
@see https://utils.duplojs.dev/en/v1/api/date/serialize
@see https://utils.duplojs.dev/en/v1/api/date/create

@namespace D
