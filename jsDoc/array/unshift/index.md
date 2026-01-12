Adds elements to the start of an array.

**Supported call styles:**
- Classic: `unshift(array, element, ...elements)` → returns a new array
- Curried: `unshift(element)` → returns a function waiting for the array

The input array is not mutated.

```ts
{@include array/unshift/example.ts[3,18]}
```

@remarks
- Classic style supports multiple elements via rest parameters
- Curried style adds only a single element

@see [`A.push`](https://utils.duplojs.dev/en/v1/api/array/push) For adding at the end
@see https://utils.duplojs.dev/en/v1/api/array/unshift

@namespace A
