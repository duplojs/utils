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

Checks whether a `TheTime` is less than or equal to a threshold.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/date/lessThanTime/tryout.doc.ts"
  majorVersion="v1"
  height="300px"
/>

## Syntax

### Standard signature

```typescript
function lessThanTime<
	GenericInput extends TheTime
>(
	input: GenericInput,
	threshold: TheTime
): boolean
```

### Curried signature

```typescript
function lessThanTime<
	GenericInput extends TheTime
>(
	threshold: TheTime
): (input: GenericInput) => boolean
```

## Parameters

- `threshold`: Duration limit.
- `input`: Duration to compare.

## Return value

`true` if `input` is less than or equal to the threshold.

## See also

- [`lessTime`](/en/v1/api/date/lessTime)
- [`greaterThanTime`](/en/v1/api/date/greaterThanTime)
