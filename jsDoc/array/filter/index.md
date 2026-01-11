Filters an array by a predicate, with classic and curried styles.

**Supported call styles:**
- Classic: `filter(array, predicate)` → returns a new array
- Curried: `filter(predicate)` → returns a function waiting for the array
- Classic predicate: `filter(array, isType)` → narrows item types
- Curried predicate: `filter(isType)` → narrows item types

The predicate receives `(item, { index, self })`.
The input array is not mutated.

```ts
{@include array/filter/example.ts[3,12]}
```

@remarks
- Predicate overloads (type guards) narrow the output element type

@see https://utils.duplojs.dev/en/v1/api/array/filter

@namespace A
