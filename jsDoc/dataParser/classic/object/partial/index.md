Creates a new object parser where all properties become optional.

**Supported call styles:**
- Classic: `DP.partial(objectParser, definition?)` -> returns an object parser
- Curried: not available

Wraps each property of the object shape in optional(), allowing missing keys.

```ts
{@include dataParser/classic/object/partial/example.ts[3,13]}
```

@see https://utils.duplojs.dev/en/v1/api/dataParser/object

@namespace DP
