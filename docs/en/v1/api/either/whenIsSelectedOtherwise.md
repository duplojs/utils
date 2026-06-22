---
outline: [2, 3]
description: "Runs a matching callback for selected Either informations and an otherwise callback for every unselected raw input."
prev:
  text: "whenIsSelected"
  link: "/en/v1/api/either/whenIsSelected"
next:
  text: "matchInformation"
  link: "/en/v1/api/either/matchInformation"
---

# whenIsSelectedOtherwise

Runs a matching callback for selected Either informations and an otherwise callback for every unselected raw input.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/either/whenIsSelectedOtherwise/tryout.doc.ts"
  majorVersion="v1"
  height="1132px"
/>

## Syntax

### Classic signature

```typescript
function whenIsSelectedOtherwise<
  GenericInput,
  GenericSelector,
  GenericOutput,
  GenericOtherwiseOutput
>(
  input: GenericInput,
  selector: GenericSelector,
  theFunction: (value: UnwrappedMatchingInput) => GenericOutput,
  otherwiseFunction: (value: Exclude<RawInput, MatchingInput>) => GenericOtherwiseOutput
): GenericOutput | GenericOtherwiseOutput;
```

### Curried signature

```typescript
function whenIsSelectedOtherwise<
  GenericInput,
  GenericSelector,
  GenericOutput,
  GenericOtherwiseOutput
>(
  selector: GenericSelector,
  theFunction: (value: UnwrappedMatchingInput) => GenericOutput,
  otherwiseFunction: (value: Exclude<RawInput, MatchingInput>) => GenericOtherwiseOutput
): (input: GenericInput) => GenericOutput | GenericOtherwiseOutput;
```

## Parameters

- `selector`: Exhaustive map assigning `true` or `false` to every possible information.
- `theFunction`: Callback receiving an unwrapped selected payload.
- `otherwiseFunction`: Callback receiving the original raw unselected input.
- `input`: Value processed immediately, or later with the curried form.

## Return value

Returns the result of the matching callback when the condition succeeds; otherwise, it returns the result of `otherwiseFunction`. The otherwise callback always receives the original raw input.

## See also

- [`whenIsSelected`](/en/v1/api/either/whenIsSelected) - Same condition without an explicit otherwise callback.
