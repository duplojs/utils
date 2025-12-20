---
outline: [2, 3]
prev:
  text: 'String'
  link: '/en/v1/api/string/'
next:
  text: 'Object'
  link: '/en/v1/api/object/'
---

# Number

Functions to manipulate numbers immutably and type-safely. All functions preserve the original values and return a new value.

## How to import?

The library exposes the `DNumber` and `N` namespaces from the main entry **or** via direct import (tree-shaking friendly), which lets you only load what you need.

```typescript
import { DNumber, N } from "@duplojs/utils";
import * as DNumber from "@duplojs/utils/number";
import * as N from "@duplojs/utils/number";
```

## Arithmetic operations

### [add](/fr/v1/api/number/add)
Adds two numbers.

### [subtract](/fr/v1/api/number/subtract)
Subtracts one number from another.

### [multiply](/fr/v1/api/number/multiply)
Multiplies two numbers.

### [divide](/fr/v1/api/number/divide)
Divides one number by another.

### [modulo](/fr/v1/api/number/modulo)
Returns the remainder of the division between two numbers.

### [power](/fr/v1/api/number/power)
Raises a number to a specified power.

### [negate](/fr/v1/api/number/negate)
Inverts the sign of a number.

## Math functions

### [abs](/fr/v1/api/number/abs)
Returns the absolute value of a number.

### [round](/fr/v1/api/number/round)
Rounds a number to the nearest integer.

### [ceil](/fr/v1/api/number/ceil)
Rounds a number up.

### [floor](/fr/v1/api/number/floor)
Rounds a number down.

### [trunc](/fr/v1/api/number/trunc)
Returns the integer part of a number.

### [max](/fr/v1/api/number/max)
Returns the largest number in a tuple.

### [min](/fr/v1/api/number/min)
Returns the smallest number in a tuple.

### [clamp](/fr/v1/api/number/clamp)
Clamps a number between a minimum and maximum value.

### [sqrt](/fr/v1/api/number/sqrt)
Returns the square root of a number.

### [toFixed](/fr/v1/api/number/toFixed)
Formats a number with a fixed number of decimals.

## Trigonometric functions

### [sin](/fr/v1/api/number/sin)
Returns the sine of a number (in radians).

### [cos](/fr/v1/api/number/cos)
Returns the cosine of a number (in radians).

### [tan](/fr/v1/api/number/tan)
Returns the tangent of a number (in radians).

### [asin](/fr/v1/api/number/asin)
Returns the arcsine of a number.

### [acos](/fr/v1/api/number/acos)
Returns the arccosine of a number.

### [atan](/fr/v1/api/number/atan)
Returns the arctangent of a number.

### [atan2](/fr/v1/api/number/atan2)
Returns the arctangent of the quotient of two numbers.

## Comparison

### [greater](/fr/v1/api/number/greater)
Checks whether a number is strictly greater than another.

### [greaterThan](/fr/v1/api/number/greaterThan)
Checks whether a number is greater than or equal to another.

### [less](/fr/v1/api/number/less)
Checks whether a number is strictly less than another.

### [lessThan](/fr/v1/api/number/lessThan)
Checks whether a number is less than or equal to another.
