---
prev:
  text: "Quick Start"
  link: "/en/v1/guide/quickStart"
next:
  text: "Pipe"
  link: "/en/v1/guide/pipe"
---
# Currying

[[toc]]

## The idea

**Currying** transforms a function that takes multiple parameters into a chain of functions that each take **one parameter**.

Starting from:

```ts
f(a, b)
```

the curried version becomes:

```ts
f(a)(b)
```

The main benefit is the ability to **fix part of the parameters** (also called *partial application*) to create more specialized functions.

## How it works in `@duplojs/utils`

In this library, most functions with **at least two parameters** support:
- a **classic** form: call the function in one go;
- a **curried** form: provide the configuration first, then get a function that expects the data.

Technically, this is implemented via **TypeScript overloads**: a single exported symbol, two ways to call it.

## Simple example: `A.map`

```ts
import { A } from "@duplojs/utils";

// classic
const doubled1 = A.map([1, 2, 3], (n) => n * 2);

// curried (fix the transformation)
const input = [1, 2, 3] as const;
const doubleAll = A.map<typeof input, number>((n) => n * 2);
const doubled2 = doubleAll(input);
```

## Partial application: “build” functions

The idea is to create small reusable building blocks, for example:

```ts
import { O } from "@duplojs/utils";

type Person = { name: string; age: number };
const getName = O.getProperty<Person, Person, "name">("name");
const name = getName({ name: "Ada", age: 36 });
```

Or, to prepare a predicate and reuse it:

```ts
import { A, N } from "@duplojs/utils";

const isGreaterThan10 = N.greaterThan(10);
const values = A.filter([2, 12, 7, 42], (n) => isGreaterThan10(n));
```

## Takeaways

- The curried form is mostly for **pre-configuring** a function (key, threshold, mapping, predicate...) and reusing it.
- The classic form is handy when you have **all values at hand** in one place.

## Try it

<MonacoTSEditor
src="/examples/v1/guide/curryfication/tryout.doc.ts"
majorVersion="v1"
height="950px"
/>
