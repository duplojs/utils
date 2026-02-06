Provides the list of supported IANA timezone identifiers.

Signature: `timezone` → enum-like constant, `Timezone` → associated union type

Use these values with timezone-aware date functions (`getYear`, `format`, `applyTimezone`, etc.).

```ts
{@include date/timezone/example.ts[3,11]}
```

@remarks
- Values follow the IANA timezone database naming.

@see https://utils.duplojs.dev/en/v1/api/date/getTimezoneOffset

@namespace D
