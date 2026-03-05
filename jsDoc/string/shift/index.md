Removes the first character from a string.

Signature: `shift(input)` -> returns a new string

The input string is not mutated.

```ts
{@include string/shift/example.ts[3,7]}
```

@remarks
- Type-safe with literal strings: return type removes the first character when possible.

@see [`S.pop`](https://utils.duplojs.dev/en/v1/api/string/pop) For removing the last character
@see https://utils.duplojs.dev/en/v1/api/string/shift

@namespace S
