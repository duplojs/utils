---
outline: [2, 3]
description: "Keeps matching Either informations on the Right side and converts every non-matching Right to Left."
prev:
  text: "matchInformationOtherwise"
  link: "/en/v1/api/either/matchInformationOtherwise"
next:
  text: "keepAsRightSelection"
  link: "/en/v1/api/either/keepAsRightSelection"
---

# keepAsRightByInformation

Keeps matching `Either` informations on the `Right` side and converts every non-matching `Right` to `Left`.

When the current information matches and the input is a `Left`, it is converted to a `Right` with the same information and payload. When the current information does not match and the input is a `Right`, it is converted to a `Left`.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/either/keepAsRightByInformation/tryout.doc.ts"
  majorVersion="v1"
  height="712px"
/>

## Syntax

### Classic signature

```typescript
function keepAsRightByInformation<
  GenericInput extends unknown,
  GenericInformation extends Information,
>(
  input: GenericInput,
  information: GenericInformation | GenericInformation[],
): KeptAsRightOrLeftInput
```

### Curried signature

```typescript
function keepAsRightByInformation<
  GenericInput extends unknown,
  GenericInformation extends Information,
>(
  information: GenericInformation | GenericInformation[],
): (input: GenericInput) => KeptAsRightOrLeftInput
```

## Parameters

- `information`: Expected literal information, or an array of literal informations that should remain on the `Right` side.
- `input`: Either value to normalize immediately, or later through the curried form.

## Return value

Returns a `Right` when the current information is selected, converting a matching `Left` if needed. Returns a `Left` when the current information is not selected, converting a non-matching `Right` if needed. Non-`Either` values are returned unchanged.

## See also

- [`keepAsRightSelection`](/en/v1/api/either/keepAsRightSelection) – Exhaustive selector variant.
- [`unwrapByInformation`](/en/v1/api/either/unwrapByInformation) – Unwraps matching informations instead of keeping an `Either`.
- [`hasInformation`](/en/v1/api/either/hasInformation) – Type guard based on literal information.
