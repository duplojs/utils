---
outline: [2, 3]
prev:
  text: "maxTime"
  link: "/en/v1/api/date/maxTime"
next:
  text: "min"
  link: "/en/v1/api/date/min"
---

# minTime

The **`minTime()`** function returns the smallest duration of a tuple of `TheTime`.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/date/minTime/tryout.doc.ts"
  majorVersion="v1"
  height="208px"
/>

## Syntax

```typescript
function minTime<
  GenericInput extends AnyTuple<TheTime>
>(input: GenericInput): TheTime
```

## Parameters

- `input`: Tuple of durations in `TheTime` format.

## Return value

The minimum duration of the tuple, as a `TheTime`.

## See also

- [`maxTime`](/en/v1/api/date/maxTime)
