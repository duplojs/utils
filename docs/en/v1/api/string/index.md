---
outline: [2, 3]
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

### [capitalize](/fr/v1/api/string/capitalize)
Uppercases the first letter of a string.

### [uncapitalize](/fr/v1/api/string/uncapitalize)
Lowercases the first letter of a string.

### [toLowerCase](/fr/v1/api/string/toLowerCase)
Converts the entire string to lowercase.

### [toUpperCase](/fr/v1/api/string/toUpperCase)
Converts the entire string to uppercase.

### [normalize](/fr/v1/api/string/normalize)
Normalizes a Unicode string to a specific form.

### [repeat](/fr/v1/api/string/repeat)
Repeats a string a specified number of times.

### [replace](/fr/v1/api/string/replace)
Replaces the first occurrence of a pattern in a string.

### [replaceAll](/fr/v1/api/string/replaceAll)
Replaces all occurrences of a pattern in a string.

## Search and test

### [includes](/fr/v1/api/string/includes)
Checks whether a string contains a substring.

### [startsWith](/fr/v1/api/string/startsWith)
Checks whether a string starts with a specific substring.

### [endsWith](/fr/v1/api/string/endsWith)
Checks whether a string ends with a specific substring.

### [indexOf](/fr/v1/api/string/indexOf)
Returns the index of the first occurrence of a substring.

### [lastIndexOf](/fr/v1/api/string/lastIndexOf)
Returns the index of the last occurrence of a substring.

### [search](/fr/v1/api/string/search)
Searches for a match with a regular expression.

### [match](/fr/v1/api/string/match)
Retrieves matches of a regular expression.

### [matchAll](/fr/v1/api/string/matchAll)
Retrieves all matches of a regular expression with their groups.

## Extraction

### [charAt](/fr/v1/api/string/charAt)
Returns the character at a specific index.

### [at](/fr/v1/api/string/at)
Returns the character at an index (supports negative indexes).

### [slice](/fr/v1/api/string/slice)
Extracts a section of a string.

### [substring](/fr/v1/api/string/substring)
Returns a substring between two indexes.

### [split](/fr/v1/api/string/split)
Splits a string into an array of substrings.

## Padding and trim

### [padStart](/fr/v1/api/string/padStart)
Pads the start of a string to a given length.

### [padEnd](/fr/v1/api/string/padEnd)
Pads the end of a string to a given length.

### [trim](/fr/v1/api/string/trim)
Removes whitespace from the start and end of a string.

### [trimStart](/fr/v1/api/string/trimStart)
Removes whitespace from the start of a string.

### [trimEnd](/fr/v1/api/string/trimEnd)
Removes whitespace from the end of a string.

## Utilities

### [concat](/fr/v1/api/string/concat)
Concatenates multiple strings together.

### [sort](/fr/v1/api/string/sort)
Sorts an array of strings in ascending or descending order.

### [isKeyof](/fr/v1/api/string/isKeyof)
Checks whether a string is a valid key of an object (type guard).
