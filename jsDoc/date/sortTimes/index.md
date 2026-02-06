Sorts duration values and returns normalized `TheTime[]`.

**Supported call styles:**
- Classic: `sortTimes(array, type)` → `TheTime[]`
- Curried: `sortTimes(type)` → `(array) => TheTime[]`

```ts
{@include date/sortTimes/example.ts[3,13]}
```

@remarks
- `type` is `"ASC"` or `"DSC"`.

@see https://utils.duplojs.dev/en/v1/api/date/sortTimes

@namespace D
