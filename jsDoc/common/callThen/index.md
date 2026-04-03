The callThen() function applies a callback to a value immediately, or waits for a promise input before running the same callback.

Supported call styles:
- Classic: `callThen(input, callback)` → returns a value or a promise depending on the input and callback

Behavior:
- direct values call the callback synchronously
- `Promise` inputs call the callback through `.then(...)`
- callback promises are preserved for direct values and flattened for `Promise` inputs

```ts
{@include common/callThen/example.ts[3,19]}
```

@see https://utils.duplojs.dev/en/v1/api/common/callThen
