---
outline: [2, 3]
prev:
  text: "Date"
  link: "/en/v1/api/date/"
next:
  text: "createOrThrow"
  link: "/en/v1/api/date/createOrThrow"
---

# create

The **`create()`** function builds a `TheDate` from a `Date`, a timestamp, or a literal partition (`YYYY-MM-DD`). It returns an `Either` (`MayBe`) containing either the valid date or a typed error.

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

- `input`: Source date (`TheDate`, `Date`, timestamp, or string). Strings follow the `YYYY-MM-DD` format (negative prefix accepted for BC years).
- `params`: Optional. Lets you directly provide time components (`hour`, `minute`, `second`, `millisecond`).

## Return value

- Generic signature: `EitherRight<"date-created", TheDate>` on success or `EitherLeft<"date-created-error", null>` on failure.
- Literal signature: directly returns a `TheDate` if the date is valid, otherwise a compile-time error.

## See also

- [`createOrThrow`](/en/v1/api/date/createOrThrow) – Throws instead of returning an `Either`.
- [`isSafeTimestamp`](/en/v1/api/date/isSafeTimestamp) – Checks whether a timestamp is usable.

## Sources

- [MDN Web Docs - Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)
