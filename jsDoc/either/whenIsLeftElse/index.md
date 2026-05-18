Conditional mapping on Left values with explicit fallback for all non-Left inputs.

**Supported call styles:**
- Classic: `whenIsLeftElse(input, theFunction, elseFunction)` → returns a value
- Curried: `whenIsLeftElse(theFunction, elseFunction)` → returns a function waiting for the input

When input is Left, `theFunction` receives the unwrapped value. Otherwise, `elseFunction` receives the original remaining input (Right or non-Either).

```ts
{@include either/whenIsLeftElse/example.ts[3,36]}
```

@see https://utils.duplojs.dev/en/v1/api/either/whenIsLeftElse

@namespace E
