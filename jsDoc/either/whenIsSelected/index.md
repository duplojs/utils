Runs a callback on the unwrapped payloads selected by an exhaustive `Either` information selector.

**Supported call styles:**
- Classic: `whenIsSelected(input, selector, theFunction)` -> returns the callback result or the original input
- Curried: `whenIsSelected(selector, theFunction)` -> returns a function waiting for the input

The selector must map every possible information to `true` or `false`. A `true` entry unwraps the matching payload and passes it to the callback; a `false` entry forwards the original `Either` unchanged.

```ts
{@include either/whenIsSelected/example.ts[3,56]}
```

@remarks A selector value typed as `boolean` keeps both the transformed and original `Either` branches in the return type. At runtime, only `true` executes the callback.

@see https://utils.duplojs.dev/en/v1/api/either/whenIsSelected
@see [`E.whenHasInformation`](https://utils.duplojs.dev/en/v1/api/either/whenHasInformation)
@see [`E.unwrapSelection`](https://utils.duplojs.dev/en/v1/api/either/unwrapSelection)

@namespace E
