---
outline: [2, 3]
description: "Non-exhaustive pattern matching on Either information with an explicit fallback callback."
prev:
  text: "matchInformation"
  link: "/en/v1/api/either/matchInformation"
next:
  text: "keepAsRightByInformation"
  link: "/en/v1/api/either/keepAsRightByInformation"
---

# matchInformationOtherwise

Non-exhaustive pattern matching on Either information with an explicit fallback callback.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/either/matchInformationOtherwise/tryout.doc.ts"
  majorVersion="v1"
  height="691px"
/>

## Syntax

### Classic signature

```typescript
function matchInformationOtherwise<
  GenericInput extends unknown,
  GenericMatcher extends ComputeMatcher<Extract<GenericInput, Right | Left>>,
  GenericOutput extends unknown
>(
  input: GenericInput,
  matcher: GenericMatcher,
  otherwise: (value: Exclude<GenericInput, Right | Left>) => GenericOutput
): ReturnType<GenericMatcher[keyof GenericMatcher]> | Exclude<GenericInput, Right | Left>;
```

### Curried signature

```typescript
function matchInformationOtherwise<
  GenericInput extends unknown,
  GenericMatcher extends ComputeMatcher<Extract<GenericInput, Right | Left>>,
  GenericOutput extends unknown
>(
  matcher: GenericMatcher,
  otherwise: (value: Exclude<GenericInput, Right | Left>) => GenericOutput
): (input: GenericInput) => ReturnType<GenericMatcher[keyof GenericMatcher]> | GenericOutput;
```

## Parameters

- `matcher`: Partial object of information callbacks.
- `otherwise`: Callback used when no matcher callback matches, or when input is not an `Either`.
- `input`: Value to process immediately (optional in curried style).

## Return value

Returns either the matched callback result, or the `otherwise` callback result.

## See also

- [`matchInformation`](/en/v1/api/either/matchInformation) - Exhaustive matcher variant.
- [`expect`](/en/v1/api/either/expect) - Keep strict Either typing in flows.
