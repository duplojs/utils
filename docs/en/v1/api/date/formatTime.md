---
outline: [2, 3]
description: "The formatTime() function formats a TheTime using a custom format string."
prev:
  text: "format"
  link: "/en/v1/api/date/format"
next:
  text: "isSafeTimestamp"
  link: "/en/v1/api/date/isSafeTimestamp"
---

# formatTime

The **`formatTime()`** function formats a `TheTime` using a custom format string.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/date/formatTime/tryout.doc.ts"
  majorVersion="v1"
  height="208px"
/>

## Syntax

### Curried signature

```typescript
function formatTime<
	GenericInput extends TheTime,
	GenericFormat extends string
>(
	formatString: GenericFormat
): (input: GenericInput) => string
```

### Classic signature

```typescript
function formatTime<
	GenericInput extends TheTime,
	GenericFormat extends string
>(
	input: GenericInput,
	formatString: GenericFormat
): string
```

## Parameters

- `input`: `TheTime` value (classic signature only).
- `formatString`: Format string.

## Return value

Formatted string based on the provided tokens.

## Available tokens

- `WW`: 2-digit weeks
- `DD`: 2-digit days
- `HH`: 2-digit hours
- `mm`: 2-digit minutes
- `ss`: 2-digit seconds
- `SSS`: 3-digit milliseconds

## See also

- [`format`](/en/v1/api/date/format)
- [`toTimeValue`](/en/v1/api/date/toTimeValue)
