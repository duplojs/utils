---
outline: [2, 3]
prev:
  text: "max"
  link: "/en/v1/api/date/max"
next:
  text: "minTime"
  link: "/en/v1/api/date/minTime"
---

# maxTime

The **`maxTime()`** function returns the largest duration of a tuple of `TheTime`.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/date/maxTime/tryout.doc.ts"
  majorVersion="v1"
  height="208px"
/>

## Syntax

```typescript
function maxTime<
  GenericInput extends AnyTuple<TheTime | SerializedTheTime>
>(input: GenericInput): TheTime
```

## Parameters

- `input`: Tuple of `TheTime` or `SerializedTheTime` values.

## Return value

The maximum duration of the tuple, as a `TheTime`.

## See also

- [`minTime`](/en/v1/api/date/minTime)
