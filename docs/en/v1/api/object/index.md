---
outline: [2, 3]
prev:
  text: 'Number'
  link: '/en/v1/api/number/'
next:
  text: 'Pattern'
  link: '/en/v1/api/pattern/'
---

# Object

Functions to manipulate objects immutably and type-safely. All functions preserve the original object and return a new value.

## How to import?

The library exposes the `DObject` and `O` namespaces from the main entry **or** via direct import (tree-shaking friendly), which lets you only load what you need.

```typescript
import { DObject, O } from "@duplojs/utils";
import * as DObject from "@duplojs/utils/object";
import * as O from "@duplojs/utils/object";
```

## Access and extraction

### [keys](/fr/v1/api/object/keys)
Returns an array of an object's keys with precise typing.

### [values](/fr/v1/api/object/values)
Returns an array of an object's values.

### [entries](/fr/v1/api/object/entries)
Returns an array of an object's key-value pairs with strict typing.

### [entry](/fr/v1/api/object/entry)
Creates a typed key-value pair (tuple).

### [fromEntries](/fr/v1/api/object/fromEntries)
Builds an object from an array of key-value pairs.

### [getProperty](/fr/v1/api/object/getProperty)
Retrieves the value of a property from an object.

### [getDeepProperty](/fr/v1/api/object/getDeepProperty)
Retrieves the value of a deep property via a path (path notation).

## Transformation

### [pick](/fr/v1/api/object/pick)
Creates a new object by selecting only certain properties.

### [omit](/fr/v1/api/object/omit)
Creates a new object by excluding certain properties.

### [assign](/fr/v1/api/object/assign)
Merges multiple objects together (similar to Object.assign but type-safe).

### [override](/fr/v1/api/object/override)
Overrides an object's properties with another object's, ignoring undefined values.

### [transformProperty](/fr/v1/api/object/transformProperty)
Transforms a specific property of an object via a function.

### [transformProperties](/fr/v1/api/object/transformProperties)
Transforms multiple properties of an object via functions.

### [to](/fr/v1/api/object/to)
Transforms a value into a new object according to a transformation schema.

## Checking and filtering

### [hasKeys](/fr/v1/api/object/hasKeys)
Checks whether an object has certain keys (type guard).

### [discriminate](/fr/v1/api/object/discriminate)
Discriminates an object by the value of a property (type guard for unions).

### [deepDiscriminate](/fr/v1/api/object/deepDiscriminate)
Discriminates an object by the value of a deep property (type guard for unions).
