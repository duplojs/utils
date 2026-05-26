---
outline: [2, 3]
description: "Unwraps an Either payload when one literal information or one of multiple literal informations matches, otherwise returns the original input unchanged."
prev:
  text: "matchInformationOtherwise"
  link: "/en/v1/api/either/matchInformationOtherwise"
next:
  text: "unwrapByInformationOrThrow"
  link: "/en/v1/api/either/unwrapByInformationOrThrow"
---

# unwrapByInformation

Unwraps an `Either` payload when one literal information or one of multiple literal informations matches, otherwise returns the original input unchanged.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/either/unwrapByInformation/tryout.doc.ts"
  majorVersion="v1"
  height="586px"
/>

## Syntax

### Classic signature

```typescript
function unwrapByInformation<
  GenericInput extends unknown,
  GenericInformation extends (
    GenericInput extends Either
      ? ReturnType<typeof informationKind.getValue<GenericInput>>
      : never
  ),
>(
  input: GenericInput,
  information: GenericInformation | GenericInformation[],
): GenericInput extends Kind<typeof informationKind.definition, GenericInformation>
  ? Unwrap<GenericInput>
  : GenericInput
```

### Curried signature

```typescript
function unwrapByInformation<
  GenericInput extends unknown,
  const GenericInformation extends (
    GenericInput extends Either
      ? ReturnType<typeof informationKind.getValue<GenericInput>>
      : never
  ),
>(
  information: GenericInformation | GenericInformation[],
): (
  input: GenericInput,
) => GenericInput extends Kind<typeof informationKind.definition, GenericInformation>
  ? Unwrap<GenericInput>
  : GenericInput
```

## Parameters

- `information`: Expected literal information, or an array of literal informations.
- `input`: Either value to unwrap immediately, or later through the curried form.

## Return value

Returns the unwrapped payload when one information matches. If no information matches, returns the original input unchanged.

## See also

- [`unwrapByInformationOrThrow`](/en/v1/api/either/unwrapByInformationOrThrow) – Throwing variant when information does not match.
- [`hasInformation`](/en/v1/api/either/hasInformation) – Non-throwing check on literal information.
- [`whenHasInformation`](/en/v1/api/either/whenHasInformation) – Callback-based variant.
