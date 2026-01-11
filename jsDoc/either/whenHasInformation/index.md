Functional pattern matching based on the literal information of an Either. The function is executed only when the information (or one of the informations) matches.

**Supported call styles:**
- Classic: `whenHasInformation(input, information, theFunction)` → returns a value
- Curried: `whenHasInformation(information, theFunction)` → returns a function waiting for the input

If the condition matches, the callback runs; otherwise the original value is returned.

```ts
{@include either/whenHasInformation/example.ts[6,24]}
```

@see https://utils.duplojs.dev/en/v1/api/either/whenHasInformation

@namespace E
