---
outline: [2, 3]
description: "Readable shortcut to create an EitherRight with the literal info \"success\". Ideal for functions that return only one type of success."
prev:
  text: "right"
  link: "/en/v1/api/either/right"
next:
  text: "ok"
  link: "/en/v1/api/either/ok"
---

# success

Readable shortcut to create an `EitherRight` with the literal info `"success"`. Ideal for functions that return only one type of success.

::: tip
`success` is strictly equivalent to `right("success", value)`. For the generic details (info, typing, fuller examples), see the [`right`](/en/v1/api/either/right) page.
:::

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/either/success/tryout.doc.ts"
  majorVersion="v1"
  height="450px"
/>

## Syntax

```typescript
function success<
	const GenericInput extends unknown
>(
  input: GenericInput
): EitherSuccess<GenericInput>
```

## Parameters

- `input`: Successful value to expose. Its type is preserved.

## Return value

An `EitherRight` whose info is fixed to `"success"`. Combine it with `E.hasInformation(result, "success")` to get an exhaustive type.

## When to use `success`?

- To express operations that have only one “default” success.
- To get a shorter, more readable syntax than `right("success", value)`.
- To stay consistent with `E.error` on the `Left` side.

## See also

- [`right`](/en/v1/api/either/right) – Generic version that lets you choose the info.
- [`ok`](/en/v1/api/either/ok) – Success without payload (`void`).
- [`error`](/en/v1/api/either/error) – `Left` counterpart with the `"error"` info.
