Flattens nested sync or async iterables into an async generator.

**Supported call styles:**
- Classic: `asyncFlat(iterator, depth?)` → returns an async generator

By default, `asyncFlat` flattens one level.
Use `depth` to control how many iterable levels are expanded.
Sync iterables nested inside an async iterable are also flattened.

@see [`G.flat`](https://utils.duplojs.dev/en/v1/api/generator/flat) For sync iterables
@see https://utils.duplojs.dev/en/v1/api/generator/asyncFlat

@namespace G
