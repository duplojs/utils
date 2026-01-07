---
outline: [2, 3]
description: "The createGlobalStore() function lets you create a global store (singleton) shared across the entire process. It is useful for storing a mutable value accessible from any module without passing it as a parameter."
prev:
  text: "createEnum"
  link: "/en/v1/api/common/createEnum"
next:
  text: "builder"
  link: "/en/v1/api/common/builder"
---

# globalStore

The **`createGlobalStore()`** function lets you create a **global store** (singleton) shared across the **entire process**. It is useful for storing a mutable value accessible from any module without passing it as a parameter.

::: warning
The store is global and mutable: avoid turning it into a “state manager”. Do not share values between requests if your runtime is long-lived (HTTP server), unless explicitly intended.
:::

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/common/globalStore/tryout.doc.ts"
  majorVersion="v1"
  height="630px"
/>

## Typing: declare your stores

The store name (`storeName`) is typed via the `GlobalStore` interface. To add your keys and their types, use declaration merging:

```typescript
declare module "@duplojs/utils" {
	interface GlobalStore {
		myStore: number;
	}
}
```

## Syntax

```typescript
interface GlobalStoreHandler<
	GenericValue extends unknown
> {
	readonly value: GenericValue;
	set(value: GenericValue): void;
}

function createGlobalStore<
	GenericStoreName extends keyof GlobalStore
>(
	storeName: GenericStoreName,
	defaultValue: GlobalStore[GenericStoreName]
): GlobalStoreHandler<GlobalStore[GenericStoreName]>;
```

## Parameters

- `storeName` : Typed store name (key of `GlobalStore`).
- `defaultValue` : Value used only if the store does not exist yet.

## Return value

A handler with:
- `value` : the current value.
- `set(value)` : updates the global value.
