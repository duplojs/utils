Removes properties from an object.

**Supported call styles:**
- Classic: `omit(input, omitValue)` → returns a new object
- Curried: `omit(omitValue)` → returns a function waiting for the input

The `omitValue` can be a key array or a map of keys to booleans.
The input object is not mutated.

@example
```ts
{@include object/omit/example.ts[3,29]}
```

@see [`O.pick`](https://utils.duplojs.dev/en/v1/api/object/pick) For selecting keys
@see https://utils.duplojs.dev/en/v1/api/object/omit

@namespace O
