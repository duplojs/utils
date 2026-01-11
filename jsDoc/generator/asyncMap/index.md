Maps values from an iterable to an async generator.

**Supported call styles:**
- Classic: `asyncMap(iterator, theFunction)` → returns an async generator
- Curried: `asyncMap(theFunction)` → returns a function waiting for the iterator

The function receives `(item, { index })`.
The input iterator is not mutated.

```ts
{@include generator/asyncMap/example.ts[3,20]}
```

@see [`G.map`](https://utils.duplojs.dev/en/v1/api/generator/map) For sync iterables
@see [`G.asyncFilter`](https://utils.duplojs.dev/en/v1/api/generator/asyncFilter) For filtering values
@see https://utils.duplojs.dev/en/v1/api/generator/asyncMap

@namespace G
