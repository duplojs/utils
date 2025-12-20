---
outline: [2, 3]
prev:
  text: "lengthGreaterThan"
  link: "/en/v1/api/clean/primitives/operators/lengthGreaterThan"
next:
  text: "dateGreaterThan"
  link: "/en/v1/api/clean/primitives/operators/dateGreaterThan"
---

# lengthLessThan

`lengthLessThan()` tests whether the length of a `String` is strictly less than a value. Supports the curried version.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/clean/primitives/operators/lengthLessThan/tryout.doc.ts"
  majorVersion="v1"
  height="320px"
/>

## Syntax

### Classic signature

```typescript
function lengthLessThan(
	primitive: String, 
	length: Number | number
): boolean
```

### Curried signature

```typescript
function lengthLessThan(
	length: Number | number
): (primitive: String) => boolean
```

## Parameters

- `primitive` : wrapped `String` (classic signature only).
- `length` : comparison threshold.

## Return value

A boolean indicating whether `primitive.length < length`.

## See also

- [`length`](/en/v1/api/clean/primitives/operators/length)
