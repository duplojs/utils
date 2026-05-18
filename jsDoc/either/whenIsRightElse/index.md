Conditional mapping on Right values with explicit fallback for all non-Right inputs.

**Supported call styles:**
- Classic: `whenIsRightElse(input, theFunction, elseFunction)` → returns a value
- Curried: `whenIsRightElse(theFunction, elseFunction)` → returns a function waiting for the input

When input is Right, `theFunction` receives the unwrapped value. Otherwise, `elseFunction` receives the original remaining input (Left or non-Either).

```ts
{@include either/whenIsRightElse/example.ts[3,36]}
```

@see https://utils.duplojs.dev/en/v1/api/either/whenIsRightElse

@namespace E
