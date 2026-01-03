Copies a sequence within an array to another position.

**Supported call styles:**
- Classic: `copyWithin(array, target, start, end?)` → returns a new array
- Curried: `copyWithin(target, start, end?)` → returns a function waiting for the array

The copy uses the range `[start, end)` and writes from `target`.
The input array is not mutated.


```ts
{@include array/copyWithin/example.ts[3,10]}
```

@remarks
- Uses the same semantics as [`Array.prototype.copyWithin`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/copyWithin)

@see [`A.slice`](https://utils.duplojs.dev/en/v1/api/array/slice) For extracting ranges
@see [`A.spliceReplace`](https://utils.duplojs.dev/en/v1/api/array/spliceReplace) For replacing a segment
@see https://utils.duplojs.dev/en/v1/api/array/copyWithin

@namespace A
