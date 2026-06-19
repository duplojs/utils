---
outline: [2, 3]
description: "Exhaustive pattern matching on Either information. Every information case must be handled."
prev:
  text: "whenIsSelected"
  link: "/en/v1/api/either/whenIsSelected"
next:
  text: "matchInformationOtherwise"
  link: "/en/v1/api/either/matchInformationOtherwise"
---

# matchInformation

Exhaustive pattern matching on Either information. Every information case from the input must be handled.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/either/matchInformation/tryout.doc.ts"
  majorVersion="v1"
  height="733px"
/>

## Syntax

### Classic signature

```typescript
function matchInformation<
  GenericInput extends unknown,
  GenericMatcher extends ComputeMatcher<Extract<GenericInput, Right | Left>>
>(
  input: GenericInput,
  matcher: GenericMatcher
): ReturnType<GenericMatcher[keyof GenericMatcher]> | Exclude<GenericInput, Right | Left>;
```

### Curried signature

```typescript
function matchInformation<
  GenericInput extends unknown,
  GenericMatcher extends ComputeMatcher<Extract<GenericInput, Right | Left>>
>(
  matcher: GenericMatcher
): (input: GenericInput) => ReturnType<GenericMatcher[keyof GenericMatcher]> | Exclude<GenericInput, Right | Left>;
```

## Parameters

- `matcher`: Object with one callback per information key.
- `input`: Value to process immediately (optional in curried style).

## Return value

- If input is an `Either`, returns the callback result matching its information.
- If input is not an `Either`, returns input as-is.

## See also

- [`matchInformationOtherwise`](/en/v1/api/either/matchInformationOtherwise) - Allows non-exhaustive matcher with fallback.
- [`whenHasInformation`](/en/v1/api/either/whenHasInformation) - Target one information (or a list) with callbacks.
