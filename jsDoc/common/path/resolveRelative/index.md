Resolves path segments into a single POSIX-like path.

**Supported call styles:**
- Classic: `resolveRelative(...segments)` -> returns the resolved path

Empty segments are ignored, trailing slashes and leading `./` are removed, and absolute segments reset the base.
`..` segments remove previous segments and may remain leading when resolving above root.

```ts
{@include common/path/resolveRelative/example.ts[3,8]}
```

@see https://utils.duplojs.dev/en/v1/api/common/path/resolveRelative
