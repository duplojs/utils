---
outline: [2, 3]
description: "The sortCompare() function compares two strings using a locale-aware Intl.Collator."
prev:
  text: "sort"
  link: "/en/v1/api/string/sort"
next:
  text: "concat"
  link: "/en/v1/api/string/concat"
---

# sortCompare

The **`sortCompare()`** function compares two strings using a locale-aware `Intl.Collator`.

It uses the locale `"en-US-u-kn-true"` with `{ usage: "sort", sensitivity: "variant", numeric: false, ignorePunctuation: false }`, which means the comparison is case- and accent-sensitive, punctuation affects ordering, and digits are compared as strings (not numerically).

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/string/sortCompare/tryout.doc.ts"
  majorVersion="v1"
  height="229px"
/>

## Syntax

### Classic signature

```typescript
function sortCompare(
	valueB: string,
	valueA: string
): number
```

### Curried signature

```typescript
function sortCompare(
	valueB: string
): (valueA: string) => number
```

## Parameters

- `valueB`: Reference value used for the comparison.
- `valueA`: Value to compare against `valueB`.

## Return value

A number less than `0` if `valueA` is ordered before `valueB`, greater than `0` if after, and `0` if they are equivalent according to the collator rules.

## See also

- [`sort`](/en/v1/api/string/sort) - Sorts an array of strings
- [`normalize`](/en/v1/api/string/normalize) - Normalizes a Unicode string
