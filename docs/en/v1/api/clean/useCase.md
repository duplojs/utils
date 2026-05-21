---
outline: [2, 3]
description: "A useCase is a function of the application layer that materializes a business request. Each useCase corresponds to a specific business action and contains the logic necessary for its execution."
prev:
  text: "Port"
  link: "/en/v1/api/clean/port"
next:
  text: "chainedFunction"
  link: "/en/v1/api/clean/chainedFunction"
---

# UseCase

A `useCase` is a function of the application layer that materializes a business request. Each `useCase` corresponds to a specific business action and contains the logic necessary for its execution.

## Example

<MonacoTSEditor
  src="/examples/v1/api/clean/useCase/tryout.doc.ts"
  majorVersion="v1"
  height="820px"
  :foldLines="[3, 22, 36]"
/>

## How it works

`C.createUseCase(...)` returns a **use case handler**.

The idea is to separate two things:

- **the declaration** of the use case: its dependencies (ports and/or other use cases) + the factory that builds the final function
- **the instantiation** of the use case: provide concrete implementations of the ports (infrastructure) to obtain the executable function

A `UseCase` can depend on another `UseCaseHandler`. In this case, instantiation is handled automatically: `getUseCase(...)` resolves the sub-use-cases from the same `ports` object.

::: info
In this context, a `repository` is only a semantic alias of `port` through `createRepository`.
:::

## Create a `UseCase`

Creating a use case means defining:

- its dependencies (ports and/or use cases)
- a factory that receives these **instantiated** dependencies and returns the use case function

## Instantiate a `UseCase`

To get the executable function, call:
- `useCaseHandler.getUseCase({ ...ports })`

This pattern facilitates injection, testing, and keeps the application layer independent of infrastructure details.

## Instantiate multiple `UseCase` (`C.useCaseInstances`)

When you have multiple use cases to instantiate, `C.useCaseInstances(...)` avoids repeating `getUseCase(...)` everywhere.

It takes:
- an object `{ key: useCaseHandler }`
- an object `{ key: portImplementation }`

And returns:
- an object `{ key: useCaseFunction }` (same keys as the starting object)

`useCaseInstances` also supports dependencies of type `UseCaseHandler`: sub-use-cases are instantiated automatically from the same ports object.

## Methods and Properties

A `UseCaseHandler` exposes:

### Methods

#### `getUseCase()`

Instantiates the use case function from port implementations.

```typescript
function getUseCase(
	ports: Ports
): UseCase
```

### Properties

#### `dependencies`

The definition of dependencies (port handlers and/or use case handlers).

## See also

- [`repository`](/en/v1/api/clean/repository)
- [`port`](/en/v1/api/clean/port)
