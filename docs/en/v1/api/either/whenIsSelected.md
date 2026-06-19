---
outline: [2, 3]
description: "Runs a callback on the unwrapped Either payloads selected by an exhaustive information selector and forwards all other inputs unchanged."
prev:
  text: "whenHasInformation"
  link: "/en/v1/api/either/whenHasInformation"
next:
  text: "matchInformation"
  link: "/en/v1/api/either/matchInformation"
---

# whenIsSelected

Runs a callback on the unwrapped `Either` payloads selected by an exhaustive information selector and forwards all other inputs unchanged.

The selector maps every possible information of the input union to `true` or `false`. A `true` entry executes the callback with the unwrapped payload; a `false` entry preserves the original `Either`.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/either/whenIsSelected/tryout.doc.ts"
  majorVersion="v1"
  height="817px"
/>

## Syntax

### Classic signature

```typescript
function whenIsSelected<
  GenericInput extends unknown,
  GenericSelector extends Record<Information, boolean>,
  GenericOutput,
>(
  input: GenericInput,
  selector: GenericSelector,
  theFunction: (value: UnwrappedSelectedInputs) => GenericOutput,
): GenericOutput | UnselectedInputs
```

### Curried signature

```typescript
function whenIsSelected<
  GenericInput extends unknown,
  GenericSelector extends Record<Information, boolean>,
  GenericOutput,
>(
  selector: GenericSelector,
  theFunction: (value: UnwrappedSelectedInputs) => GenericOutput,
): (input: GenericInput) => GenericOutput | UnselectedInputs
```

## Parameters

- `selector`: Exhaustive object mapping every possible input information to `true` or `false`.
- `theFunction`: Callback receiving the unwrapped payload of the selected informations.
- `input`: Value to process immediately, or later through the curried form.

## Return value

Returns the callback result when the current information is selected with `true`. Otherwise, it returns the original input unchanged.

When a selector entry is typed as `boolean`, the return type includes both the callback result and the original `Either` for that information.

## See also

- [`whenHasInformation`](/en/v1/api/either/whenHasInformation) - Selects one or several informations without an exhaustive selector.
- [`unwrapSelection`](/en/v1/api/either/unwrapSelection) - Unwraps selected payloads without applying a callback.
- [`matchInformation`](/en/v1/api/either/matchInformation) - Exhaustive callback-based matching by information.
