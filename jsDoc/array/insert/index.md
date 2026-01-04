Adds an element to the end of an array.

**Supported call styles:**
- Classic: `insert(input, array)` → returns a new array
- Curried: `insert(array)` → returns a function waiting for the input

The input array is not mutated.


```ts
{@include array/insert/example.ts[3,13]}
```

@remarks
- Works like `push`, but the input is inserted into the array argument, which is handy in pipes

@see [`A.unshift`](https://utils.duplojs.dev/en/v1/api/array/unshift) For adding at the start
@see [`A.concat`](https://utils.duplojs.dev/en/v1/api/array/concat) For concatenating arrays
@see [`A.push`](https://utils.duplojs.dev/en/v1/api/array/push) For adding at the end of an array (input first)
@see https://utils.duplojs.dev/en/v1/api/array/insert

@namespace A
