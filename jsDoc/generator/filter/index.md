Filters values from an iterable.

**Supported call styles:**
- Classic: `filter(iterator, predicate)` → returns a generator
- Curried: `filter(predicate)` → returns a function waiting for the iterator
- Classic predicate: `filter(iterator, isType)` → narrows item types
- Curried predicate: `filter(isType)` → narrows item types

The predicate receives `(item, { index })`.
The input iterator is not mutated.

@example
```ts
{@include generator/filter/example.ts[3,17]}
```

@remarks
- Predicate overloads (type guards) narrow the output type

@see [`G.map`](https://utils.duplojs.dev/en/v1/api/generator/map) For mapping values
@see [`G.asyncFilter`](https://utils.duplojs.dev/en/v1/api/generator/asyncFilter) For async iterables
@see https://utils.duplojs.dev/en/v1/api/generator/filter

@namespace G
