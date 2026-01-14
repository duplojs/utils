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

Inclusive variant of [`betweenTime`](/en/v1/api/date/betweenTime): checks that a `TheTime` lies between two bounds and includes the endpoints.

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
	GenericInput extends TheTime
>(
	input: GenericInput,
	greater: TheTime,
	less: TheTime
): boolean
```

### Curried signature

```typescript
function betweenThanTime<
	GenericInput extends TheTime
>(
	greater: TheTime,
	less: TheTime
): (input: GenericInput) => boolean
```

## Parameters

- `greater`: Lower bound (inclusive).
- `less`: Upper bound (inclusive).
- `input`: Duration to test.

## Return value

`true` if the duration is within `[greater, less]`.

## See also

- [`betweenTime`](/en/v1/api/date/betweenTime)
- [`greaterThanTime`](/en/v1/api/date/greaterThanTime)
