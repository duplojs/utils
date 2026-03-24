---
outline: [2, 3]
description: "Creates a typed dependency handler for the flow system."
prev:
  text: "finalizer"
  link: "/en/v1/api/flow/finalizer"
next:
  text: "inject"
  link: "/en/v1/api/flow/inject"
---

# createDependence

The **`createDependence()`** function creates a typed dependency handler identified by a string name. This handler is then used with `F.inject()` and matched against the `dependencies` object passed to `F.run()` or `F.exec()`.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/flow/createDependence/tryout.doc.ts"
  majorVersion="v1"
  height="292px"
/>

## Syntax

```typescript
function createDependence<
	GenericName extends string
>(
	name: GenericName
): DependenceHandlerDefinition<GenericName>
```

## Parameters

- `name`: Dependency key used to match a value inside the runner dependency bag.

## Return value

A typed dependence handler definition. Once specialized with a type, it can be used with `F.inject()` to retrieve the matching dependency inside a flow.

## See also

- [`inject`](/en/v1/api/flow/inject) - Requests a dependency from the runner
- [`run`](/en/v1/api/flow/run) - Provides dependencies to the flow
