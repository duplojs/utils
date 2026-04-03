---
outline: [2, 3]
description: "Generator-based control-flow helpers to compose synchronous and asynchronous workflows with typed effects, steps, exits, breaks, and dependency injection."
prev:
  text: 'Either'
  link: '/en/v1/api/either/'
next:
  text: 'Generator'
  link: '/en/v1/api/generator/'
---

# Flow

Generator-based control-flow helpers to compose synchronous and asynchronous workflows with typed effects, steps, exits, breaks, and dependency injection.

## How to import?

The library exposes the `DFlow` and `F` namespaces from the main entry **or** via direct import (tree-shaking friendly), which lets you only load what you need.

```typescript
import { DFlow, F } from "@duplojs/utils";
import * as DFlow from "@duplojs/utils/flow";
import * as F from "@duplojs/utils/flow";
```

## Flow creation and execution

### [create](/en/v1/api/flow/create)
Creates a reusable flow object from a flow function.

### [run](/en/v1/api/flow/run)
Executes a flow and returns its final value.

### [exec](/en/v1/api/flow/exec)
Executes a nested flow inside the current flow.

## Execution coordination

These helpers keep internal state in `WeakMap`s keyed by the executed flow reference. To use them correctly across multiple calls, reuse a flow created with `F.create(...)` or a function returned by `F.toFunction(...)`.

### [calledByNext](/en/v1/api/flow/calledByNext)
Calls a callback when a later run of the same flow replaces one that is still active.

### [queue](/en/v1/api/flow/queue)
Serializes or limits concurrent runs of the same flow.

### [throttling](/en/v1/api/flow/throttling)
Ignores or defers runs that happen too close together for the same flow.

## Control flow

### [breakIf](/en/v1/api/flow/breakIf)
Stops the current flow branch when a predicate matches.

### [exitIf](/en/v1/api/flow/exitIf)
Exits the running flow when a predicate matches, even from nested flows.

### [step](/en/v1/api/flow/step)
Registers a named step and can optionally compute a value.

## Lifecycle and cleanup

### [defer](/en/v1/api/flow/defer)
Registers a cleanup callback executed when the flow finishes.

### [finalizer](/en/v1/api/flow/finalizer)
Registers a final callback handled by the flow runner.

### [createInitializer](/en/v1/api/flow/createInitializer)
Creates an initializer that returns a value and automatically registers flow cleanup effects.

## Dependencies

### [createDependence](/en/v1/api/flow/createDependence)
Creates a typed dependency handler for the flow system.

### [inject](/en/v1/api/flow/inject)
Requests a dependency from the flow runner.
