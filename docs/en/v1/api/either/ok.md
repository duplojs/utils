---
outline: [2, 3]
description: "Returns an Right<\"ok\", never>: an empty success that confirms an operation went fine without extra data."
prev:
  text: "success"
  link: "/en/v1/api/either/success"
next:
  text: "left"
  link: "/en/v1/api/either/left"
---

# ok

Returns an `Right<"ok", never>`: an empty success that confirms an operation went fine without extra data.

::: tip
`ok` is just a specialized alias of `right("ok")`. To better understand building `Right` values (mandatory info, unwrap, helpers), see the [`right`](/en/v1/api/either/right) page.
:::

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/either/ok/tryout.doc.ts"
  majorVersion="v1"
  height="418px"
/>

## Syntax

```typescript
function ok(): Ok
```

## Parameters

None. The call simply signals that “all is well.”

## Return value

A `Right` whose info is fixed to `"ok"` and whose wrapped value is `never`. Designed for commands or side effects that have nothing to return.

## Use cases

- Validate an imperative action (sending an email, mutation, scheduled job).
- Harmonize returns when some paths have nothing to return but must stay compatible with the other `Either` values of your function.
- Work with `E.whenHasInformation(..., "ok", handler)` to trigger a callback without payload.

## See also

- [`success`](/en/v1/api/either/success) – When you have a value to expose.
- [`right`](/en/v1/api/either/right) – To choose custom information.
- [`fail`](/en/v1/api/either/fail) – `Left` counterpart to signal failure without payload.
