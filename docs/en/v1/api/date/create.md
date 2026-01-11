---
outline: [2, 3]
description: "The create() function builds a TheDate from a Date, a timestamp, or a literal partition (YYYY-MM-DD). It returns an Either (MayBe) containing either the valid date or a typed error."
prev:
  text: "Date"
  link: "/en/v1/api/date/"
next:
  text: "createOrThrow"
  link: "/en/v1/api/date/createOrThrow"
---

# create

The **`create()`** function builds a `TheDate` from a `Date`, a timestamp, or a literal partition (`YYYY-MM-DD`). It can also assemble a `SpoolingDate` (source + overrides + timezone). It returns an `Either` (`MayBe`) containing either the valid date or a typed error.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/date/create/tryout.doc.ts"
  majorVersion="v1"
  height="640px"
/>

## Syntax

```typescript
function create<
	GenericInput extends TheDate | Date | number
>(
	input: GenericInput
): MayBe

function create<
	GenericInput extends SpoolingDate
>(
	input: GenericInput
): MayBe

function create<
	GenericInput extends `${number}-${MonthWithDay}`
>(
	input: GenericInput & YearConstraint,
	params?: { hour?: Hour; minute?: Minute; second?: Second; millisecond?: Millisecond }
): TheDate
```

`YearConstraint` ensures that February 29 is only accepted when the year is a leap year and that the defined year stays within supported limits.

:::info
The second declaration is only for declaring known constant dates ahead of time. Very useful for unit tests or default values.
:::

## Parameters

- `input`: Source date. Accepts a `TheDate`, a `Date`, a timestamp, a `YYYY-MM-DD` string (negative prefix accepted for BC years), or a `SpoolingDate` (`value` as `Date`/timestamp/`TheDate`/ISO `YYYY-MM-DD` optionally with time) with overrides (`year`, `month`, `day`, `hour`, `minute`, `second`, `millisecond`) and an optional `timezone`.
- `params`: Optional. Lets you directly provide time components (`hour`, `minute`, `second`, `millisecond`).

## Return value

- Generic signature: `EitherRight<"date-created", TheDate>` on success or `EitherLeft<"date-created-error", null>` on failure.
- Literal signature: directly returns a `TheDate` if the date is valid, otherwise a compile-time error.
- With `SpoolingDate`: returns a `MayBe` after applying overrides and an optional timezone.

## Supported formats

- Native `Date`
- Timestamp (`number`)
- `TheDate` (`date{timestamp}{+|-}`)
- `YYYY-MM-DD` string (optionally ISO timestamp when using `SpoolingDate`)
- `SpoolingDate` with `timezone` and date/time overrides

## See also

- [`createOrThrow`](/en/v1/api/date/createOrThrow) – Throws instead of returning an `Either`.
- [`isSafeTimestamp`](/en/v1/api/date/isSafeTimestamp) – Checks whether a timestamp is usable.

## Sources

- [MDN Web Docs - Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)
