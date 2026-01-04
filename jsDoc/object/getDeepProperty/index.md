Gets a nested property value using a path.

**Supported call styles:**
- Classic: `getDeepProperty(input, path)` → returns the value
- Curried: `getDeepProperty(path)` → returns a function waiting for the input

The path uses dot notation.
The input object is not mutated.

@example
```ts
{@include object/getDeepProperty/example.ts[3,29]}
```

@see [`O.getProperty`](https://utils.duplojs.dev/en/v1/api/object/getProperty) For top-level keys
@see https://utils.duplojs.dev/en/v1/api/object/getDeepProperty

@namespace O
