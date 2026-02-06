---
outline: [2, 3]
prev:
  text: "subtractMilliseconds"
  link: "/en/v1/api/date/subtractMilliseconds"
next:
  text: "greater"
  link: "/en/v1/api/date/greater"
---

# subtractTime

The **`subtractTime()`** function subtracts a `TheTime` duration from a `TheDate` or another `TheTime`.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/date/subtractTime/tryout.doc.ts"
  majorVersion="v1"
  height="250px"
/>

## Syntax

### Classic signature

```typescript
function subtractTime<
	GenericInput extends TheDate | SerializedTheDate
>(
	input: GenericInput,
	time: TheTime | SerializedTheTime
): TheDate

function subtractTime<
	GenericInput extends TheTime | SerializedTheTime
>(
	input: GenericInput,
	time: TheTime | SerializedTheTime
): TheTime
```

### Curried signature

```typescript
function subtractTime<
	GenericInput extends TheDate | SerializedTheDate
>(
	time: TheTime | SerializedTheTime
): (input: GenericInput) => TheDate

function subtractTime<
	GenericInput extends TheTime | SerializedTheTime
>(
	time: TheTime | SerializedTheTime
): (input: GenericInput) => TheTime
```

## Parameters

- `time`: Duration to subtract as a `TheTime`.
- `input`: `TheDate`, `SerializedTheDate`, `TheTime`, or `SerializedTheTime` to adjust.

## Return value

A `TheDate` or `TheTime` with the duration removed.

## See also

- [`addTime`](/en/v1/api/date/addTime)
- [`createTime`](/en/v1/api/date/createTime)
