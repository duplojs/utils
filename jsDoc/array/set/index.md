Sets an element at a given index.

**Supported call styles:**
- Classic: `set(array, index, value)` → returns a new array
- Curried: `set(index, value)` → returns a function waiting for the array

Negative indices are supported.
The input array is not mutated.

```ts
{@include array/set/example.ts[3,19]}
```

@remarks
- Uses the same semantics as [`Array.prototype.with`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/with) for index normalization

@see [`A.at`](https://utils.duplojs.dev/en/v1/api/array/at) For reading an index
@see https://utils.duplojs.dev/en/v1/api/array/set

@namespace A
