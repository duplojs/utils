---
outline: [2, 3]
description: "A repository is an abstraction layer between the application and the infrastructure. It encapsulates business operations on data by hiding technical details, thus allowing the application layer to manipulate business data without worrying about their technical implementation."
prev:
  text: "Flag"
  link: "/en/v1/api/clean/flag"
next:
  text: "UseCase"
  link: "/en/v1/api/clean/useCase"
---

# Repository

A `repository` is an abstraction layer between the application and the infrastructure. It encapsulates business operations on data by hiding technical details, thus allowing the application layer to manipulate business data without worrying about their technical implementation.

## Example

<MonacoTSEditor
  src="/examples/v1/api/clean/repository/tryout.doc.ts"
  majorVersion="v1"
  height="650px"
  :foldLines="[3, 28]"
/>

## How it works

`C.createRepository<GenericRepository>()` returns a **repository handler**.
Its goal is simple: force you to provide an implementation that exactly matches the `GenericRepository` contract (parameters, returns, async, etc.).

::: info
This helper is intentionally minimal: it provides no runtime logic. Its value is in typing and composition with [useCase](/en/v1/api/clean/useCase).
:::

## Declare a contract

The contract of a repository is generally an interface of the application layer (e.g. `findById`, `save`, ...).

Once the handler is created, you can pass it as a dependency to `C.createUseCase(...)` and instantiate the use case with a real implementation (infrastructure layer).

## Methods and Properties

A `RepositoryHandler<GenericRepository>` exposes:

### Methods

#### `createImplementation()`

Returns the provided implementation, ensuring it matches the contract.

```typescript
function createImplementation(
	implementation: GenericRepository
): GenericRepository
```

## See also

- [`useCase`](/en/v1/api/clean/useCase)
