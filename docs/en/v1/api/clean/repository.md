---
outline: [2, 3]
description: "A repository is an abstraction layer between the application and the infrastructure. It encapsulates business operations on data by hiding technical details, thus allowing the application layer to manipulate business data without worrying about their technical implementation."
prev:
  text: "appendEvidence"
  link: "/en/v1/api/clean/appendEvidence"
next:
  text: "Port"
  link: "/en/v1/api/clean/port"
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

`C.createRepository<GenericRepository>()` is a wrapper over `C.createPort<GenericRepository>()`.
It is only a semantic alias to keep repository naming in your codebase.

::: info
`createRepository` has the exact same behavior as `createPort`: same typing, same runtime behavior, same returned handler.
:::

## Declare a contract

The contract of a repository is generally an interface of the application layer (e.g. `findById`, `save`, ...). Internally, this contract is handled by the same machinery as a port contract.
Depending on the context, this declaration can also be made in the domain layer to link aggregates at the type level with specific repository input or return types.

Once the handler is created, you can pass it as a dependency to `C.createUseCase(...)` and instantiate the use case with a real implementation (infrastructure layer).

## Methods and Properties

Because `createRepository` delegates to `createPort`, it exposes the same handler API:

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
