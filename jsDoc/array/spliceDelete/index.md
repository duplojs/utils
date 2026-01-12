Deletes a segment from an array using splice semantics.

**Supported call styles:**
- Classic: `spliceDelete(array, indexTo, deleteCount)` → returns a new array
- Curried: `spliceDelete(indexTo, deleteCount)` → returns a function waiting for the array

The input array is not mutated.

```ts
{@include array/spliceDelete/example.ts[3,12]}
```

@remarks
- Uses the same semantics as [`Array.prototype.splice`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice)

@see [`A.spliceInsert`](https://utils.duplojs.dev/en/v1/api/array/spliceInsert) For inserting values
@see [`A.spliceReplace`](https://utils.duplojs.dev/en/v1/api/array/spliceReplace) For replacing values
@see https://utils.duplojs.dev/en/v1/api/array/spliceDelete

@namespace A
