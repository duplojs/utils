---
outline: [2, 3]
prev:
  text: "toString"
  link: "/en/v1/api/common/toString"
next:
  text: "stringToBytes"
  link: "/en/v1/api/common/stringToBytes"
---

# stringToMillisecond

The **`stringToMillisecond()`** function converts durations expressed as a string (`"10s"`, `"2h"`, `"1.5d"`, etc.) or a number into milliseconds. It throws a typed error if the format is invalid.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/common/stringToMillisecond/tryout.doc.ts"
  majorVersion="v1"
  height="220px"
/>

## Syntax

```typescript
const unitMapper: {
    ms: number;
    s: number;
    m: number;
    h: number;
    d: number;
    w: number;
};

type MillisecondInString =
	`${number}${keyof typeof unitMapper}` |
	`${number}.${number}${keyof typeof unitMapper}`;

function stringToMillisecond(
	millisecondInString: MillisecondInString | number,
	...millisecondInStrings: (MillisecondInString | number)[]
): number;
```

## Parameters

- `millisecondInString` : Main duration as a string or number.
- `millisecondInStrings` : Additional durations to add (optional).

## Return value

A number of milliseconds corresponding to the sum of the provided durations.

## See also

- [`stringToBytes`](/en/v1/api/common/stringToBytes) - Conversion of sizes to bytes
