---
outline: [2, 3]
description: "Unwraps an Either payload when one literal information or one of multiple literal informations matches, otherwise throws a HasNotInformationError."
prev:
  text: "unwrapByInformation"
  link: "/en/v1/api/either/unwrapByInformation"
next:
  text: "expect"
  link: "/en/v1/api/either/expect"
---

# unwrapByInformationOrThrow

Unwraps an `Either` payload when one literal information or one of multiple literal informations matches, otherwise throws a `HasNotInformationError`.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/either/unwrapByInformationOrThrow/tryout.doc.ts"
  majorVersion="v1"
  height="586px"
/>

## Syntax

### Classic signature

```typescript
function unwrapByInformationOrThrow<
  GenericInput extends unknown,
  GenericInformation extends (
    GenericInput extends Either
      ? ReturnType<typeof informationKind.getValue<GenericInput>>
      : never
  ),
>(
  input: GenericInput,
  information: GenericInformation | GenericInformation[],
): Unwrap<
  Extract<
    GenericInput,
    Kind<typeof informationKind.definition, GenericInformation>
  >
>
```

### Curried signature

```typescript
function unwrapByInformationOrThrow<
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
) => Unwrap<
  Extract<
    GenericInput,
    Kind<typeof informationKind.definition, GenericInformation>
  >
>
```

## Parameters

- `information`: Expected literal information, or an array of literal informations.
- `input`: Either value to unwrap immediately, or later through the curried form.

## Return value

Returns the unwrapped payload when one information matches. Otherwise, the function throws `E.HasNotInformationError`.

## See also

- [`unwrapByInformation`](/en/v1/api/either/unwrapByInformation) – Non-throwing variant that returns the input unchanged when there is no match.
- [`hasInformation`](/en/v1/api/either/hasInformation) – Non-throwing check on literal information.
- [`whenHasInformation`](/en/v1/api/either/whenHasInformation) – Callback-based variant.
