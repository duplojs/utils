Groups elements from an async iterable into an object by a group name.

**Supported call styles:**
- Classic: `asyncGroup(asyncIterator, theFunction)` → returns a promise of grouped object
- Curried: `asyncGroup(theFunction)` → returns a function waiting for the async iterator

Behavior:
- The function receives `(element, { index, output })`
- `theFunction` can return a value or a promise of value
- `output` is `groupOutput` and returns `{ group, value }`
- The input async iterator is not mutated

```ts
{@include generator/asyncGroup/example.ts[3,14]}
```

@see [`G.group`](https://utils.duplojs.dev/en/v1/api/generator/group) For sync iterables
@see [`G.groupOutput`](https://utils.duplojs.dev/en/v1/api/generator/groupOutput) For creating group outputs
@see https://utils.duplojs.dev/en/v1/api/generator/asyncGroup

@namespace G
