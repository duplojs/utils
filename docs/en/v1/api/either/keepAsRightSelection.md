---
outline: [2, 3]
description: "Keeps selected Either informations on the Right side through an exhaustive selector."
prev:
  text: "keepAsRightByInformation"
  link: "/en/v1/api/either/keepAsRightByInformation"
next:
  text: "unwrapByInformation"
  link: "/en/v1/api/either/unwrapByInformation"
---

# keepAsRightSelection

Keeps selected `Either` informations on the `Right` side through an exhaustive selector.

The selector maps every possible information of the input union to `true` or `false`. A `true` entry keeps or converts the matching input to `Right`; a `false` entry keeps or converts it to `Left`.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/either/keepAsRightSelection/tryout.doc.ts"
  majorVersion="v1"
  height="712px"
/>

## Syntax

### Classic signature

```typescript
function keepAsRightSelection<
  GenericInput extends unknown,
  GenericSelector extends Record<Information, boolean>,
>(
  input: GenericInput,
  selector: GenericSelector,
): KeptAsRightOrLeftInput
```

### Curried signature

```typescript
function keepAsRightSelection<
  GenericInput extends unknown,
  GenericSelector extends Record<Information, boolean>,
>(
  selector: GenericSelector,
): (input: GenericInput) => KeptAsRightOrLeftInput
```

## Parameters

- `selector`: Exhaustive object where each possible input information is mapped to `true` or `false`.
- `input`: Either value to normalize immediately, or later through the curried form.

## Return value

Returns a `Right` when the current information is selected with `true`, converting a matching `Left` if needed. Returns a `Left` when the current information is selected with `false`, converting a matching `Right` if needed. Non-`Either` values are returned unchanged.

When a selector entry is typed as `boolean`, the return type includes both possible classifications for that information.

## See also

- [`keepAsRightByInformation`](/en/v1/api/either/keepAsRightByInformation) – Selects informations from a string or string array.
- [`unwrapSelection`](/en/v1/api/either/unwrapSelection) – Unwraps selected payloads from an exhaustive selector.
- [`matchInformation`](/en/v1/api/either/matchInformation) – Exhaustive callback-based matching by information.
