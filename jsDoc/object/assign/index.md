Assigns properties from one object to another.

**Supported call styles:**
- Classic: `assign(input, value)` → returns a new object
- Curried: `assign(value)` → returns a function waiting for the input

The input object is not mutated.

@example
```ts
{@include object/assign/example.ts[3,24]}
```

@see [`O.override`](https://utils.duplojs.dev/en/v1/api/object/override) For skipping undefined values
@see https://utils.duplojs.dev/en/v1/api/object/assign

@namespace O
