Finds the first element matching a predicate.

**Supported call styles:**
- Classic: `find(array, predicate)` → returns the element or `undefined`
- Curried: `find(predicate)` → returns a function waiting for the array
- Classic predicate: `find(array, isType)` → narrows the return type
- Curried predicate: `find(isType)` → narrows the return type

The predicate receives `(element, { index })`.
The input array is not mutated.

```ts
{@include array/find/example.ts[3,12]}
```

@remarks
- Predicate overloads (type guards) narrow the output type but can still return `undefined`
- Uses the same semantics as [`Array.prototype.find`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find)

@see https://utils.duplojs.dev/en/v1/api/array/find

@namespace A
