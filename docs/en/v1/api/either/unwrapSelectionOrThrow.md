---
outline: [2, 3]
description: "Unwraps selected Either payloads from an exhaustive information selector, otherwise throws a HasNotSelectedInformationError."
prev:
  text: "unwrapSelection"
  link: "/en/v1/api/either/unwrapSelection"
next:
  text: "expect"
  link: "/en/v1/api/either/expect"
---

# unwrapSelectionOrThrow

Unwraps selected `Either` payloads from an exhaustive information selector, otherwise throws a `HasNotSelectedInformationError`.

The selector maps every possible information of the input union to `true` or `false`. A `true` entry unwraps the matching payload; a `false` entry is treated as an exceptional path.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/either/unwrapSelectionOrThrow/tryout.doc.ts"
  majorVersion="v1"
  height="670px"
/>

## Syntax

### Classic signature

```typescript
function unwrapSelectionOrThrow<
  GenericInput extends unknown,
  GenericSelector extends Record<Information, boolean>,
>(
  input: GenericInput,
  selector: GenericSelector,
): UnwrappedSelectedInputs
```

### Curried signature

```typescript
function unwrapSelectionOrThrow<
  GenericInput extends unknown,
  GenericSelector extends Record<Information, boolean>,
>(
  selector: GenericSelector,
): (input: GenericInput) => UnwrappedSelectedInputs
```

## Parameters

- `selector`: Exhaustive object where each possible input information is mapped to `true` or `false`.
- `input`: Either value to unwrap immediately, or later through the curried form.

## Return value

Returns the unwrapped payload when the current information is selected with `true`. Otherwise, the function throws `E.HasNotSelectedInformationError`.

When a selector entry is typed as `boolean`, the return type includes the unwrapped payload because a runtime `false` throws.

## See also

- [`unwrapSelection`](/en/v1/api/either/unwrapSelection) – Non-throwing variant that returns the input unchanged when the current information is not selected.
- [`unwrapByInformationOrThrow`](/en/v1/api/either/unwrapByInformationOrThrow) – Throwing variant based on a string or string array.
- [`matchInformation`](/en/v1/api/either/matchInformation) – Exhaustive callback-based matching by information.
