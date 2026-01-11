Creates a data parser for arrays of a given element parser.

**Supported call styles:**
- Classic: `DP.array(element, definition?)` -> returns an array parser
- Curried: not available

Validates that the input is an array and validates each element with the provided parser.

```ts
{@include dataParser/classic/array/example.ts[3,15]}
```

@see https://utils.duplojs.dev/en/v1/api/dataParser/array

@namespace DP
