---
outline: [2, 3]
prev:
  text: "includes"
  link: "/en/v1/api/array/includes"
next:
  text: "indexOf"
  link: "/en/v1/api/array/indexOf"
---

# notIncludes

The **`notIncludes()`** function checks that an array does not contain a given value and acts as a type guard to exclude this value from the typing.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/array/notIncludes/tryout.doc.ts"
  majorVersion="v1"
  height="350px"
/>

## Syntax

### Classic signature

```typescript
function notIncludes<
  GenericArrayValue extends unknown,
  const GenericNotIncludeValue extends RemoveFromUnion<
    Extract<GenericArrayValue, NotIncludeValue>,
    Exclude<NotIncludeValue, null | undefined>
  >,
>(
  input: readonly GenericArrayValue[],
  value: GenericNotIncludeValue,
): input is Exclude<
  GenericArrayValue,
  GenericNotIncludeValue
>[]
```

### Curried signature

```typescript
function notIncludes<
  GenericArrayValue extends unknown,
  const GenericNotIncludeValue extends RemoveFromUnion<
    Extract<GenericArrayValue, NotIncludeValue>,
    Exclude<NotIncludeValue, null | undefined>
  >,
>(
  value: GenericNotIncludeValue,
): (input: readonly GenericArrayValue[]) => input is Exclude<
  GenericArrayValue,
  GenericNotIncludeValue
>[]
```

## Parameters

- `input`: Source array.
- `value`: Value whose absence you want to guarantee in the array.

## Return value

A boolean. When `true`, TypeScript knows that the array does not contain `value` and removes the value from the element type.

## See also

- [`includes`](/en/v1/api/array/includes) - Checks for the presence of a value
- [`filter`](/en/v1/api/array/filter) - Filters an array according to a predicate
