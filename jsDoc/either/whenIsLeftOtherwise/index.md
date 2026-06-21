Conditional mapping on Left values with explicit fallback for all non-Left inputs.

**Supported call styles:**
- Classic: `whenIsLeftOtherwise(input, theFunction, otherwiseFunction)` → returns a value
- Curried: `whenIsLeftOtherwise(theFunction, otherwiseFunction)` → returns a function waiting for the input

When input is Left, `theFunction` receives the unwrapped value. Otherwise, `otherwiseFunction` receives the original remaining input (Right or non-Either).

```ts
{@include either/whenIsLeftOtherwise/example.ts[3,26]}
```

@see https://utils.duplojs.dev/en/v1/api/either/whenIsLeftOtherwise

@namespace E
