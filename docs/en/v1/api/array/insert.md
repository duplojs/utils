---
outline: [2, 3]
description: "The insert() function adds a value to the end of an array and returns a new instance. The curried signature first accepts the array (array), then the value (input), which makes composition easier. (This function is similar to push(), but the order of arguments is reversed)."
prev:
  text: "copyWithin"
  link: "/en/v1/api/array/copyWithin"
next:
  text: "push"
  link: "/en/v1/api/array/push"
---

# insert

The **`insert()`** function adds a value to the end of an array and returns a new instance. The curried signature first accepts the array (`array`), then the value (`input`), which makes composition easier. (This function is similar to `push()`, but the order of arguments is reversed).

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/array/insert/tryout.doc.ts"
  majorVersion="v1"
  height="334px"
/>

## Syntax

### Classic signature

```typescript
function insert<
  GenericElement extends unknown,
>(
  input: GenericElement,
  array: readonly GenericElement[],
): GenericElement[]
```

### Curried signature

```typescript
function insert<
  GenericElement extends unknown,
>(
  array: readonly GenericElement[],
): (input: GenericElement) => GenericElement[]
```

## Parameters

- `input`: Value to add at the end of the array.
- `array`: Target array.

## Return value

A new array containing all original elements followed by `input`.

## See also

- [`push`](/en/v1/api/array/push) - Adds one or more elements at the end of the array
- [`concat`](/en/v1/api/array/concat) - Merges multiple arrays
- [`unshift`](/en/v1/api/array/unshift) - Adds to the beginning of the array
