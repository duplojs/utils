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

### [add](/en/v1/api/number/add)
Adds two numbers.

### [subtract](/en/v1/api/number/subtract)
Subtracts one number from another.

### [multiply](/en/v1/api/number/multiply)
Multiplies two numbers.

### [divide](/en/v1/api/number/divide)
Divides one number by another.

### [modulo](/en/v1/api/number/modulo)
Returns the remainder of the division between two numbers.

### [power](/en/v1/api/number/power)
Raises a number to a specified power.

### [negate](/en/v1/api/number/negate)
Inverts the sign of a number.

## Math functions

### [abs](/en/v1/api/number/abs)
Returns the absolute value of a number.

### [round](/en/v1/api/number/round)
Rounds a number to the nearest integer.

### [ceil](/en/v1/api/number/ceil)
Rounds a number up.

### [floor](/en/v1/api/number/floor)
Rounds a number down.

### [trunc](/en/v1/api/number/trunc)
Returns the integer part of a number.

### [max](/en/v1/api/number/max)
Returns the largest number in a tuple.

### [min](/en/v1/api/number/min)
Returns the smallest number in a tuple.

### [clamp](/en/v1/api/number/clamp)
Clamps a number between a minimum and maximum value.

### [sqrt](/en/v1/api/number/sqrt)
Returns the square root of a number.

### [toFixed](/en/v1/api/number/toFixed)
Formats a number with a fixed number of decimals.

## Trigonometric functions

### [sin](/en/v1/api/number/sin)
Returns the sine of a number (in radians).

### [cos](/en/v1/api/number/cos)
Returns the cosine of a number (in radians).

### [tan](/en/v1/api/number/tan)
Returns the tangent of a number (in radians).

### [asin](/en/v1/api/number/asin)
Returns the arcsine of a number.

### [acos](/en/v1/api/number/acos)
Returns the arccosine of a number.

### [atan](/en/v1/api/number/atan)
Returns the arctangent of a number.

### [atan2](/en/v1/api/number/atan2)
Returns the arctangent of the quotient of two numbers.

## Comparison

### [greater](/en/v1/api/number/greater)
Checks whether a number is strictly greater than another.

### [greaterThan](/en/v1/api/number/greaterThan)
Checks whether a number is greater than or equal to another.

### [less](/en/v1/api/number/less)
Checks whether a number is strictly less than another.

### [lessThan](/en/v1/api/number/lessThan)
Checks whether a number is less than or equal to another.
