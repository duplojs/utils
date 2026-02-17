Creates an extended `FormData` instance from a nested object and provides helpers to flatten or rebuild entries.

**Supported call styles:**
- Classic: `createFormData(inputValues)` -> returns a `TheFormData` instance

The returned instance extends native `FormData` and stores the original object in `inputValues`.
For backend reconstruction, use `TheFormData.fromEntries(...)` to rebuild nested objects from flattened form-data keys.

```ts
{@include common/createFormData/example.ts[3,27]}
```

@remarks
- `TheFormData.toFlatEntries(...)` flattens nested objects/arrays into path keys using the `/*\` separator.
- `TheFormData.fromEntries(...)` ignores `__proto__`, `constructor`, and `prototype` paths for safety.

@see https://utils.duplojs.dev/en/v1/api/common/createFormData
