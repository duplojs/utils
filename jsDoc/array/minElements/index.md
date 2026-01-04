Checks if an array has at least a given length.

**Supported call styles:**
- Classic: `minElements(array, minLength)` → returns a boolean
- Curried: `minElements(minLength)` → returns a function waiting for the array
- Classic predicate: `minElements(array, minLength)` → narrows to a tuple prefix
- Curried predicate: `minElements(minLength)` → narrows to a tuple prefix

The input array is not mutated.


```ts
{@include array/minElements/example.ts[3,26]}
```

@remarks
- Predicate overloads (type guards) narrow the array length but can still be `false`

@see [`A.maxElements`](https://utils.duplojs.dev/en/v1/api/array/maxElements) For maximum length checks
@see https://utils.duplojs.dev/en/v1/api/array/minElements

@namespace A
