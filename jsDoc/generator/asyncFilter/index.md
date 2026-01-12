Filters values from an iterable with async support.

**Supported call styles:**
- Classic: `asyncFilter(iterator, predicate)` → returns an async generator
- Curried: `asyncFilter(predicate)` → returns a function waiting for the iterator
- Classic predicate: `asyncFilter(iterator, isType)` → narrows item types
- Curried predicate: `asyncFilter(isType)` → narrows item types

The predicate receives `(item, { index })`.
The input iterator is not mutated.

```ts
{@include generator/asyncFilter/example.ts[3,27]}
```

@remarks
- Predicate overloads (type guards) narrow the output type

@see [`G.filter`](https://utils.duplojs.dev/en/v1/api/generator/filter) For sync iterables
@see [`G.asyncMap`](https://utils.duplojs.dev/en/v1/api/generator/asyncMap) For mapping values
@see https://utils.duplojs.dev/en/v1/api/generator/asyncFilter

@namespace G
