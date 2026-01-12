Pipes the output of the current parser into another parser.

**Supported call styles:**
- Method: `dataParser.pipe(output, definition?)` -> returns a pipe parser

Runs the current parser, then feeds its output to the output parser.

```ts
{@include dataParser/extended/base/pipe/example.ts[3,16]}
```

@see https://utils.duplojs.dev/en/v1/api/dataParser/pipe

@namespace DPE
