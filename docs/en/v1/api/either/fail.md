---
outline: [2, 3]
description: "Returns an Left<\"fail\", never>: perfect to signal a failure without carrying extra data."
prev:
  text: "error"
  link: "/en/v1/api/either/error"
next:
  text: "isRight"
  link: "/en/v1/api/either/isRight"
---

# fail

Returns an `Left<"fail", never>`: perfect to signal a failure without carrying extra data.

::: tip
`fail` is the payload-less alias of `left("fail")`. For details on customizing the info or adding a value, read the [`left`](/en/v1/api/either/left) page.
:::

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/either/fail/tryout.doc.ts"
  majorVersion="v1"
  height="502px"
/>

## Syntax

```typescript
function fail(): Fail
```

## Parameters

None: the call solely represents the fact that an operation did not succeed.

## Return value

A `Left` tagged `"fail"` whose wrapped value is `never`. Combine it with `E.whenHasInformation(result, "fail", handler)` to run specific logic when no data is available.

## Use cases

- A command that fails but has no useful detail to pass along.
- A safeguard ensuring a branch always returns a `Left` even without context.
- Simplify tests by checking only the `"fail"` info.

## See also

- [`error`](/en/v1/api/either/error) – Variant with payload.
- [`ok`](/en/v1/api/either/ok) – Payload-less `Right` counterpart.
- [`left`](/en/v1/api/either/left) – To build your own contextualized errors.
