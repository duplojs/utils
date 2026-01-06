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

Checks whether a `TheTime` is greater than or equal to a threshold.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/date/greaterThanTime/tryout.doc.ts"
  majorVersion="v1"
  height="300px"
/>

## Syntax

### Standard signature

```typescript
function greaterThanTime<
	GenericInput extends TheTime
>(
	input: GenericInput,
	threshold: TheTime
): boolean
```

### Curried signature

```typescript
function greaterThanTime<
	GenericInput extends TheTime
>(
	threshold: TheTime
): (input: GenericInput) => boolean
```

## Parameters

- `threshold`: Duration limit.
- `input`: Duration to compare.

## Return value

`true` if `input` is greater than or equal to the threshold.

## See also

- [`greaterTime`](/en/v1/api/date/greaterTime)
- [`lessThanTime`](/en/v1/api/date/lessThanTime)
