Replaces a segment using splice semantics.

**Supported call styles:**
- Classic: `spliceReplace(array, indexFrom, elements)` → returns a new array
- Curried: `spliceReplace(indexFrom, elements)` → returns a function waiting for the array

The input array is not mutated.

```ts
{@include array/spliceReplace/example.ts[3,19]}
```

@remarks
- Uses the same semantics as [`Array.prototype.splice`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice)

@see [`A.spliceDelete`](https://utils.duplojs.dev/en/v1/api/array/spliceDelete) For deleting values
@see [`A.spliceInsert`](https://utils.duplojs.dev/en/v1/api/array/spliceInsert) For inserting values
@see https://utils.duplojs.dev/en/v1/api/array/spliceReplace

@namespace A
