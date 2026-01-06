---
outline: [2, 3]
prev:
  text: "lessThanTime"
  link: "/en/v1/api/date/lessThanTime"
next:
  text: "betweenThanTime"
  link: "/en/v1/api/date/betweenThanTime"
---

# betweenTime

Checks that a `TheTime` is strictly between two bounds (`greater` then `less`).

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/date/betweenTime/tryout.doc.ts"
  majorVersion="v1"
  height="320px"
/>

## Syntax

### Standard signature

```typescript
function betweenTime<
	GenericInput extends TheTime
>(
	input: GenericInput,
	greater: TheTime,
	less: TheTime
): boolean
```

### Curried signature

```typescript
function betweenTime<
	GenericInput extends TheTime
>(
	greater: TheTime,
	less: TheTime
): (input: GenericInput) => boolean
```

## Parameters

- `greater`: Lower bound (exclusive).
- `less`: Upper bound (exclusive).
- `input`: Duration to test.

## Return value

`true` if the input is strictly between the bounds.

## See also

- [`betweenThanTime`](/en/v1/api/date/betweenThanTime)
- [`greaterTime`](/en/v1/api/date/greaterTime)
