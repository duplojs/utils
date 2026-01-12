Creates a data parser that transforms the output of another parser.

**Supported call styles:**
- Classic: `DP.transform(inner, theFunction, definition?)` -> returns a transform parser
- Curried: not available

Runs the inner parser and applies a transformation function to its output.

```ts
{@include dataParser/classic/transform/example.ts[3,14]}
```

@see https://utils.duplojs.dev/en/v1/api/dataParser/transform

@namespace DP
