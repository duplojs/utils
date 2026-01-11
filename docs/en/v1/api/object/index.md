---
outline: [2, 3]
description: "Functions to manipulate objects immutably and type-safely. All functions preserve the original object and return a new value."
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

### [keys](/en/v1/api/object/keys)
Returns an array of an object's keys with precise typing.

### [countKeys](/en/v1/api/object/countKeys)
Counts the number of an object's keys while ignoring internal keys.

### [values](/en/v1/api/object/values)
Returns an array of an object's values.

### [entries](/en/v1/api/object/entries)
Returns an array of an object's key-value pairs with strict typing.

### [entry](/en/v1/api/object/entry)
Creates a typed key-value pair (tuple).

### [fromEntries](/en/v1/api/object/fromEntries)
Builds an object from an array of key-value pairs.

### [getProperty](/en/v1/api/object/getProperty)
Retrieves the value of a property from an object.

### [getDeepProperty](/en/v1/api/object/getDeepProperty)
Retrieves the value of a deep property via a path (path notation).

## Transformation

### [pick](/en/v1/api/object/pick)
Creates a new object by selecting only certain properties.

### [omit](/en/v1/api/object/omit)
Creates a new object by excluding certain properties.

### [assign](/en/v1/api/object/assign)
Merges multiple objects together (similar to Object.assign but type-safe).

### [override](/en/v1/api/object/override)
Overrides an object's properties with another object's, ignoring undefined values.

### [transformProperty](/en/v1/api/object/transformProperty)
Transforms a specific property of an object via a function.

### [transformProperties](/en/v1/api/object/transformProperties)
Transforms multiple properties of an object via functions.

### [to](/en/v1/api/object/to)
Transforms a value into a new object according to a transformation schema.

## Checking and filtering

### [hasKeys](/en/v1/api/object/hasKeys)
Checks whether an object has certain keys (type guard).

### [discriminate](/en/v1/api/object/discriminate)
Discriminates an object by the value of a property (type guard for unions).

### [deepDiscriminate](/en/v1/api/object/deepDiscriminate)
Discriminates an object by the value of a deep property (type guard for unions).
