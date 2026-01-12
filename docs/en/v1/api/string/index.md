---
outline: [2, 3]
description: "Functions to manipulate strings immutably and type-safely. All functions preserve the original string and return a new value."
prev:
  text: 'Generator'
  link: '/en/v1/api/generator/'
next:
  text: 'Number'
  link: '/en/v1/api/number/'
---

# String

Functions to manipulate strings immutably and type-safely. All functions preserve the original string and return a new value.

## How to import?

The library exposes the `DString` and `S` namespaces from the main entry **or** via direct import (tree-shaking friendly), which lets you only load what you need.

```typescript
import { DString, S } from "@duplojs/utils";
import * as DString from "@duplojs/utils/string";
import * as S from "@duplojs/utils/string";
```

## Transformation

### [capitalize](/en/v1/api/string/capitalize)
Uppercases the first letter of a string.

### [uncapitalize](/en/v1/api/string/uncapitalize)
Lowercases the first letter of a string.

### [toLowerCase](/en/v1/api/string/toLowerCase)
Converts the entire string to lowercase.

### [toUpperCase](/en/v1/api/string/toUpperCase)
Converts the entire string to uppercase.

### [normalize](/en/v1/api/string/normalize)
Normalizes a Unicode string to a specific form.

### [repeat](/en/v1/api/string/repeat)
Repeats a string a specified number of times.

### [replace](/en/v1/api/string/replace)
Replaces the first occurrence of a pattern in a string.

### [replaceAll](/en/v1/api/string/replaceAll)
Replaces all occurrences of a pattern in a string.

## Search and test

### [includes](/en/v1/api/string/includes)
Checks whether a string contains a substring.

### [startsWith](/en/v1/api/string/startsWith)
Checks whether a string starts with a specific substring.

### [endsWith](/en/v1/api/string/endsWith)
Checks whether a string ends with a specific substring.

### [indexOf](/en/v1/api/string/indexOf)
Returns the index of the first occurrence of a substring.

### [lastIndexOf](/en/v1/api/string/lastIndexOf)
Returns the index of the last occurrence of a substring.

### [search](/en/v1/api/string/search)
Searches for a match with a regular expression.

### [match](/en/v1/api/string/match)
Retrieves matches of a regular expression.

### [matchAll](/en/v1/api/string/matchAll)
Retrieves all matches of a regular expression with their groups.

## Extraction

### [charAt](/en/v1/api/string/charAt)
Returns the character at a specific index.

### [at](/en/v1/api/string/at)
Returns the character at an index (supports negative indexes).

### [slice](/en/v1/api/string/slice)
Extracts a section of a string.

### [substring](/en/v1/api/string/substring)
Returns a substring between two indexes.

### [split](/en/v1/api/string/split)
Splits a string into an array of substrings.

## Padding and trim

### [padStart](/en/v1/api/string/padStart)
Pads the start of a string to a given length.

### [padEnd](/en/v1/api/string/padEnd)
Pads the end of a string to a given length.

### [trim](/en/v1/api/string/trim)
Removes whitespace from the start and end of a string.

### [trimStart](/en/v1/api/string/trimStart)
Removes whitespace from the start of a string.

### [trimEnd](/en/v1/api/string/trimEnd)
Removes whitespace from the end of a string.

## Utilities

### [concat](/en/v1/api/string/concat)
Concatenates multiple strings together.

### [sort](/en/v1/api/string/sort)
Sorts an array of strings in ascending or descending order.

### [sortCompare](/en/v1/api/string/sortCompare)
Compares two strings using locale-aware sorting rules.

### [isKeyof](/en/v1/api/string/isKeyof)
Checks whether a string is a valid key of an object (type guard).
