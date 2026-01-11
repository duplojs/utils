Overrides object properties, ignoring undefined values.

**Supported call styles:**
- Classic: `override(input, value)` → returns a new object
- Curried: `override(value)` → returns a function waiting for the input

The input object is not mutated.

```ts
{@include object/override/example.ts[3,30]}
```

@remarks
- Properties with `undefined` are not applied

@see [`O.assign`](https://utils.duplojs.dev/en/v1/api/object/assign) For direct assignment
@see https://utils.duplojs.dev/en/v1/api/object/override

@namespace O
