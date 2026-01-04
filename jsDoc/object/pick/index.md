Selects properties from an object.

**Supported call styles:**
- Classic: `pick(input, pickValue)` → returns a new object
- Curried: `pick(pickValue)` → returns a function waiting for the input

The `pickValue` can be a key array or a map of keys to booleans.
The input object is not mutated.

@example
```ts
{@include object/pick/example.ts[3,30]}
```

@see [`O.omit`](https://utils.duplojs.dev/en/v1/api/object/omit) For removing keys
@see https://utils.duplojs.dev/en/v1/api/object/pick

@namespace O
