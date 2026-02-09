Groups elements from an iterable into an object by a group name.

**Supported call styles:**
- Classic: `group(iterator, theFunction)` → returns a grouped object
- Curried: `group(theFunction)` → returns a function waiting for the iterator

Behavior:
- The function receives `(element, { index, output })`
- `output` is `groupOutput` and returns `{ group, value }`
- The input iterator is not mutated

```ts
{@include generator/group/example.ts[3,28]}
```

@see [`G.groupOutput`](https://utils.duplojs.dev/en/v1/api/generator/groupOutput) For creating group outputs
@see [`G.asyncGroup`](https://utils.duplojs.dev/en/v1/api/generator/asyncGroup) For async iterables
@see https://utils.duplojs.dev/en/v1/api/generator/group

@namespace G
