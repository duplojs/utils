---
outline: [2, 3]
description: "Pattern matching makes it possible to destructure any data (union, tuple, object, literal, predicate) and orchestrate a typed control flow thanks to match, when, whenNot, otherwise, and exhaustive. Each branch returns a PatternResult, which avoids fragile switch statements, simplifies chaining with pipe, and guarantees exhaustiveness at compile time."
prev:
  text: 'Object'
  link: '/en/v1/api/object/'
next:
  text: 'API Reference'
  link: '/en/v1/api/'
---

# Pattern

Pattern matching makes it possible to destructure any data (union, tuple, object, literal, predicate) and orchestrate a typed control flow thanks to `match`, `when`, `whenNot`, `otherwise`, and `exhaustive`. Each branch returns a `PatternResult`, which avoids fragile `switch` statements, simplifies chaining with `pipe`, and guarantees exhaustiveness at compile time.

## How to import ?

The library exposes the `DPattern` and `P` namespaces from the main entry **or** via direct import (tree-shaking friendly).

```typescript
import { DPattern, P } from "@duplojs/utils";
import * as DPattern from "@duplojs/utils/pattern";
import * as P from "@duplojs/utils/pattern";
```

## Running the matching

### [match](/fr/v1/api/pattern/match)
Associates a pattern and a transformation function. Returns a `PatternResult` when the input matches the pattern exactly (primitive, tuple, object, union...).

### [when](/fr/v1/api/pattern/when)
Adds a guard (type predicate or boolean) in a pipeline. If the condition is true, the associated function is executed and its result is wrapped.

### [whenNot](/fr/v1/api/pattern/whenNot)
Adds a guard (type predicate or boolean) in a pipeline. If the condition is false, the associated function is executed and its result is wrapped.

### [otherwise](/fr/v1/api/pattern/otherwise)
Defines the fallback called when no more patterns matched. Very useful to close a `pipe` after several `when`.

### [exhaustive](/fr/v1/api/pattern/exhaustive)
Unwraps a `PatternResult` to get the final value and forces TypeScript to verify that all branches have been handled.

## Building and checking patterns

### [isMatch](/fr/v1/api/pattern/isMatch)
Strictly tests whether a value matches a pattern and returns a type guard (`value is ...`). Handy for simple conditions without triggering a pipeline.

### [union](/fr/v1/api/pattern/union)
Composes multiple patterns into a single reusable helper (`ToolPattern`). Ensures the input matches one of the provided patterns (deeply on objects/arrays).
