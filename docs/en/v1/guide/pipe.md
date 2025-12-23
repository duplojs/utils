---
prev:
  text: "Currying"
  link: "/en/v1/guide/currying"
next:
  text: "Either"
  link: "/en/v1/guide/either"
---

# Pipe

[[toc]]

## The idea

A **pipe** chains functions by passing the output of one as the input of the next.

With `@duplojs/utils`, the `pipe` function takes:
- an initial value;
- then a list of **unary** functions (single input) executed in order.

```ts
import { pipe } from "@duplojs/utils";

const result = pipe(
	"hello",
	(str) => str.toUpperCase(),
	(str) => `${str}!`,
);
// result === "HELLO!"
```

The main benefit is replacing nested calls or intermediate variables with a top-to-bottom flow.

## How it works in `@duplojs/utils`

The library is designed for functional style: most functions (in `A`, `O`, `N`, etc.) support a **classic** and a **curried** form.

Currying matters here: a pipeline expects functions of type `(input) => output`, and the curried form lets you pre-configure a function so it becomes **unary**.

### Without currying (less convenient)

Without currying, you often need wrappers:

```ts
import { A, pipe } from "@duplojs/utils";

const numbers = [2, 12, 7, 42];

const doubled = pipe(
	numbers,
	(input) => A.filter(input, (num) => num > 10),
	(input) => A.map(input, (num) => num * 2),
);
```

### With curried functions (recommended)

With `@duplojs/utils`, you can pre-configure each step:

```ts
import { A, N, pipe } from "@duplojs/utils";

const numbers = [2, 12, 7, 42];
const isGreaterThan10 = N.greaterThan(10);

const count = pipe(
	numbers,
	A.filter(isGreaterThan10),
	A.map((num) => num * 2),
	A.length,
);
// count === 2
```

Here:
- `N.greaterThan(10)` returns a predicate `(num) => boolean`
- `A.filter(predicate)` returns a function `(array) => filteredArray`
- `A.map(mapper)` returns a function `(array) => mappedArray`

## Why it looks like a “builder” (without its downsides)

A pipeline can feel similar to the **Builder** design pattern: you describe a sequence of steps, in a readable order, to get a final result.

The difference is that the pipe relies on **imported pure functions**:
- **tree-shaking**: you only import (and bundle) the functions actually used in your pipeline, instead of depending on a builder object exposing a large method set;
- **customization**: you can insert any function (from the library or your project) at any step without extending a class, adding methods, or building a generic builder;
- **typing**: curried functions + pipe preserve precise typing at each step, whereas making a highly customizable builder with advanced typing quickly gets complex.

## Handling conditional branches (`when`, `whenNot`)

In a pipeline, you often want **conditional** steps: apply a transformation only if a condition is true.

`@duplojs/utils` provides helpers like `when` and `whenNot` for that.

The key point (sometimes confusing at first): `when` **can change the shape of the flow**.
If `when` sometimes returns a transformed value and sometimes the original value, the output type becomes a **union**, and the next steps must handle both cases.

```ts
import { S, pipe, when } from "@duplojs/utils";

const maybeTokens = pipe(
	"foo,bar",
	when(
		S.includes(","),
		S.split(","),
	),
);
// Type: string | string[]
```

If you want a simpler flow, one approach is to **normalize** right after: for example, always output an array.

```ts
import { S, isType, pipe, when, whenNot } from "@duplojs/utils";

const tokens = pipe(
	"foo,bar",
	when(
		S.includes(","),
		S.split(","),
	),
	whenNot(
		isType("array"),
		(value) => [value],
	),
);
// Type: string[]
```

### Try it (conditionals)

<MonacoTSEditor
src="/examples/v1/guide/pipe/conditionals.doc.ts"
majorVersion="v1"
height="780px"
/>

A few tips if the flow feels complex:
- apply a **normalization** step quickly (e.g. always an array) when a conditional step introduces a union;
- keep predicates and transformations **named** (small functions);

## Point-free style

**Point-free style** (or “tacit”) means defining a function **without explicitly naming its argument**, by composing functions instead.

In `@duplojs/utils`, `innerPipe` is especially useful: it is the “prepared” version of `pipe` that returns a reusable function.

```ts
import { A, N, innerPipe } from "@duplojs/utils";

const normalizeNumbers = innerPipe(
	(numbers: number[]) => numbers,
	A.filter(N.greaterThan(10)),
	A.map((num) => num * 2),
);

const result = normalizeNumbers([2, 12, 7, 42]);
```

Point-free is most useful when:
- you want to **reuse** a pipeline in multiple places;
- you want to **name** transformations (small building blocks) rather than intermediate values.

If it hurts readability, keep a more explicit style: the goal is clarity, not “point-free at all costs.”

## Tip: inspect a pipeline

When you want to log in the middle without breaking the flow, use `forwardLog`:

```ts
import { A, N, forwardLog, pipe } from "@duplojs/utils";

const output = pipe(
	[2, 12, 7, 42],
	A.filter(N.greaterThan(10)),
	forwardLog,
	A.map((num) => num * 2),
);
```

## Takeaways

- `pipe(input, f1, f2, ...)` runs the functions in order.
- **Curried** forms turn utilities into unary functions, ideal for piping.
- `innerPipe(f1, f2, ...)` helps with **point-free** by preparing a reusable function.

## Try it

<MonacoTSEditor
src="/examples/v1/guide/pipe/tryout.doc.ts"
majorVersion="v1"
height="1270px"
/>
