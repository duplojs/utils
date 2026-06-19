---
outline: [2, 3]
description: "matchWithNumber() performs exhaustive pattern matching on a number literal union and guarantees processing for every possible value."
prev:
  text: "matchWithStringOtherwise"
  link: "/en/v1/api/pattern/matchWithStringOtherwise"
next:
  text: "matchWithNumberOtherwise"
  link: "/en/v1/api/pattern/matchWithNumberOtherwise"
---

# matchWithNumber

`matchWithNumber()` performs exhaustive pattern matching on a number literal or a union of number literals. Every possible value must have exactly one handler, guaranteeing that no case is left unprocessed. The selected callback receives the literal value corresponding to its key, correctly narrowed by TypeScript.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/pattern/matchWithNumber/tryout.doc.ts"
  majorVersion="v1"
  height="565px"
/>

## Syntax

### Classic signature

```typescript
function matchWithNumber<Input extends number, Matcher>(
  input: Input,
  matcher: Matcher
): ReturnType<Matcher[keyof Matcher]>
```

### Curried signature

```typescript
function matchWithNumber<Input extends number, Matcher>(
  matcher: Matcher
): (input: Input) => ReturnType<Matcher[keyof Matcher]>
```

## Parameters

- `input`: a number literal or a union of number literals. Broad `number` values are rejected.
- `matcher`: an exhaustive object whose keys are exactly the input literals. Each handler receives its corresponding narrowed literal.

## Return value

The selected handler result. Its static type is the union of all handler return types.

## See also

- [`matchWithString`](/en/v1/api/pattern/matchWithString) - String equivalent.
- [`match`](/en/v1/api/pattern/match) - General-purpose pattern matching.
