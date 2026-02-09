Creates a group output object for `group` and `asyncGroup`.

**Supported call styles:**
- Classic: `groupOutput(group, value)` → returns a group output
- Curried: `groupOutput(group)` → returns a function waiting for the value

Behavior:
- The returned object always has `{ group, value }`
- The `group` name is preserved as a string literal when possible

```ts
{@include generator/groupOutput/example.ts[3,18]}
```

@see [`G.group`](https://utils.duplojs.dev/en/v1/api/generator/group) For grouping sync iterables
@see [`G.asyncGroup`](https://utils.duplojs.dev/en/v1/api/generator/asyncGroup) For grouping async iterables
@see https://utils.duplojs.dev/en/v1/api/generator/groupOutput

@namespace G
