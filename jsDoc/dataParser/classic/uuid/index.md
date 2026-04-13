Creates a string parser specialized for UUID values.

**Supported call styles:**
- Function: `uuid(definition?)` -> `DataParserString`

This is a shorthand for `string({ checkers: [checkerUuid(...)] })`.

```ts
{@include dataParser/classic/uuid/example.ts[3,12]}
```

@remarks
- The checker contract is output-based: checker compatibility is determined by the parser output type.

@see https://utils.duplojs.dev/en/v1/api/dataParser/string

@namespace DP
