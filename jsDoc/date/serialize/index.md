Serializes immutable date values into their string literal formats.

Supported call styles:
- Classic: `serialize(input)` where `input` is `TheDate` or `TheTime`
- Curried: not supported

`TheDate` values are serialized to `SerializedTheDate` (`date${number}${"+" | "-"}`), and `TheTime` values are serialized to `SerializedTheTime` (`time${number}${"+" | "-"}`).

```ts
{@include date/serialize/example.ts[3,16]}
```

@remarks
- This function is the string bridge between immutable classes (`TheDate`, `TheTime`) and serialized literal types (`SerializedTheDate`, `SerializedTheTime`).

@see https://utils.duplojs.dev/en/v1/api/date/serialize
@see https://utils.duplojs.dev/en/v1/api/date/theDate
@see https://utils.duplojs.dev/en/v1/api/date/theTime

@namespace D
