---
outline: [2, 3]
description: "A port is an abstraction contract between the application layer and external systems. It defines capabilities required by use cases while keeping infrastructure details out of business code."
prev:
  text: "Repository"
  link: "/en/v1/api/clean/repository"
next:
  text: "UseCase"
  link: "/en/v1/api/clean/useCase"
---

# Port

A `port` is an abstraction contract between the application layer and external systems. It defines capabilities required by use cases while keeping infrastructure details out of business code.

## Example

<MonacoTSEditor
  src="/examples/v1/api/clean/port/tryout.doc.ts"
  majorVersion="v1"
  height="650px"
  :foldLines="[3, 28]"
/>

## How it works

`C.createPort<GenericPort>()` returns a **port handler**.
Its goal is simple: force you to provide an implementation that exactly matches the `GenericPort` contract (parameters, returns, async, etc.).

::: info
This helper is intentionally minimal: it provides no runtime logic. Its value is in typing and composition with [useCase](/en/v1/api/clean/useCase).
:::

## Declare a contract

The contract of a port is generally an interface of the application layer (e.g. `send`, `notify`, `publish`, ...).

Once the handler is created, you can pass it as a dependency to `C.createUseCase(...)` and instantiate the use case with a real implementation (infrastructure layer).

## Methods and Properties

A `PortHandler<GenericPort>` exposes:

### Methods

#### `createImplementation()`

Returns the provided implementation, ensuring it matches the contract.

```typescript
function createImplementation(
	implementation: GenericPort
): GenericPort
```

## See also

- [`repository`](/en/v1/api/clean/repository)
- [`useCase`](/en/v1/api/clean/useCase)
