Concatenates sync or async iterables into a single async generator.

**Supported call styles:**
- Classic: `asyncConcat(iterator, elements, ...elementsRest)` → returns an async generator
- Curried: `asyncConcat(elements)` → returns a function waiting for the iterator

All iterables are concatenated in order.
Each argument can be either `Iterable` or `AsyncIterable`.

```ts
{@include generator/asyncConcat/example.ts[3,13]}
```

@see [`G.concat`](https://utils.duplojs.dev/en/v1/api/generator/concat) For sync iterables only
@see https://utils.duplojs.dev/en/v1/api/generator/asyncConcat

@namespace G
