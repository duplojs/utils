The justExec() function executes a callback immediately and returns the callback result.

**Supported call styles:**
- Classic: `justExec(theFunction)` -> executes `theFunction` and returns its output
- Curried: not available for this function

The callback is called once per invocation. The function itself does not transform the callback output.

```ts
{@include common/justExec/example.ts[3,14]}
```

@see https://utils.duplojs.dev/en/v1/api/common/justExec
