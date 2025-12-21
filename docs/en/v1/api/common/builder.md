---
outline: [2, 3]
prev:
  text: "globalStore"
  link: "/en/v1/api/common/globalStore"
next:
  text: "override"
  link: "/en/v1/api/common/override"
---

# builder

The **`createBuilder()`** function lets you create a **builder** whose methods can be **defined after declaration** (and even redefined) while keeping **strict typing**.

The idea: you declare a builder interface (method signatures), then you “plug” the implementation of these methods via `handler.set(...)`. The builder is then usable via `handler.use(accumulator)` with fluent chaining.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/common/builder/tryout.doc.ts"
  majorVersion="v1"
  height="820px"
/>

## Why is it easily overridable?

Methods are stored in a global store **by builder name** (`builderName`). This allows:

- defining methods in different modules (plugin-like)
- **redefining** a method later (the “last set wins”)
- having an instantiated builder (via `use`) that always uses the store methods

## Extension via interface override (“dynamic” methods)

In addition to runtime override (`handler.set(...)`), you can also **extend the builder typing** through TypeScript **interface merging**, which lets you add new methods “dynamically” (on the type side) from another module.

Example (plugin pattern):

```typescript
// urlBuilder.ts
export interface UrlBuilder extends Builder<UrlAccumulator> {
	path(segment: string): UrlBuilder;
	build(): string;
}
export const urlBuilderHandler = createBuilder<UrlBuilder>("urlBuilder");
```

```typescript
// plugin-auth.ts (elsewhere)
import { urlBuilderHandler } from "./urlBuilder";

declare module "./urlBuilder" {
	interface UrlBuilder {
		auth(token: string): UrlBuilder;
	}
}

urlBuilderHandler.set("auth", ({ args, accumulator, next }) => {
	const [token] = args;
	return next({
		...accumulator,
		query: { ...accumulator.query, token },
	});
});
```

The method becomes available both:
- at runtime (because you registered it via `set`)
- at compile time (because the `UrlBuilder` interface was augmented)

## Syntax

```typescript
interface Builder<
	GenericAccumulator extends object = object
> {}

interface BuilderHandler<
	GenericBuilder extends Builder = Builder
> {
	set(
		method: keyof GenericBuilder,
		theFunction: (params: {
			args: unknown[];
			accumulator: object;
			next(newAccumulator: object): unknown;
		}) => unknown
	): BuilderHandler<GenericBuilder>;

	use(accumulator: object): GenericBuilder;
}

function createBuilder<
	GenericBuilder extends Builder
>(
	builderName: string
): BuilderHandler<GenericBuilder>;
```

## Usage notes

- **Accumulator**: this is the internal object your builder evolves. It is typed via `Builder<YourAccumulator>`.
- **Chaining**: for a method that returns the builder, the implementation must return `params.next(newAccumulator)` (this lets the runtime know it must continue the chain).
- **Errors**: calling a method not defined via `set` throws a `MissingBuilderMethodsError`.

## See also

- [`globalStore`](/en/v1/api/common/globalStore) - Global per-process storage
- [`kind`](/en/v1/api/common/kind) - Runtime/type tag used internally
