Creates an extended pipe parser from two parsers.

**Supported call styles:**
- Method: `DPE.pipe(input, output, definition?)` -> returns a pipe parser

Runs the input parser, then feeds its output to the output parser.

```ts
{@include dataParser/extended/pipe/example.ts[3,14]}
```

@see https://utils.duplojs.dev/en/v1/api/dataParser/pipe

@namespace DPE
