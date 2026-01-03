Finds the last element matching a predicate.

**Supported call styles:**
- Classic: `findLast(array, predicate)` → returns the element or `undefined`
- Curried: `findLast(predicate)` → returns a function waiting for the array
- Classic predicate: `findLast(array, isType)` → narrows the return type
- Curried predicate: `findLast(isType)` → narrows the return type

The predicate receives `(element, { index })`.


```ts
{@include array/findLast/example.ts[3,17]}
```

@remarks
- Predicate overloads (type guards) narrow the output type but can still return `undefined`
- Uses the same semantics as [`Array.prototype.findLast`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findLast)

@see [`A.find`](https://utils.duplojs.dev/en/v1/api/array/find) For finding from the start
@see https://utils.duplojs.dev/en/v1/api/array/findLast

@namespace A
