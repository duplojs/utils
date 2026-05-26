---
outline: [2, 3]
description: "Type guard based on the literal information stored in the Either. Lets you precisely target one or many business cases without extra introspection."
prev:
  text: "asyncGroup"
  link: "/en/v1/api/either/asyncGroup"
next:
  text: "whenHasInformation"
  link: "/en/v1/api/either/whenHasInformation"
---

# hasInformation

Type guard based on the literal information stored in the Either. Lets you precisely target one or many business cases without extra introspection.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/either/hasInformation/tryout.doc.ts"
  majorVersion="v1"
  height="691px"
/>

## Syntax

```typescript
function hasInformation<
  const GenericInput extends unknown,
  GenericInformation extends (
    GenericInput extends Either
      ? ReturnType<typeof informationKind.getValue<GenericInput>>
      : never
  ),
>(
  input: GenericInput,
  information: GenericInformation | GenericInformation[],
): input is Extract<
  GenericInput,
  Kind<typeof informationKind.definition, GenericInformation>
>;

function hasInformation<
  const GenericInput extends unknown,
  GenericInformation extends (
    GenericInput extends Either
      ? ReturnType<typeof informationKind.getValue<GenericInput>>
      : never
  ),
>(
  information: GenericInformation | GenericInformation[],
): (input: GenericInput) => input is Extract<
  GenericInput,
  Kind<typeof informationKind.definition, GenericInformation>
>;
```

## Parameters

- `information`: Expected literal information, or an array of literal informations.
- `input` *(optional in the curried signature)*: Value on which to perform the check.

## Return value

A boolean, but mostly a type guard: when the result is `true`, TypeScript knows the Either carries one of the requested informations (`Right` or `Left`).

## Use cases

- Differentiate several errors/successes within the same `Either`.
- Match multiple business informations in a single guard.
- Chain with `E.whenHasInformation` to trigger a targeted action.

## See also

- [`whenHasInformation`](/en/v1/api/either/whenHasInformation) – Variant with callback.
- [`right`](/en/v1/api/either/right) / [`left`](/en/v1/api/either/left) – Constructors that enforce this literal information.
