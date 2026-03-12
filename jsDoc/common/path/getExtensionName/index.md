Returns the last extension of a path, with or without the leading dot.

Supported call style:
- Classic: `getExtensionName(path, params?)` -> returns the extension or null

Behavior:
- returns the last extension segment of the path
- returns `"txt"` by default for `"file.txt"`
- returns `".txt"` when `withDot` is `true`
- returns `null` when no extension is found, when the path ends with a dot, or when the path is `..`

```ts
{@include common/path/getExtensionName/example.ts[3,10]}
```

@see https://utils.duplojs.dev/en/v1/api/common/path/getExtensionName
