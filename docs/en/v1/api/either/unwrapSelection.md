---
outline: [2, 3]
description: "Unwraps selected Either payloads from an exhaustive information selector, otherwise returns the original input unchanged."
prev:
  text: "unwrapByInformationOrThrow"
  link: "/en/v1/api/either/unwrapByInformationOrThrow"
next:
  text: "unwrapSelectionOrThrow"
  link: "/en/v1/api/either/unwrapSelectionOrThrow"
---

# unwrapSelection

Unwraps selected `Either` payloads from an exhaustive information selector, otherwise returns the original input unchanged.

The selector maps every possible information of the input union to `true` or `false`. A `true` entry unwraps the matching payload; a `false` entry keeps the original `Either`.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/either/unwrapSelection/tryout.doc.ts"
  majorVersion="v1"
  height="670px"
/>

## Syntax

### Classic signature

```typescript
function unwrapSelection<
  GenericInput extends unknown,
  GenericSelector extends Record<Information, boolean>,
>(
  input: GenericInput,
  selector: GenericSelector,
): UnwrappedSelectedInputs | UnselectedInputs
```

### Curried signature

```typescript
function unwrapSelection<
  GenericInput extends unknown,
  GenericSelector extends Record<Information, boolean>,
>(
  selector: GenericSelector,
): (input: GenericInput) => UnwrappedSelectedInputs | UnselectedInputs
```

## Parameters

- `selector`: Exhaustive object where each possible input information is mapped to `true` or `false`.
- `input`: Either value to unwrap immediately, or later through the curried form.

## Return value

Returns the unwrapped payload when the current information is selected with `true`. Otherwise, returns the original input unchanged.

When a selector entry is typed as `boolean`, the return type includes both possibilities for that information.

## See also

- [`unwrapSelectionOrThrow`](/en/v1/api/either/unwrapSelectionOrThrow) – Throwing variant when the current information is not selected.
- [`matchInformation`](/en/v1/api/either/matchInformation) – Exhaustive callback-based matching by information.
- [`unwrapByInformation`](/en/v1/api/either/unwrapByInformation) – Selects informations from a string or string array.
