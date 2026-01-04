Gets a property value by key.

**Supported call styles:**
- Classic: `getProperty(obj, key)` → returns the value
- Curried: `getProperty(key)` → returns a function waiting for the object

The input object is not mutated.

```ts
{@include object/getProperty/example.ts[3,23]}
```

@see [`O.getDeepProperty`](https://utils.duplojs.dev/en/v1/api/object/getDeepProperty) For nested paths
@see https://utils.duplojs.dev/en/v1/api/object/getProperty

@namespace O
