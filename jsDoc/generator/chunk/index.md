Splits an iterable into fixed-size chunks.

**Supported call styles:**
- Classic: `chunk(iterator, size)` → returns a generator of arrays
- Curried: `chunk(size)` → returns a function waiting for the iterator

The last chunk may be smaller than the size.
The input iterator is not mutated.

```ts
{@include generator/chunk/example.ts[3,10]}
```

@see [`G.asyncChunk`](https://utils.duplojs.dev/en/v1/api/generator/asyncChunk) For async iterables
@see https://utils.duplojs.dev/en/v1/api/generator/chunk

@namespace G
