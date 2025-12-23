---
outline: [2, 3]
prev:
  text: "concat"
  link: "/en/v1/api/clean/primitives/operators/concat"
next:
  text: "lengthEqual"
  link: "/en/v1/api/clean/primitives/operators/lengthEqual"
---

# length

`length()` returns the length of a `String` as a wrapped `Number`.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/clean/primitives/operators/length/tryout.doc.ts"
  majorVersion="v1"
  height="260px"
/>

## Syntax

```typescript
function length(primitive: String): Number
```

## Parameters

- `primitive` : wrapped `String`.

## Return value

A wrapped `Number` containing the length.

## See also

- [`lengthEqual`](/en/v1/api/clean/primitives/operators/lengthEqual)
- [`lengthGreaterThan`](/en/v1/api/clean/primitives/operators/lengthGreaterThan)
- [`lengthLessThan`](/en/v1/api/clean/primitives/operators/lengthLessThan)
