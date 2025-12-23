---
outline: [2, 3]
prev:
  text: "Repository"
  link: "/en/v1/api/clean/repository"
next:
  text: "Clean"
  link: "/en/v1/api/clean/"
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

- **the declaration** of the use case: its dependencies (repositories and/or other use cases) + the factory that builds the final function
- **the instantiation** of the use case: provide concrete implementations of the repositories (infrastructure) to obtain the executable function

A `UseCase` can depend on another `UseCaseHandler`. In this case, instantiation is handled automatically: `getUseCase(...)` resolves the sub-use-cases from the same `repositories` object.

## Create a `UseCase`

Creating a use case means defining:

- its dependencies (repositories and/or use cases)
- a factory that receives these **instantiated** dependencies and returns the use case function

## Instantiate a `UseCase`

To get the executable function, call:
- `useCaseHandler.getUseCase({ ...repositories })`

This pattern facilitates injection, testing, and keeps the application layer independent of infrastructure details.

## Instantiate multiple `UseCase` (`C.useCaseInstances`)

When you have multiple use cases to instantiate, `C.useCaseInstances(...)` avoids repeating `getUseCase(...)` everywhere.

It takes:
- an object `{ key: useCaseHandler }`
- an object `{ key: repositoryImplementation }`

And returns:
- an object `{ key: useCaseFunction }` (same keys as the starting object)

`useCaseInstances` also supports dependencies of type `UseCaseHandler`: sub-use-cases are instantiated automatically from the same repositories object.

## Methods and Properties

A `UseCaseHandler` exposes:

### Methods

#### `getUseCase()`

Instantiates the use case function from repository implementations.

```typescript
function getUseCase(
	repositories: Repositories
): UseCase
```

### Properties

#### `dependencies`

The definition of dependencies (repository handlers and/or use case handlers).

## See also

- [`repository`](/en/v1/api/clean/repository)
