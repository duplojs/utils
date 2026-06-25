---
outline: [2, 3]
description: "Builds a neutral Right result: neither positive nor negative, just a contextualized result with business information and a payload."
prev:
  text: "right"
  link: "/en/v1/api/either/right"
next:
  text: "success"
  link: "/en/v1/api/either/success"
---

# result

Builds a neutral `Right` result: neither positive nor negative, just a contextualized result with business information and a payload.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/either/result/tryout.doc.ts"
  majorVersion="v1"
  height="943px"
/>

## Syntax

### Classic

```typescript
function result<
  GenericInformation extends string,
  const GenericValue extends unknown = undefined
>(
  information: GenericInformation,
  value: GenericValue
): Result<GenericInformation, GenericValue>
```

### Curried

```typescript
function result<
  GenericInformation extends string,
  const GenericValue extends unknown = undefined
>(
  information: GenericInformation
): (value: GenericValue) => Result<GenericInformation, GenericValue>
```

## Parameters

- `information`: Literal string that describes the produced result (`"invoice.total"`, `"user.skipped"`, etc.).
- `value`: Payload associated with this result. Pass `undefined` explicitly when the result has no payload.

## Return value

A `Result<Information, Value>`, which is a specialized `Right` tagged with the additional `result` kind.

When only `information` is provided, `result` returns a function waiting for `value`, which is useful in `pipe`.

## See also

- [`right`](/en/v1/api/either/right) – Generic `Right` constructor with business information.
- [`success`](/en/v1/api/either/success) – Shortcut for explicitly positive outcomes.
- [`unwrapRightOrThrow`](/en/v1/api/either/unwrapRightOrThrow) – Unwraps a `Right` payload immediately.
