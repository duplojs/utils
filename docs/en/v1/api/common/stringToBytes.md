---
outline: [2, 3]
prev:
  text: "stringToMillisecond"
  link: "/en/v1/api/common/stringToMillisecond"
next:
  text: "escapeRegExp"
  link: "/en/v1/api/common/escapeRegExp"
---

# stringToBytes

The **`stringToBytes()`** function converts a size (`"10mb"`, `"2gb"`, etc.) or a number into bytes. It throws a typed error if the format is invalid.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/common/stringToBytes/tryout.doc.ts"
  majorVersion="v1"
  height="200px"
/>

## Syntax

```typescript
const unitMapper: {
    b: number;
    kb: number;
    mb: number;
    gb: number;
    tb: number;
    pb: number;
};

type BytesInString = `${number}${keyof typeof unitMapper}`;

function stringToBytes(
	bytesInString: BytesInString | number
): number;
```

## Parameters

- `bytesInString` : Size as a string (with unit) or number.

## Return value

A number representing the size in bytes.

## See also

- [`stringToMillisecond`](/en/v1/api/common/stringToMillisecond) - Conversion of durations
