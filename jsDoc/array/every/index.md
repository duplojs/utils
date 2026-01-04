Checks whether all elements satisfy a predicate.

**Supported call styles:**
- Classic: `every(array, predicate)` → returns a boolean
- Curried: `every(predicate)` → returns a function waiting for the array

The predicate receives `(element, { index, self })`, where `index` is the element position
and `self` is the original array.


```ts
{@include array/every/example.ts[3,16]}
```

@remarks
- Uses the same semantics as [`Array.prototype.every`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every)

@see [`A.some`](https://utils.duplojs.dev/en/v1/api/array/some) For checking if any element matches
@see [`A.filter`](https://utils.duplojs.dev/en/v1/api/array/filter) For selecting matching elements
@see https://utils.duplojs.dev/en/v1/api/array/every

@namespace A
