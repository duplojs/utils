---
outline: [2, 3]
prev:
  text: 'Common'
  link: '/en/v1/api/common/'
next:
  text: 'Clean'
  link: '/en/v1/api/clean/'
---

# Array

Functions to manipulate arrays immutably and type-safely. All functions preserve the original array and return a new value.

## How to import?

The library exposes the `DArray` and `A` namespaces from the main entry **or** via direct import (tree-shaking friendly), which lets you only load what you need.

```typescript
import { DArray, A } from "@duplojs/utils";
import * as DArray from "@duplojs/utils/array";
import * as A from "@duplojs/utils/array";
```

## Creation and conversion

### [from](/en/v1/api/array/from)
Creates an array from an iterable or an array-like object.

### [toTuple](/en/v1/api/array/toTuple)
Converts an array to a tuple with strict typing.

## Element access

### [at](/en/v1/api/array/at)
Returns the element at an index (supports negative indexes).

### [first](/en/v1/api/array/first)
Returns the first element of the array.

### [last](/en/v1/api/array/last)
Returns the last element of the array.

### [length](/en/v1/api/array/length)
Returns the length of the array.

## Search and test

### [includes](/en/v1/api/array/includes)
Checks whether an array contains an element.

### [notIncludes](/en/v1/api/array/notIncludes)
Checks that an array does not contain a given value (type guard).

### [indexOf](/en/v1/api/array/indexOf)
Returns the index of the first occurrence of an element.

### [lastIndexOf](/en/v1/api/array/lastIndexOf)
Returns the index of the last occurrence of an element.

### [isLastIndex](/en/v1/api/array/isLastIndex)
Indicates whether an index corresponds to the last element of the array.

### [find](/en/v1/api/array/find)
Finds the first element that satisfies a condition.

### [findLast](/en/v1/api/array/findLast)
Finds the last element that satisfies a condition.

### [findIndex](/en/v1/api/array/findIndex)
Finds the index of the first element that satisfies a condition.

### [findLastIndex](/en/v1/api/array/findLastIndex)
Finds the index of the last element that satisfies a condition.

### [every](/en/v1/api/array/every)
Checks whether all elements satisfy a condition.

### [some](/en/v1/api/array/some)
Checks whether at least one element satisfies a condition.

### [is](/en/v1/api/array/is)
Checks whether a value is an array (type guard).

## Transformation

### [map](/en/v1/api/array/map)
Applies a function to each element and returns a new array.

### [filter](/en/v1/api/array/filter)
Filters elements according to a condition.

### [select](/en/v1/api/array/select)
Filters and maps in a single pass (with output inference).

### [slice](/en/v1/api/array/slice)
Extracts a portion of the array without modifying it.

### [flat](/en/v1/api/array/flat)
Flattens a nested array by a specified depth.

### [flatMap](/en/v1/api/array/flatMap)
Applies a function then flattens the result by one level.

### [chunk](/en/v1/api/array/chunk)
Splits an array into fixed-size chunks.

### [reverse](/en/v1/api/array/reverse)
Reverses the order of the elements in the array.

### [sort](/en/v1/api/array/sort)
Sorts the elements of the array.

## Aggregation

### [reduce](/en/v1/api/array/reduce)
Reduces the array to a single value (left to right).

### [reduceRight](/en/v1/api/array/reduceRight)
Reduces the array to a single value (right to left).

### [join](/en/v1/api/array/join)
Joins all elements into a string with a separator.

### [group](/en/v1/api/array/group)
Groups elements according to a key function.

### [sum](/en/v1/api/array/sum)
Computes the sum of the array elements.

## Min/Max

### [minOf](/en/v1/api/array/minOf)
Returns the minimum value according to a projection function.

### [maxOf](/en/v1/api/array/maxOf)
Returns the maximum value according to a projection function.

### [minElements](/en/v1/api/array/minElements)
Returns the element(s) having the minimum value.

### [maxElements](/en/v1/api/array/maxElements)
Returns the element(s) having the maximum value.

## Modification

### [set](/en/v1/api/array/set)
Updates an element at a specific index.

### [fill](/en/v1/api/array/fill)
Fills a section of the array with a value.

### [fillAll](/en/v1/api/array/fillAll)
Fills the entire array with a value.

### [copyWithin](/en/v1/api/array/copyWithin)
Copies a section of the array to another location.

### [insert](/en/v1/api/array/insert)
Adds a value at the end of the array (arguments reversed for currying).

## Add and remove

### [push](/en/v1/api/array/push)
Adds one or more elements to the end of the array.

### [pop](/en/v1/api/array/pop)
Removes and returns the last element.

### [unshift](/en/v1/api/array/unshift)
Adds one or more elements to the beginning of the array.

### [shift](/en/v1/api/array/shift)
Removes and returns the first element.

### [concat](/en/v1/api/array/concat)
Concatenates multiple arrays together.

### [spliceDelete](/en/v1/api/array/spliceDelete)
Deletes elements starting from an index.

### [spliceInsert](/en/v1/api/array/spliceInsert)
Inserts elements at a specific index.

### [spliceReplace](/en/v1/api/array/spliceReplace)
Replaces elements starting from an index.

## Find and modify

### [findAndReplace](/en/v1/api/array/findAndReplace)
Finds an element and replaces it with a new value.

### [findAndSpliceDelete](/en/v1/api/array/findAndSpliceDelete)
Finds and deletes an element.

### [findAndSpliceInsert](/en/v1/api/array/findAndSpliceInsert)
Finds an element and inserts new elements.

### [findAndSpliceReplace](/en/v1/api/array/findAndSpliceReplace)
Finds and replaces an element via splice.

## Utilities

### [coalescing](/en/v1/api/array/coalescing)
Returns the first non-null and non-undefined element.
