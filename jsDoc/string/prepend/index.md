Prepends one or more strings to an input string.

**Supported call styles:**
- Classic: `prepend(input, text, ...textsRest)` -> returns a new string
- Curried: `prepend(text)` -> returns a function waiting for the input

The input string is not mutated.

```ts
{@include string/prepend/example.ts[3,18]}
```

@remarks
- Classic style supports multiple prefix strings with rest parameters.
- Curried style prepends a single `text` value.

@see https://utils.duplojs.dev/en/v1/api/string/prepend
@see [`S.concat`](https://utils.duplojs.dev/en/v1/api/string/concat) For appending strings

@namespace S
