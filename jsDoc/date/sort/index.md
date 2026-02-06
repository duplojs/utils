Sorts date values and returns normalized `TheDate[]`.

**Supported call styles:**
- Classic: `sort(array, type)` → `TheDate[]`
- Curried: `sort(type)` → `(array) => TheDate[]`

```ts
{@include date/sort/example.ts[3,13]}
```

@remarks
- `type` is `"ASC"` or `"DSC"`.

@see https://utils.duplojs.dev/en/v1/api/date/sort

@namespace D
