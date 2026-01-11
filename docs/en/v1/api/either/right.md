---
outline: [2, 3]
description: "Builds an EitherRight by associating mandatory business information (literal string) and an optional payload. This is the basic brick to signal a contextualized success."
prev:
  text: "Either"
  link: "/en/v1/api/either/"
next:
  text: "success"
  link: "/en/v1/api/either/success"
---

# right

Builds an `EitherRight` by associating **mandatory business information** (literal string) and an optional payload. This is the basic brick to signal a contextualized success.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/either/right/tryout.doc.ts"
  majorVersion="v1"
  height="800px"
/>

## Syntax

```typescript
function right<
	GenericInformation extends string, 
	const GenericInput extends unknown = undefined
>(
  information: GenericInformation,
  value?: GenericInput
): EitherRight<GenericInformation, GenericInput>
```

## Parameters

- `information`: Literal string that precisely describes the success (e.g., `"user.created"`). This information stays in the type.
- `input`: Optional payload associated with the success. If omitted, the inferred type becomes `undefined`.

## Return value

An `EitherRight<Information, Value>` that can be discriminated with `E.isRight`, `E.hasInformation`, or `E.whenHasInformation`.

## Best practices

- Get used to descriptive strings (`"user.created"`, `"invoice.validated"`) to simplify pattern matching.
- Do not share the same strings between several different business cases.
- Combine `right` with `left` so every branch of a function returns a homogeneous `Either`.

## See also

- [`success`](/en/v1/api/either/success) – Specialized shortcut for `right("success", value)`.
- [`ok`](/en/v1/api/either/ok) – Payload-less variant (`Right<"ok">`).
- [`hasInformation`](/en/v1/api/either/hasInformation) – Type guard on business information.
