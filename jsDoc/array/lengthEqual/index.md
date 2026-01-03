Checks if an array has a specific length.

**Supported call styles:**
- Classic: `lengthEqual(array, length)` → returns a boolean
- Curried: `lengthEqual(length)` → returns a function waiting for the array
- Classic predicate: `lengthEqual(array, length)` → narrows to a tuple
- Curried predicate: `lengthEqual(length)` → narrows to a tuple

The input array is not mutated.


```ts
{@include array/lengthEqual/example.ts[3,23]}
```

@remarks
- Predicate overloads (type guards) narrow the array to a tuple of the given length

@see [`A.length`](https://utils.duplojs.dev/en/v1/api/array/length) For getting length
@see https://utils.duplojs.dev/en/v1/api/array/lengthEqual

@namespace A
