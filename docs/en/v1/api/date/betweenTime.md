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

Checks that a `TheTime` is in an inclusive range between two bounds (`greater` then `less`).

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/date/betweenTime/tryout.doc.ts"
  majorVersion="v1"
  height="208px"
/>

## Syntax

### Standard signature

```typescript
function betweenTime<
	GenericInput extends TheTime | SerializedTheTime
>(
	input: GenericInput,
	greater: TheTime | SerializedTheTime,
	less: TheTime | SerializedTheTime
): boolean
```

### Curried signature

```typescript
function betweenTime<
	GenericInput extends TheTime | SerializedTheTime
>(
	greater: TheTime | SerializedTheTime,
	less: TheTime | SerializedTheTime
): (input: GenericInput) => boolean
```

## Parameters

- `greater`: Lower bound (inclusive).
- `less`: Upper bound (inclusive).
- `input`: `TheTime` or `SerializedTheTime`.

## Return value

`true` if the input is inside an inclusive range between the bounds.

## See also

- [`betweenThanTime`](/en/v1/api/date/betweenThanTime)
- [`greaterTime`](/en/v1/api/date/greaterTime)
