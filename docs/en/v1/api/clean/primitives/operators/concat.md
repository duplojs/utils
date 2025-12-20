---
outline: [2, 3]
prev:
  text: "lessThan"
  link: "/en/v1/api/clean/primitives/operators/lessThan"
next:
  text: "length"
  link: "/en/v1/api/clean/primitives/operators/length"
---

# concat

`concat()` concatenates a `String` (wrapped) with one or more strings (wrapped or raw). Supports the curried version.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/clean/primitives/operators/concat/tryout.doc.ts"
  majorVersion="v1"
  height="320px"
/>

## Syntax

### Classic signature

```typescript
function concat(
	input: String, 
	...textsRest: (String | string)[]
): String
```

### Curried signature

```typescript
function concat(
	text: String | string
): (input: String) => String
```

## Parameters

- `input` : base string (classic signature only).
- `textsRest` : elements to concatenate.
- `text` : first element to concatenate (curried signature only).

## Return value

A wrapped `String` containing the concatenation.

## See also

- [`length`](/en/v1/api/clean/primitives/operators/length)
