---
outline: [2, 3]
description: "Type guard based on the literal information stored in the Either. Lets you precisely target a business case without extra introspection."
prev:
  text: "asyncGroup"
  link: "/en/v1/api/either/asyncGroup"
next:
  text: "whenHasInformation"
  link: "/en/v1/api/either/whenHasInformation"
---

# hasInformation

Type guard based on the literal information stored in the Either. Lets you precisely target a business case without extra introspection.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/either/hasInformation/tryout.doc.ts"
  majorVersion="v1"
  height="523px"
/>

## Syntax

```typescript
function hasInformation<
  const GenericInput extends unknown,
  GenericInformation extends ReturnType<typeof eitherInformationKind.getValue<GenericInput>>
>(
  input: GenericInput,
  information: GenericInformation
): input is Extract<GenericInput, Kind<typeof eitherInformationKind.definition, GenericInformation>>;

function hasInformation<
  const GenericInput extends unknown,
  GenericInformation extends ReturnType<typeof eitherInformationKind.getValue<GenericInput>>
>(
  information: GenericInformation
): (input: GenericInput) => input is Extract<GenericInput, Kind<typeof eitherInformationKind.definition, GenericInformation>>;
```

## Parameters

- `information`: Expected literal string (`"user.created"`, `"user.invalid"`, etc.).
- `input` *(optional in the curried signature)*: Value on which to perform the check.

## Return value

A boolean, but mostly a type guard: when the result is `true`, TypeScript knows the Either carries the requested information (`Right` or `Left`).

## Use cases

- Differentiate several errors/successes within the same `Either`.
- Simplify switch/case by relying on literals.
- Chain with `E.whenHasInformation` to trigger a targeted action.

## See also

- [`whenHasInformation`](/en/v1/api/either/whenHasInformation) – Variant with callback.
- [`right`](/en/v1/api/either/right) / [`left`](/en/v1/api/either/left) – Constructors that enforce this literal information.
