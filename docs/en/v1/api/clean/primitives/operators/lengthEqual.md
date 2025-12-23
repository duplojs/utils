---
outline: [2, 3]
prev:
  text: "length"
  link: "/en/v1/api/clean/primitives/operators/length"
next:
  text: "lengthGreaterThan"
  link: "/en/v1/api/clean/primitives/operators/lengthGreaterThan"
---

# lengthEqual

`lengthEqual()` tests whether the length of a `String` equals a value. Supports the curried version.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/clean/primitives/operators/lengthEqual/tryout.doc.ts"
  majorVersion="v1"
  height="320px"
/>

## Syntax

### Classic signature

```typescript
function lengthEqual(
	primitive: String, 
	length: Number | number
): boolean
```

### Curried signature

```typescript
function lengthEqual(
	length: Number | number
): (primitive: String) => boolean
```

## Parameters

- `primitive` : wrapped `String` (classic signature only).
- `length` : expected length.

## Return value

A boolean indicating whether `primitive.length === length`.

## See also

- [`length`](/en/v1/api/clean/primitives/operators/length)
