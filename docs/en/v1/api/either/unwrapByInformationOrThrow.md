---
outline: [2, 3]
description: "Unwraps an Either payload only when one precise literal information matches, otherwise throws a HasNotInformationError."
prev:
  text: "matchInformationOtherwise"
  link: "/en/v1/api/either/matchInformationOtherwise"
next:
  text: "expect"
  link: "/en/v1/api/either/expect"
---

# unwrapByInformationOrThrow

Unwraps an `Either` payload only when one precise literal information matches, otherwise throws a `HasNotInformationError`.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/either/unwrapByInformationOrThrow/tryout.doc.ts"
  majorVersion="v1"
  height="397px"
/>

## Syntax

### Classic signature

```typescript
function unwrapByInformationOrThrow<
  GenericInput extends unknown,
  GenericInformation extends ReturnType<typeof informationKind.getValue<GenericInput>>
>(
  input: GenericInput,
  information: GenericInformation
): Unwrap<Extract<GenericInput, Kind<typeof informationKind.definition, GenericInformation>>>
```

### Curried signature

```typescript
function unwrapByInformationOrThrow<
  GenericInformation extends string
>(
  information: GenericInformation
): <GenericInput extends unknown>(
  input: GenericInput
) => Unwrap<Extract<GenericInput, Kind<typeof informationKind.definition, GenericInformation>>>
```

## Parameters

- `information`: Expected literal information.
- `input`: Either value to unwrap immediately, or later through the curried form.

## Return value

Returns the unwrapped payload when the information matches. Otherwise, the function throws `E.HasNotInformationError`.

## See also

- [`hasInformation`](/en/v1/api/either/hasInformation) – Non-throwing check on literal information.
- [`whenHasInformation`](/en/v1/api/either/whenHasInformation) – Callback-based variant.
- [`unwrapRightOrThrow`](/en/v1/api/either/unwrapRightOrThrow) / [`unwrapLeftOrThrow`](/en/v1/api/either/unwrapLeftOrThrow) – Side-based unwrap helpers.
