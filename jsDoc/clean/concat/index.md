Concatenates strings and returns a wrapped String.

**Supported call styles:**
- Classic: `concat(input, ...texts)` -> returns a String
- Curried: `concat(text)` -> returns a function waiting for the input

Use it to build string values while staying inside the Clean domain.

```ts
{@include clean/concat/example.ts[3,20]}
```

@see https://utils.duplojs.dev/en/v1/api/clean/primitives/operators/concat

@namespace C
