Transforms a single object property.

**Supported call styles:**
- Classic: `transformProperty(obj, key, transform)` → returns a new object
- Curried: `transformProperty(key, transform)` → returns a function waiting for the object

The input object is not mutated.

```ts
{@include object/transformProperty/example.ts[3,25]}
```

@see [`O.transformProperties`](https://utils.duplojs.dev/en/v1/api/object/transformProperties) For multiple keys
@see https://utils.duplojs.dev/en/v1/api/object/transformProperty

@namespace O
