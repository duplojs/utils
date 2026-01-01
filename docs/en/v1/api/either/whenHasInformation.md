---
outline: [2, 3]
prev:
  text: "hasInformation"
  link: "/en/v1/api/either/hasInformation"
next:
  text: "safeCallback"
  link: "/en/v1/api/either/safeCallback"
---

# whenHasInformation

Functional pattern matching based on the literal information of an `Either`. The function is executed only when the information (or one of the informations) matches.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/either/whenHasInformation/tryout.doc.ts"
  majorVersion="v1"
  height="700px"
/>

## Syntax

### Classic signature

```typescript
function whenHasInformation<
  const GenericInput extends unknown,
  GenericInformation extends ReturnType<typeof eitherInformationKind.getValue<GenericInput>>,
  const GenericOutput extends AnyValue
>(
  input: GenericInput,
  information: GenericInformation | GenericInformation[],
  theFunction: (value: Unwrap<Extract<GenericInput, Kind<typeof eitherInformationKind.definition, GenericInformation> & WrappedValue>>) => GenericOutput
): GenericOutput | Exclude<GenericInput, Kind<typeof eitherInformationKind.definition, GenericInformation>>;
```

### Curried signature

```typescript
function whenHasInformation<
  const GenericInput extends unknown,
  GenericInformation extends ReturnType<typeof eitherInformationKind.getValue<GenericInput>>,
  const GenericOutput extends AnyValue
>(
  information: GenericInformation | GenericInformation[],
  theFunction: (value: Unwrap<Extract<GenericInput, Kind<typeof eitherInformationKind.definition, GenericInformation> & WrappedValue>>) => GenericOutput
): (input: GenericInput) => GenericOutput | Exclude<GenericInput, Kind<typeof eitherInformationKind.definition, GenericInformation>>;
```

## Parameters

- `information`: Literal or array of accepted literals.
- `theFunction`: Callback invoked only when the information matches.
- `input`: Value to process immediately (otherwise use the curried version in your pipes).

## Return value

- Classic signature: returns either the callback result or the initial value (if no info matches).
- Curried signature: returns a function ready to compose.

## Use cases

- Write exhaustive pattern matching without `switch` or nested `if`.
- Factor shared processing for several successes/errors (`information` accepts an array).
- React precisely to business states described via `E.right`/`E.left`.

## See also

- [`hasInformation`](/en/v1/api/either/hasInformation) – Low-level type guard.
- [`whenIsRight`](/en/v1/api/either/whenIsRight) / [`whenIsLeft`](/en/v1/api/either/whenIsLeft) – To operate only by side.
