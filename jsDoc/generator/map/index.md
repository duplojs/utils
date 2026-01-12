Maps values from an iterable to a new generator.

**Supported call styles:**
- Classic: `map(iterator, theFunction)` → returns a generator
- Curried: `map(theFunction)` → returns a function waiting for the iterator

The function receives `(item, { index })`.
The input iterator is not mutated.

```ts
{@include generator/map/example.ts[3,17]}
```

@see [`G.filter`](https://utils.duplojs.dev/en/v1/api/generator/filter) For filtering values
@see [`G.asyncMap`](https://utils.duplojs.dev/en/v1/api/generator/asyncMap) For async iterables
@see https://utils.duplojs.dev/en/v1/api/generator/map

@namespace G
