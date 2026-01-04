Compares two strings for sorting.

**Supported call styles:**
- Classic: `sortCompare(valueA, valueB)` → returns a number
- Curried: `sortCompare(valueB)` → returns a function waiting for valueA

The comparison uses a locale-aware collator.

```ts
{@include string/sortCompare/example.ts[3,15]}
```

@remarks
- Uses `Intl.Collator` with locale "en-US-u-kn-true" and sort-specific options

@see https://utils.duplojs.dev/en/v1/api/string/sortCompare

@namespace S
