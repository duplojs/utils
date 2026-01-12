Tests a string against a regular expression.

**Supported call styles:**
- Classic: `test(input, regExp)` → returns a boolean
- Curried: `test(regExp)` → returns a function waiting for the input

The input string is not mutated.

```ts
{@include string/test/example.ts[3,11]}
```

@remarks
- Uses the same semantics as [`RegExp.prototype.test`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test)

@see https://utils.duplojs.dev/en/v1/api/string/test

@namespace S
