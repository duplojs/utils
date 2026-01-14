---
outline: [2, 3]
description: "The sleep() function creates an asynchronous pause for a number of milliseconds."
prev:
  text: "asyncRetry"
  link: "/en/v1/api/common/asyncRetry"
next:
  text: "memo"
  link: "/en/v1/api/common/memo"
---

# sleep

The **`sleep()`** function creates an asynchronous pause for a number of milliseconds.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/common/sleep/tryout.doc.ts"
  majorVersion="v1"
  height="208px"
/>

## Syntax

```typescript
function sleep(millieSeconde?: number): Promise<void>;
```

## Parameters

- `millieSeconde` : Duration in milliseconds (optional, `0` by default).

## Return value

A promise that resolves after the indicated duration.

## See also

- [`asyncRetry`](/en/v1/api/common/asyncRetry) - May use pauses between attempts
- [`asyncLoop`](/en/v1/api/common/asyncLoop) - Asynchronous loop that can include delays
