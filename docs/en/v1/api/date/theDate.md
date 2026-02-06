---
outline: [2, 3]
description: "TheDate is an immutable class extending Date. SerializedTheDate is its serialized format (`date${number}${\"+\" | \"-\"}`) for transport."
prev:
  text: "Date"
  link: "/en/v1/api/date/"
next:
  text: "TheTime"
  link: "/en/v1/api/date/theTime"
---

# TheDate

**`TheDate`** is an immutable class extending `Date` to manipulate date-time values without accidental mutation.
**`SerializedTheDate`** is its serialized format for transport and text storage.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/date/theDate/tryout.doc.ts"
  majorVersion="v1"
  height="334px"
/>

## Syntax

```typescript
class TheDate extends Date
type SerializedTheDate = `date${number}${"-" | "+"}`
```

## Relation between TheDate and SerializedTheDate

- `TheDate`: immutable object for application logic.
- `SerializedTheDate`: serialized representation for HTTP, JSON, or text storage.
- Object -> serialized conversion: `D.serialize(theDate)`.
- Serialized -> object conversion: `D.create(serialized)` or `D.createOrThrow(serialized)`.

## Use cases

- Safely manipulate date values (`addDays`, `getYear`, `format`) with an immutable object.
- Explicitly serialize when leaving the app boundary (API, message bus, text cache).

## See also

- [`create`](/en/v1/api/date/create) - Builds a `TheDate` from multiple input formats.
- [`serialize`](/en/v1/api/date/serialize) - Converts `TheDate` to `SerializedTheDate`.
- [`isSerializedTheDate`](/en/v1/api/date/isSerializedTheDate) - Validates the serialized format.
