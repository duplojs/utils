---
outline: [2, 3]
description: "Forwards Either values selected by an exhaustive information selector unchanged and throws for the others."
prev:
  text: "unwrapSelectionOrThrow"
  link: "/en/v1/api/either/unwrapSelectionOrThrow"
next:
  text: "expect"
  link: "/en/v1/api/either/expect"
---

# forwardAssertsSelection

Forwards `Either` values selected by an exhaustive information selector unchanged and throws for the others.

The selector maps every possible information of the input union to `true` or `false`. An `Either` mapped to `true` is returned intact, while an `Either` mapped to `false` throws a `ForwardAssertsSelectionError`. Any value that is not an `Either` passes through unchanged.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/either/forwardAssertsSelection/tryout.doc.ts"
  majorVersion="v1"
  height="859px"
/>

## Syntax

### Classic signature

```typescript
function forwardAssertsSelection<
  GenericInput extends unknown,
  GenericSelector extends Record<Information, boolean>,
>(
  input: GenericInput,
  selector: GenericSelector,
): SelectedInput
```

### Curried signature

```typescript
function forwardAssertsSelection<
  GenericInput extends unknown,
  GenericSelector extends Record<Information, boolean>,
>(
  selector: GenericSelector,
): (input: GenericInput) => SelectedInput
```

## Parameters

- `selector`: Exhaustive object where every possible `Either` information from the input is mapped to `true` or `false`.
- `input`: Value to check immediately, or later through the curried form.

## Return value

Returns the input unchanged when it is not an `Either` or when its information is selected with `true`. If an `Either` information is mapped to `false`, the function throws `E.ForwardAssertsSelectionError`.

The return type excludes branches explicitly mapped to `false`. A selector entry typed as `boolean` keeps its branch in the return type because it may be `true` at runtime.

## See also

- [`unwrapSelectionOrThrow`](/en/v1/api/either/unwrapSelectionOrThrow) – Exhaustive selection that unwraps allowed payloads.
- [`unwrapSelection`](/en/v1/api/either/unwrapSelection) – Non-throwing exhaustive selection that unwraps allowed branches.
- [`forwardAsserts`](/en/v1/api/common/forwardAsserts) – Generic assertion that forwards the validated value.
