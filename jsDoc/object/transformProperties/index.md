Transforms multiple object properties.

**Supported call styles:**
- Classic: `transformProperties(obj, transformObject)` → returns a new object
- Curried: `transformProperties(transformObject)` → returns a function waiting for the object

The input object is not mutated.

```ts
{@include object/transformProperties/example.ts[3,30]}
```

@see [`O.transformProperty`](https://utils.duplojs.dev/en/v1/api/object/transformProperty) For a single key
@see https://utils.duplojs.dev/en/v1/api/object/transformProperties

@namespace O
