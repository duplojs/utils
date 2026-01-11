Creates a new object parser where optional properties become required.

**Supported call styles:**
- Classic: `DP.required(objectParser, definition?)` -> returns an object parser
- Curried: not available

Unwraps optional properties in the object shape so all keys are required.

```ts
{@include dataParser/classic/object/required/example.ts[3,22]}
```

@see https://utils.duplojs.dev/en/v1/api/dataParser/object

@namespace DP
