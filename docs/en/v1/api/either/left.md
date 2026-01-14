---
outline: [2, 3]
description: "Builds an EitherLeft by associating mandatory business information (literal string) with a value representing the error. This is the fundamental brick to signal a contextualized failure."
prev:
  text: "ok"
  link: "/en/v1/api/either/ok"
next:
  text: "error"
  link: "/en/v1/api/either/error"
---

# left

Builds an `EitherLeft` by associating **mandatory business information** (literal string) with a value representing the error. This is the fundamental brick to signal a contextualized failure.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/either/left/tryout.doc.ts"
  majorVersion="v1"
  height="460px"
/>

## Syntax

```typescript
function left<
	GenericInformation extends string, 
	const GenericInput extends unknown = undefined
>(
  information: GenericInformation,
  input?: GenericInput
): EitherLeft<GenericInformation, GenericInput>
```

## Parameters

- `information`: Literal string specifying the type of error (e.g., `"user.notFound"`).
- `input`: Optional payload carrying useful data to diagnose the issue.

## Return value

An `EitherLeft<Information, Value>` that you can filter with `E.isLeft`, `E.hasInformation`, or `E.whenHasInformation`.

## Best practices

- Use explicit strings (`"auth.invalidToken"`, `"order.paymentFailed"`).
- Reuse the info as a pattern-matching key to trigger the right application response.
- Always return a homogeneous `Either` (all branches of a function must return the same `Either` type).

## See also

- [`right`](/en/v1/api/either/right) – Success-side counterpart.
- [`error`](/en/v1/api/either/error) – Specialized alias based on `left("error", value)`.
- [`fail`](/en/v1/api/either/fail) – `Left` variant without payload.
