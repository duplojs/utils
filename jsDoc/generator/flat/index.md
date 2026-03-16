Flattens nested iterables into a single generator.

**Supported call styles:**
- Classic: `flat(iterator, depth?)` → returns a generator

By default, `flat` flattens one level.
Use `depth` to control how many iterable levels are expanded.
Non-iterable values are yielded as-is.

```ts
{@include generator/flat/example.ts[3,22]}
```

@see [`G.asyncFlat`](https://utils.duplojs.dev/en/v1/api/generator/asyncFlat) For async iterables
@see https://utils.duplojs.dev/en/v1/api/generator/flat

@namespace G
