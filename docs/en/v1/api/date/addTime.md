---
outline: [2, 3]
prev:
  text: "addMilliseconds"
  link: "/en/v1/api/date/addMilliseconds"
next:
  text: "subtractYears"
  link: "/en/v1/api/date/subtractYears"
---

# addTime

The **`addTime()`** function adds a `TheTime` duration to a `TheDate` or another `TheTime`.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/date/addTime/tryout.doc.ts"
  majorVersion="v1"
  height="250px"
/>

## Syntax

### Classic signature

```typescript
function addTime<
	GenericInput extends TheDate
>(
	input: GenericInput,
	time: TheTime
): TheDate

function addTime<
	GenericInput extends TheTime
>(
	input: GenericInput,
	time: TheTime
): TheTime
```

### Curried signature

```typescript
function addTime<
	GenericInput extends TheDate
>(
	time: TheTime
): (input: GenericInput) => TheDate

function addTime<
	GenericInput extends TheTime
>(
	time: TheTime
): (input: GenericInput) => TheTime
```

## Parameters

- `time`: Duration to add as a `TheTime`.
- `input`: `TheDate` or `TheTime` to adjust.

## Return value

A `TheDate` or `TheTime` with the added duration.

## See also

- [`createTime`](/en/v1/api/date/createTime)
- [`subtractTime`](/en/v1/api/date/subtractTime)
