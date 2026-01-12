Creates a union parser between the current parser and another parser.

**Supported call styles:**
- Method: `dataParser.or(option, definition?)` -> returns a union parser

Tries the current parser, then the option parser if the first fails.

```ts
{@include dataParser/extended/base/or/example.ts[3,15]}
```

@see https://utils.duplojs.dev/en/v1/api/dataParser/union

@namespace DPE
