Conditional mapping on Right values with explicit fallback for all non-Right inputs.

**Supported call styles:**
- Classic: `whenIsRightOtherwise(input, theFunction, otherwiseFunction)` → returns a value
- Curried: `whenIsRightOtherwise(theFunction, otherwiseFunction)` → returns a function waiting for the input

When input is Right, `theFunction` receives the unwrapped value. Otherwise, `otherwiseFunction` receives the original remaining input (Left or non-Either).

```ts
{@include either/whenIsRightOtherwise/example.ts[3,26]}
```

@see https://utils.duplojs.dev/en/v1/api/either/whenIsRightOtherwise

@namespace E
