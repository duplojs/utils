Concatenates arrays into a new array.

**Supported call styles:**
- Classic: `concat(array, elements, ...elementsRest)` → returns a new array
- Curried: `concat(elements)` → returns a function waiting for the array

All arrays are concatenated in order.
The input array is not mutated.

```ts
{@include array/concat/example.ts[3,8]}
```

@remarks
- Classic style supports concatenating multiple arrays via rest parameters
- Curried style concatenates only two arrays (`elements` into `array`)

@see https://utils.duplojs.dev/en/v1/api/array/concat

@namespace A
