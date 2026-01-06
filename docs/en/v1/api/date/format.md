---
outline: [2, 3]
description: "The format() function displays a TheDate using a custom format string and the chosen timezone."
prev:
  text: "toISOString"
  link: "/en/v1/api/date/toISOString"
next:
  text: "isSafeTimestamp"
  link: "/en/v1/api/date/isSafeTimestamp"
---

# format

The **`format()`** function displays a `TheDate` using a custom format string and the chosen timezone.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/date/format/tryout.doc.ts"
  majorVersion="v1"
  height="280px"
/>

## Syntax

```typescript
function format<
	GenericInput extends TheDate,
	GenericFormat extends string,
	GenericTimezone extends Timezone
>(
	formatString: GenericFormat,
	timezone: GenericTimezone
): (input: GenericInput) => string
```

```typescript
function format<
	GenericInput extends TheDate,
	GenericFormat extends string,
	GenericTimezone extends Timezone
>(
	input: GenericInput,
	formatString: GenericFormat,
	timezone: GenericTimezone
): string
```

## Parameters

- `input`: `TheDate` value (classic signature only).
- `formatString`: Format string.
- `timezone`: IANA timezone.

## Return value

Formatted string based on the provided tokens.

## Available tokens

- `YYYY`: 4-digit year
- `YY`: 2-digit year
- `MM`: 2-digit month
- `DD`: 2-digit day
- `HH`: 2-digit hour (24h)
- `mm`: 2-digit minutes
- `ss`: 2-digit seconds
- `SSS`: milliseconds
- `ZZ`: timezone (IANA)

## See also

- [`toISOString`](/en/v1/api/date/toISOString)
- [`toTimestamp`](/en/v1/api/date/toTimestamp)
- [`toNative`](/en/v1/api/date/toNative)
