Cleans a POSIX path by removing a trailing slash and a leading `./` prefix.

**Supported call styles:**
- Classic: `fix(path)` -> returns a cleaned path

The function does not resolve `..` segments and only removes a single trailing slash and a single leading `./`.

```ts
{@include common/path/fix/example.ts[3,8]}
```

@see https://utils.duplojs.dev/en/v1/api/common/path/fix
