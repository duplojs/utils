Creates a new object parser by selecting a subset of keys.

**Supported call styles:**
- Classic: `DP.pick(objectParser, pickObject, definition?)` -> returns an object parser
- Curried: not available

Builds a new object parser using only the selected keys from the original shape.

```ts
{@include dataParser/classic/object/pick/example.ts[3,20]}
```

@see https://utils.duplojs.dev/en/v1/api/dataParser/object

@namespace DP
