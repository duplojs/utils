Checks that an array does not include a value.

**Supported call styles:**
- Classic: `notIncludes(array, value)` → returns a boolean
- Curried: `notIncludes(value)` → returns a function waiting for the array
- Classic predicate: `notIncludes(array, value)` → narrows element types
- Curried predicate: `notIncludes(value)` → narrows element types

Uses same-value-zero comparison.
The input array is not mutated.


```ts
{@include array/notIncludes/example.ts[3,18]}
```

@remarks
- Predicate overloads (type guards) narrow the element type

@see [`A.includes`](https://utils.duplojs.dev/en/v1/api/array/includes) For the opposite check
@see [`A.filter`](https://utils.duplojs.dev/en/v1/api/array/filter) For selecting elements
@see https://utils.duplojs.dev/en/v1/api/array/notIncludes

@namespace A
