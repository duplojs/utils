Creates a data parser for deterministic template literal strings.

**Supported call styles:**
- Classic: `DP.templateLiteral(template, definition?)` -> returns a template literal parser
- Curried: not available

Validates that the input matches the provided template literal shape and pattern.

```ts
{@include dataParser/classic/templateLiteral/example.ts[3,15]}
```

@see https://utils.duplojs.dev/en/v1/api/dataParser/templateLiteral

@namespace DP
