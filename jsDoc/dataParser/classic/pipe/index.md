Creates a data parser pipeline from an input parser to an output parser.

**Supported call styles:**
- Classic: `DP.pipe(input, output, definition?)` -> returns a pipe parser
- Curried: not available

Runs the input parser, then feeds its output to the output parser.

```ts
{@include dataParser/classic/pipe/example.ts[3,16]}
```

@see https://utils.duplojs.dev/en/v1/api/dataParser/pipe

@namespace DP
