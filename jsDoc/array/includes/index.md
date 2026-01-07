Checks if an array includes a given value.

**Supported call styles:**
- Classic: `includes(array, value)` → returns a boolean
- Curried: `includes(value)` → returns a function waiting for the array

```ts
{@include array/includes/example.ts[3,20]}
```

@remarks
- relevant for taking action based on the result
- Uses the same semantics as [`Array.prototype.includes`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes)

@see [`A.notIncludes`](https://utils.duplojs.dev/en/v1/api/array/notIncludes) For the opposite check
@see [`A.indexOf`](https://utils.duplojs.dev/en/v1/api/array/indexOf) For getting the index
@see [`A.find`](https://utils.duplojs.dev/en/v1/api/array/find) For finding the element
@see https://utils.duplojs.dev/en/v1/api/array/includes

@namespace A
