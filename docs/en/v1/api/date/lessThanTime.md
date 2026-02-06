---
outline: [2, 3]
prev:
  text: "lessTime"
  link: "/en/v1/api/date/lessTime"
next:
  text: "betweenTime"
  link: "/en/v1/api/date/betweenTime"
---

# lessThanTime

Checks whether a `TheTime` is strictly less than a threshold.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/date/lessThanTime/tryout.doc.ts"
  majorVersion="v1"
  height="187px"
/>

## Syntax

### Standard signature

```typescript
function lessThanTime<
	GenericInput extends TheTime | SerializedTheTime
>(
	input: GenericInput,
	threshold: TheTime | SerializedTheTime
): boolean
```

### Curried signature

```typescript
function lessThanTime<
	GenericInput extends TheTime | SerializedTheTime
>(
	threshold: TheTime | SerializedTheTime
): (input: GenericInput) => boolean
```

## Parameters

- `threshold`: Duration limit.
- `input`: `TheTime` or `SerializedTheTime`.

## Return value

`true` if `input` is strictly less than the threshold.

## See also

- [`lessTime`](/en/v1/api/date/lessTime)
- [`greaterThanTime`](/en/v1/api/date/greaterThanTime)
