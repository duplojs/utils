---
outline: [2, 3]
prev:
  text: "betweenTime"
  link: "/en/v1/api/date/betweenTime"
next:
  text: "sort"
  link: "/en/v1/api/date/sort"
---

# betweenThanTime

Exclusive variant of [`betweenTime`](/en/v1/api/date/betweenTime): checks that a `TheTime` lies between two bounds and excludes the endpoints.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/date/betweenThanTime/tryout.doc.ts"
  majorVersion="v1"
  height="208px"
/>

## Syntax

### Standard signature

```typescript
function betweenThanTime<
	GenericInput extends TheTime | SerializedTheTime
>(
	input: GenericInput,
	greater: TheTime | SerializedTheTime,
	less: TheTime | SerializedTheTime
): boolean
```

### Curried signature

```typescript
function betweenThanTime<
	GenericInput extends TheTime | SerializedTheTime
>(
	greater: TheTime | SerializedTheTime,
	less: TheTime | SerializedTheTime
): (input: GenericInput) => boolean
```

## Parameters

- `greater`: Lower bound (exclusive).
- `less`: Upper bound (exclusive).
- `input`: `TheTime` or `SerializedTheTime`.

## Return value

`true` if the duration is within `(greater, less)`.

## See also

- [`betweenTime`](/en/v1/api/date/betweenTime)
- [`greaterThanTime`](/en/v1/api/date/greaterThanTime)
