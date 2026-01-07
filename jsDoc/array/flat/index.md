Flattens nested arrays up to a given depth.

Signature: `flat(array, depth?)` → returns a new array

The input array is not mutated.

```ts
{@include array/flat/example.ts[3,15]}
```

@remarks
- Uses the same semantics as [`Array.prototype.flat`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flat)

@see [`A.flatMap`](https://utils.duplojs.dev/en/v1/api/array/flatMap) For map + flatten
@see https://utils.duplojs.dev/en/v1/api/array/flat

@namespace A
