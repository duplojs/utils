Creates an array from an iterable or array-like value.

Signature: `from(input)` → returns an array or a promise

Async iterables return a `Promise` of an array.

```ts
{@include array/from/example.ts[3,17]}
```

@remarks
- Uses the same semantics as [`Array.from`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from) for sync inputs

@see https://utils.duplojs.dev/en/v1/api/array/from

@namespace A
