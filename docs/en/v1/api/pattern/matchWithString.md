---
outline: [2, 3]
description: "matchWithString() performs exhaustive pattern matching on a string literal union and guarantees processing for every possible value."
prev:
  text: "match"
  link: "/en/v1/api/pattern/match"
next:
  text: "matchWithStringOtherwise"
  link: "/en/v1/api/pattern/matchWithStringOtherwise"
---

# matchWithString

`matchWithString()` performs exhaustive pattern matching on a string literal or a union of string literals. Every possible value must have exactly one handler, guaranteeing that no case is left unprocessed. The selected callback receives the literal value corresponding to its key, correctly narrowed by TypeScript.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/pattern/matchWithString/tryout.doc.ts"
  majorVersion="v1"
  height="565px"
/>

## Syntax

### Classic signature

```typescript
function matchWithString<Input extends string, Matcher>(
  input: Input,
  matcher: Matcher
): ReturnType<Matcher[keyof Matcher]>
```

### Curried signature

```typescript
function matchWithString<Input extends string, Matcher>(
  matcher: Matcher
): (input: Input) => ReturnType<Matcher[keyof Matcher]>
```

## Parameters

- `input`: a string literal or a union of string literals. Broad `string` values are rejected.
- `matcher`: an exhaustive object whose keys are exactly the input literals. Each handler receives its corresponding narrowed literal.

## Return value

The selected handler result. Its static type is the union of all handler return types.

## See also

- [`matchWithNumber`](/en/v1/api/pattern/matchWithNumber) - Numeric equivalent.
- [`match`](/en/v1/api/pattern/match) - General-purpose pattern matching.
