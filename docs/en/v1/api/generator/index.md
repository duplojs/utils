---
outline: [2, 3]
description: "Functions to manipulate JavaScript generators in a functional and type-safe way. Generators allow you to process data sequences lazily, computing values only when they are needed."
prev:
  text: 'Either'
  link: '/en/v1/api/either/'
next:
  text: 'String'
  link: '/en/v1/api/string/'
---

# Generator

Functions to manipulate JavaScript generators in a functional and type-safe way. Generators allow you to process data sequences lazily, computing values only when they are needed.

## How to import?

The library exposes the `DGenerator` and `G` namespaces from the main entry **or** via direct import (tree-shaking friendly), which lets you only load what you need.

```typescript
import { DGenerator, G } from "@duplojs/utils";
import * as DGenerator from "@duplojs/utils/generator";
import * as G from "@duplojs/utils/generator";
```

## Execution

### [execute](/en/v1/api/generator/execute)
Executes a generator and returns all its values in an array.

## Iteration

### [loop](/en/v1/api/generator/loop)
Iterates over each element of a generator with a callback function.

### [asyncLoop](/en/v1/api/generator/asyncLoop)
Iterates over each element of a generator with an async callback function.

## Transformation

### [map](/en/v1/api/generator/map)
Transforms each element of a generator by applying a function.

### [asyncMap](/en/v1/api/generator/asyncMap)
Transforms each element of a generator with an async function.

### [chunk](/en/v1/api/generator/chunk)
Splits an iterable into fixed-size chunks and returns a generator of arrays.

## Filtering

### [filter](/en/v1/api/generator/filter)
Filters the elements of a generator according to a predicate.

### [asyncFilter](/en/v1/api/generator/asyncFilter)
Filters the elements of a generator with an async predicate.

## Grouping

### [group](/en/v1/api/generator/group)
Groups iterable elements into an object of arrays by group name.

### [asyncGroup](/en/v1/api/generator/asyncGroup)
Asynchronous grouping version for async iterables.

## Reduction

### [reduce](/en/v1/api/generator/reduce)
Reduces a generator to a single value by applying an accumulator function.

### [asyncReduce](/en/v1/api/generator/asyncReduce)
Reduces a generator to a single value with an async accumulator function.
