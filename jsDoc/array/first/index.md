Gets the first element of an array.

**Supported call styles:**
- Classic: `first(array)` → returns the first element

Returns `undefined` when the array is empty.
The input array is not mutated.

```ts
{@include array/first/example.ts[3,7]}
```

@remarks
- Type-safe with tuple types: return type is inferred as the first element

@see https://utils.duplojs.dev/en/v1/api/array/first

@namespace A
