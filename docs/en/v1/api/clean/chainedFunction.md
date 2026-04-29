---
outline: [2, 3]
description: "chainedFunction declares a typed aggregate of pure business actions that must run in order. The use case then orchestrates repositories around that aggregate."
prev:
  text: "UseCase"
  link: "/en/v1/api/clean/useCase"
next:
  text: "Clean"
  link: "/en/v1/api/clean/"
---

# chainedFunction

`chainedFunction` solves a Clean Architecture coordination problem: inside a use case, you sometimes need to associate operations that update different entities. The chained function represents the aggregate that makes those operations part of the same business consistency boundary.

It lets the domain explicitly declare that several pure business actions are linked. Functions passed to `chainedFunction` do not inject dependencies and do not call repositories: they only control entity lifecycle from the business point of view. The use case then orchestrates the aggregate, repositories, and technical effects.

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

Persistence stays in the use case through the library repository system. The chained function only models the aggregate contract: "creating the comment" and "incrementing the article comment count" are linked business actions.

## Guarantees

`chainedFunction` provides these guarantees at the type level:

- links are exposed one after another, in declaration order;
- the implementation cannot access a later link before calling the current one;
- the success path must end with `chainEnd(...)`;
- a chained function can stop the flow by returning an `Either.Left`;
- the implementation can also return an `Either.Left` directly.
- chained functions remain pure domain functions.

## Syntax

### Classic signature

```typescript
function chainedFunction(
	function1: [name: string, fn: Function],
	function2: [name: string, fn: Function],
	...functions: [name: string, fn: Function][]
): ChainedFunction
```

### Implementation signature

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

## See also

- [`useCase`](/en/v1/api/clean/useCase) - Calls application logic with dependencies.
- [`repository`](/en/v1/api/clean/repository) - Declares a repository contract.
- [`Either`](/en/v1/api/either/) - Represents explicit success and error values.
