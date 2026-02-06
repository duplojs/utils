---
outline: [2, 3]
prev:
  text: "greaterTime"
  link: "/en/v1/api/date/greaterTime"
next:
  text: "lessTime"
  link: "/en/v1/api/date/lessTime"
---

# greaterThanTime

Checks whether a `TheTime` is strictly greater than a threshold.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/date/greaterThanTime/tryout.doc.ts"
  majorVersion="v1"
  height="187px"
/>

## Syntax

### Standard signature

```typescript
function greaterThanTime<
	GenericInput extends TheTime | SerializedTheTime
>(
	input: GenericInput,
	threshold: TheTime | SerializedTheTime
): boolean
```

### Curried signature

```typescript
function greaterThanTime<
	GenericInput extends TheTime | SerializedTheTime
>(
	threshold: TheTime | SerializedTheTime
): (input: GenericInput) => boolean
```

## Parameters

- `threshold`: Duration limit.
- `input`: `TheTime` or `SerializedTheTime`.

## Return value

`true` if `input` is strictly greater than the threshold.

## See also

- [`greaterTime`](/en/v1/api/date/greaterTime)
- [`lessThanTime`](/en/v1/api/date/lessThanTime)
