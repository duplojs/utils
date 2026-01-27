---
outline: [2, 3]
description: "Handy alias to create an Left with the info fixed to \"error\". Useful to signal a generic error without manually providing the info."
prev:
  text: "left"
  link: "/en/v1/api/either/left"
next:
  text: "fail"
  link: "/en/v1/api/either/fail"
---

# error

Handy alias to create an `Left` with the info fixed to `"error"`. Useful to signal a generic error without manually providing the info.

::: tip
`error` is equivalent to `left("error", value)`. To understand the full mechanics (custom info, pattern matching), see the [`left`](/en/v1/api/either/left) page.
:::

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/either/error/tryout.doc.ts"
  majorVersion="v1"
  height="439px"
/>

## Syntax

```typescript
function error<
	const GenericInput extends unknown
>(
  input: GenericInput
): Error<GenericInput>
```

## Parameters

- `input`: Data to attach to the error (message, object, context...)

## Return value

An `Left<"error", GenericInput>` that you can consume with `E.isLeft`, `E.whenHasInformation`, or `E.hasInformation(result, "error")`.

## Use cases

- Signal a generic error when you do not need specialized information.
- Harmonize your returns with `E.success` when there is only one type of success.

## See also

- [`left`](/en/v1/api/either/left) – Generic version with custom info.
- [`fail`](/en/v1/api/either/fail) – Error without payload (`left("fail")`).
- [`success`](/en/v1/api/either/success) – `Right` counterpart with the `"success"` info.
