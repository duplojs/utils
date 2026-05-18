---
outline: [2, 3]
description: "Type-focused helper that returns the same Either while keeping strict Left/Right typing."
prev:
  text: "matchInformationOtherwise"
  link: "/en/v1/api/either/matchInformationOtherwise"
next:
  text: "safeCallback"
  link: "/en/v1/api/either/safeCallback"
---

# expect

Type-focused helper that returns the same `Either` while keeping strict `Left`/`Right` typing.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/either/expect/tryout.doc.ts"
  majorVersion="v1"
  height="502px"
/>

## Syntax

```typescript
function expect<
  GenericEither extends Right | Left
>(
  input: GenericEither
): GenericEither;
```

## Parameters

- `input`: Either value to preserve.

## Return value

Returns exactly the same runtime value as input. The function is mainly useful to preserve strict Either typing in composed flows.

## See also

- [`matchInformation`](/en/v1/api/either/matchInformation) - Exhaustive matching by information.
- [`matchInformationOtherwise`](/en/v1/api/either/matchInformationOtherwise) - Non-exhaustive matching with fallback.
