Adds elements to the end of an array.

**Supported call styles:**
- Classic: `push(array, item, ...items)` → returns a new array
- Curried: `push(item)` → returns a function waiting for the array

The input array is not mutated.

```ts
{@include array/push/example.ts[3,18]}
```

@remarks
- Classic style supports multiple items via rest parameters
- Curried style adds only a single item

@see [`A.unshift`](https://utils.duplojs.dev/en/v1/api/array/unshift) For adding at the start
@see https://utils.duplojs.dev/en/v1/api/array/push

@namespace A
