Splits an async iterable into fixed-size chunks.

**Supported call styles:**
- Classic: `asyncChunk(iterator, size)` → returns an async generator of arrays
- Curried: `asyncChunk(size)` → returns a function waiting for the iterator

The last chunk may be smaller than the size.
The input iterator is not mutated.

```ts
{@include generator/asyncChunk/example.ts[3,17]}
```

@see [`G.chunk`](https://utils.duplojs.dev/en/v1/api/generator/chunk) For sync iterables
@see https://utils.duplojs.dev/en/v1/api/generator/asyncChunk

@namespace G
