---
outline: [2, 3]
description: "TheTime is an immutable class representing a normalized signed duration. SerializedTheTime is its serialized format (`time${number}${\"+\" | \"-\"}`)."
prev:
  text: "theDate"
  link: "/en/v1/api/date/theDate"
next:
  text: "create"
  link: "/en/v1/api/date/create"
---

# TheTime

**`TheTime`** is an immutable class representing a type-safe signed duration value in milliseconds.
It is used in the date namespace context, especially with **`TheDate`** (for example: `addTime`, `subtractTime`, `formatTime`).

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/date/theTime/tryout.doc.ts"
  majorVersion="v1"
  height="355px"
/>

## Syntax

```typescript
class TheTime {}
type SerializedTheTime = `time${number}${"-" | "+"}`
```

## Relation between TheTime and SerializedTheTime

- `TheTime`: immutable object for duration calculations in date APIs.
- `SerializedTheTime`: serialized representation for transport/text storage.
- Object -> serialized conversion: `D.serialize(theTime)`.
- Serialized -> object conversion: `D.createTime(serialized)` or `D.createTimeOrThrow(serialized)`.
- `TheTime` values can be positive or negative; they are not absolute by default.

## Use cases

- Represent a normalized duration (hours, minutes, seconds) as an immutable value.
- Represent forward and backward offsets (positive or negative durations).
- Add or subtract duration from a date (`TheDate`) with `addTime` and `subtractTime`.
- Format durations with `formatTime`.

## See also

- [`createTime`](/en/v1/api/date/createTime) - Builds a `TheTime` value.
- [`serialize`](/en/v1/api/date/serialize) - Converts `TheTime` to `SerializedTheTime`.
- [`addTime`](/en/v1/api/date/addTime) - Adds a duration to `TheDate` or `TheTime`.
