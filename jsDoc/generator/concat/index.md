Concatenates iterables into a single generator.

**Supported call styles:**
- Classic: `concat(iterator, elements, ...elementsRest)` → returns a generator
- Curried: `concat(elements)` → returns a function waiting for the iterator

All iterables are concatenated in order.
The input iterables are not mutated.

```ts
{@include generator/concat/example.ts[3,8]}
```

@see [`G.asyncConcat`](https://utils.duplojs.dev/en/v1/api/generator/asyncConcat) For async or mixed iterables
@see https://utils.duplojs.dev/en/v1/api/generator/concat

@namespace G
