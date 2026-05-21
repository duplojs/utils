---
outline: [2, 3]
description: "chainedFunction declares a typed aggregate of pure business actions that must run in order. The use case then orchestrates ports around that aggregate."
prev:
  text: "UseCase"
  link: "/en/v1/api/clean/useCase"
next:
  text: "Clean"
  link: "/en/v1/api/clean/"
---

# chainedFunction

`chainedFunction` solves a Clean Architecture coordination problem: inside a use case, you sometimes need to associate operations that update different entities. The chained function represents the aggregate that makes those operations part of the same business consistency boundary.

It lets the domain explicitly declare that several pure business actions are linked. Functions passed to `chainedFunction` do not inject dependencies and do not call ports: they only control entity lifecycle from the business point of view. The use case then orchestrates the aggregate, ports, and technical effects.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/clean/chainedFunction/tryout.doc.ts"
  majorVersion="v1"
  height="1910px"
  :foldLines="[2, 7, 13, 18, 22, 87]"
/>

## Why use it?

Use `chainedFunction` when a business aggregate is only consistent if several named operations happen together.

For example, publishing a comment can require:

- producing a valid comment entity;
- producing an updated article entity.

Persistence stays in the use case through the library port system. The chained function only models the aggregate contract: "creating the comment" and "incrementing the article comment count" are linked business actions.

::: info
In this context, `repository` remains a semantic alias of `port` through `createRepository`.
:::

## Guarantees

`chainedFunction` provides these guarantees at the type level:

- links are exposed one after another, in declaration order;
- the implementation cannot access a later link before calling the current one;
- the success path must end with `chainEnd(...)`;
- a chained function can stop the flow by returning an `Either.Left`;
- the implementation can also return an `Either.Left` directly.
- chained functions remain pure domain functions.

## Syntax

### Signature

```typescript
function chainedFunction(
	function1: [name: string, fn: Function, requirements?: C.RequirementsChainedFunction],
	function2: [name: string, fn: Function, requirements?: C.RequirementsChainedFunction],
	...functions: [name: string, fn: Function, requirements?: C.RequirementsChainedFunction][]
): ChainedFunction
```

### Implementation

```typescript
const aggregate = chainedFunction(...functions);

const result = aggregate(function *(firstLink, { breakIfLeft }) {
	const [value, nextLink] = yield *firstLink(({ functionName }) => functionName(...args));

	return chainEnd(value);
});
```

## Parameters

- `function1`: first pure business function in the chain.
- `function2`: second pure business function in the chain.
- `functions`: additional pure business functions, executed in declaration order.
- `requirements` (optional tuple item on each function): typed required values that must be provided when calling the link generated for that function.
- `firstLink`: generated first link passed to the implementation callback.
- `breakIfLeft`: synchronous helper injected into the callback. It accepts a value that may contain an `Either.Left`, stops the chain when it is a `Left`, otherwise returns the discriminated non-`Left` value.

## Return value

`chainedFunction(...)` returns a chained aggregate function. Calling it returns:

- the raw value passed to `chainEnd(value)` on the success path;
- the `Either.Left` returned by a chained function;
- the `Either.Left` returned directly by the implementation.

## Error flow

When a chained function returns an `Either.Left`, the generator yields it and `chainedFunction` stops the implementation before the next links run. Business errors should be represented as `Either.Left`; thrown exceptions and rejected promises are not caught.

`breakIfLeft` follows the same rule from inside the callback: use it to explicitly short-circuit from an intermediate synchronous value (`value | Left`) before calling the next link.

## Requirements and lifecycle invariants

`requirements` are a typing tool for business lifecycle control. They force callers to provide specific typed values before a link can run.

Those values are not necessarily useful as runtime arguments for the next function. Their primary purpose is to prove, at compile time, that prerequisite information has been acquired earlier in the flow (validation done, authorization context loaded, prior step completed, etc.).

## Requirements example

<MonacoTSEditor
  src="/examples/v1/api/clean/chainedFunction/otherExample.doc.ts"
  majorVersion="v1"
  height="1069px"
/>

## See also

- [`useCase`](/en/v1/api/clean/useCase) - Calls application logic with dependencies.
- [`port`](/en/v1/api/clean/port) - Declares a port contract.
- [`repository`](/en/v1/api/clean/repository) - Semantic alias of `createPort`.
- [`Either`](/en/v1/api/either/) - Represents explicit success and error values.
