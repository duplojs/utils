---
outline: [2, 3]
description: "Requests a dependency from the flow runner."
prev:
  text: "createDependence"
  link: "/en/v1/api/flow/createDependence"
next:
  text: "step"
  link: "/en/v1/api/flow/step"
---

# inject

The **`inject()`** function declares that a flow needs a dependency. The actual value is provided by `F.run()` or `F.exec()` through the `dependencies` parameter.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/flow/inject/tryout.doc.ts"
  majorVersion="v1"
  height="292px"
/>

## Syntax

```typescript
function inject<
	GenericDependenceHandler extends DependenceHandler
>(
	dependenceHandler: GenericDependenceHandler
): Generator<
	Injection<GenericDependenceHandler>,
	ReturnType<GenericDependenceHandler>
>
```

## Parameters

- `dependenceHandler`: Dependency descriptor created with `F.createDependence()`.

## Return value

A generator yielding an injection effect. Once the runner injects the matching dependency, the generator returns the injected value.

## See also

- [`run`](/en/v1/api/flow/run) - Provides dependencies to the flow
- [`exec`](/en/v1/api/flow/exec) - Can override dependencies for nested flows
