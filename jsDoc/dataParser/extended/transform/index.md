Creates an extended transform parser from another parser.

**Supported call styles:**
- Method: `DPE.transform(inner, theFunction, definition?)` -> returns a transform parser

Runs the inner parser and applies a transformation function to its output.

```ts
{@include dataParser/extended/transform/example.ts[3,14]}
```

@see https://utils.duplojs.dev/en/v1/api/dataParser/transform

@namespace DPE
