---
outline: [2, 3]
description: "Runs one callback for BoolFalsy values and an otherwise callback for every remaining raw input."
prev:
  text: "whenIsBoolFalsy"
  link: "/en/v1/api/either/whenIsBoolFalsy"
next:
  text: "nullish"
  link: "/en/v1/api/either/nullish"
---

# whenIsBoolFalsyOtherwise

Runs one callback for BoolFalsy values and an otherwise callback for every remaining raw input.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/either/whenIsBoolFalsyOtherwise/tryout.doc.ts"
  majorVersion="v1"
  height="985px"
/>

## Syntax

### Classic signature

```typescript
function whenIsBoolFalsyOtherwise<
  GenericInput,
  GenericOutput,
  GenericOtherwiseOutput
>(
  input: GenericInput,
  theFunction: (value: UnwrappedMatchingInput) => GenericOutput,
  otherwiseFunction: (value: Exclude<RawInput, MatchingInput>) => GenericOtherwiseOutput
): GenericOutput | GenericOtherwiseOutput;
```

### Curried signature

```typescript
function whenIsBoolFalsyOtherwise<
  GenericInput,
  GenericOutput,
  GenericOtherwiseOutput
>(
  theFunction: (value: UnwrappedMatchingInput) => GenericOutput,
  otherwiseFunction: (value: Exclude<RawInput, MatchingInput>) => GenericOtherwiseOutput
): (input: GenericInput) => GenericOutput | GenericOtherwiseOutput;
```

## Parameters

- `theFunction`: Callback receiving the unwrapped value when the condition matches.
- `otherwiseFunction`: Callback receiving the original raw input when the condition does not match.
- `input`: Raw value or Either processed immediately, or later with the curried form.

## Return value

Returns the result of the matching callback when the condition succeeds; otherwise, it returns the result of `otherwiseFunction`. The otherwise callback always receives the original raw input.

## See also

- [`whenIsBoolFalsy`](/en/v1/api/either/whenIsBoolFalsy) - Same condition without an explicit otherwise callback.
