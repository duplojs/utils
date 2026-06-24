Reassigns issue messages after the current extended parser has run.

**Supported call styles:**
- Method: `dataParser.errorHandler(transformers, definition?)` -> returns an error handler parser

Runs the current parser, inspects every produced issue source, and replaces matching messages with the provided transformers.

```ts
{@include dataParser/extended/base/errorHandler/example.ts[3,19]}
```

@remarks
Checkers added directly to the returned error handler run after message rewriting. Issues produced by those checkers keep their own `errorMessage` or the handler `definition.errorMessage`.

@see https://utils.duplojs.dev/en/v1/api/dataParser/errorHandler

@namespace DPE
