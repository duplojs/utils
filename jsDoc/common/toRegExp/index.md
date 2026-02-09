The toRegExp() function normalizes a value into a regular expression. Strings and string arrays are escaped and converted to exact-match regex patterns.

Supported call style:
- Classic: `toRegExp(input)` → returns a value

Behavior:
- `string` input becomes an exact regex (`^...$`)
- `string[]` input becomes an exact alternation regex (`^(?:...|...)$`)
- `RegExp` input is returned as-is

```ts
{@include common/toRegExp/example.ts[3,13]}
```

@see https://utils.duplojs.dev/en/v1/api/common/toRegExp
