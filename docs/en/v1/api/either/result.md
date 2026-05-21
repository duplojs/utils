---
outline: [2, 3]
description: "Builds a neutral Right result: neither positive nor negative, just a contextualized result with business information and an optional payload."
prev:
  text: "right"
  link: "/en/v1/api/either/right"
next:
  text: "success"
  link: "/en/v1/api/either/success"
---

# result

Builds a neutral `Right` result: neither positive nor negative, just a contextualized result with business information and an optional payload.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/either/result/tryout.doc.ts"
  majorVersion="v1"
  height="355px"
/>

## Syntax

```typescript
function result<
  GenericInformation extends string,
  const GenericValue extends unknown = undefined
>(
  information: GenericInformation,
  value?: GenericValue
): Result<GenericInformation, GenericValue>
```

## Parameters

- `information`: Literal string that describes the produced result (`"invoice.total"`, `"user.skipped"`, etc.).
- `value`: Optional payload associated with this result.

## Return value

A `Result<Information, Value>`, which is a specialized `Right` tagged with the additional `result` kind.

## See also

- [`right`](/en/v1/api/either/right) – Generic `Right` constructor with business information.
- [`success`](/en/v1/api/either/success) – Shortcut for explicitly positive outcomes.
- [`unwrapRightOrThrow`](/en/v1/api/either/unwrapRightOrThrow) – Unwraps a `Right` payload immediately.
