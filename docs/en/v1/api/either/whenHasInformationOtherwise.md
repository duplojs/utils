---
outline: [2, 3]
description: "Runs a matching callback for selected Either informations and an otherwise callback for every remaining raw input."
prev:
  text: "whenHasInformation"
  link: "/en/v1/api/either/whenHasInformation"
next:
  text: "whenIsSelected"
  link: "/en/v1/api/either/whenIsSelected"
---

# whenHasInformationOtherwise

Runs a matching callback for selected Either informations and an otherwise callback for every remaining raw input.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/either/whenHasInformationOtherwise/tryout.doc.ts"
  majorVersion="v1"
  height="1027px"
/>

## Syntax

### Classic signature

```typescript
function whenHasInformationOtherwise<
  GenericInput,
  GenericInformation,
  GenericOutput,
  GenericOtherwiseOutput
>(
  input: GenericInput,
  information: GenericInformation | GenericInformation[],
  theFunction: (value: UnwrappedMatchingInput) => GenericOutput,
  otherwiseFunction: (value: Exclude<RawInput, MatchingInput>) => GenericOtherwiseOutput
): GenericOutput | GenericOtherwiseOutput;
```

### Curried signature

```typescript
function whenHasInformationOtherwise<
  GenericInput,
  GenericInformation,
  GenericOutput,
  GenericOtherwiseOutput
>(
  information: GenericInformation | GenericInformation[],
  theFunction: (value: UnwrappedMatchingInput) => GenericOutput,
  otherwiseFunction: (value: Exclude<RawInput, MatchingInput>) => GenericOtherwiseOutput
): (input: GenericInput) => GenericOutput | GenericOtherwiseOutput;
```

## Parameters

- `information`: Literal information or array of informations to match.
- `theFunction`: Callback receiving the unwrapped matching payload.
- `otherwiseFunction`: Callback receiving the original raw non-matching input.
- `input`: Value processed immediately, or later with the curried form.

## Return value

Returns the result of the matching callback when the condition succeeds; otherwise, it returns the result of `otherwiseFunction`. The otherwise callback always receives the original raw input.

## See also

- [`whenHasInformation`](/en/v1/api/either/whenHasInformation) - Same condition without an explicit otherwise callback.
