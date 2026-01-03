Gets the last element of an array.

Signature: `last(array)` → returns the last element

Returns `undefined` when the array is empty.
The input array is not mutated.


```ts
{@include array/last/example.ts[3,7]}
```

@remarks
- Type-safe with tuple types: return type is inferred as the last element

@see [`A.first`](https://utils.duplojs.dev/en/v1/api/array/first) For accessing the first element
@see https://utils.duplojs.dev/en/v1/api/array/last

@namespace A
