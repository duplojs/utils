---
outline: [2, 3]
prev:
  text: "lengthEqual"
  link: "/en/v1/api/clean/primitives/operators/lengthEqual"
next:
  text: "lengthLessThan"
  link: "/en/v1/api/clean/primitives/operators/lengthLessThan"
---

# lengthGreaterThan

`lengthGreaterThan()` tests whether the length of a `String` is strictly greater than a value. Supports the curried version.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/clean/primitives/operators/lengthGreaterThan/tryout.doc.ts"
  majorVersion="v1"
  height="320px"
/>

## Syntax

### Classic signature

```typescript
function lengthGreaterThan(
	primitive: String, 
	length: Number | number
): boolean
```

### Curried signature

```typescript
function lengthGreaterThan(
	length: Number | number
): (primitive: String) => boolean
```

## Parameters

- `primitive` : wrapped `String` (classic signature only).
- `length` : comparison threshold.

## Return value

A boolean indicating whether `primitive.length > length`.

## See also

- [`length`](/en/v1/api/clean/primitives/operators/length)
