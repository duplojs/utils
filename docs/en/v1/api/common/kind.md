---
outline: [2, 3]
description: "Kinds are a discrimination (type narrowing) mechanism based on adding a marker to an object, but with a few constraints we wanted in our projects:"
prev:
  text: "justReturn"
  link: "/en/v1/api/common/justReturn"
next:
  text: "loop"
  link: "/en/v1/api/common/loop"
---

# kind

**Kinds** are a **discrimination** (type narrowing) mechanism based on adding a marker to an object, but with a few constraints we wanted in our projects:

- **Stringification**: the marker remains after a `JSON.stringify()` / `JSON.parse()`.
- **Not accessible as a regular property**: the marker must not become a “normal” property accessible in your model.
- **Cumulative**: the same object can carry several kinds (and thus be filterable on several axes).

::: warning
It is a “sleight of hand” between TypeScript typing and runtime (see `scripts/common/kind.ts`). We use it everywhere internally, but it is not necessarily a pattern to reproduce in every project.
:::

## Context: discriminating a union

The two examples below show classic solutions to discriminate a union, with their trade-offs.

### Solution 1: `instanceof` (classes)

<MonacoTSEditor
  src="/examples/v1/api/common/kind/withClass.doc.ts"
  majorVersion="v1"
  height="2224px"
/>

The main drawback is that after a JSON pass (or any transport), the instance is lost and we fall back to “flat” objects that are no longer identifiable.

### Solution 2: discriminant property (e.g. `kind`)

<MonacoTSEditor
  src="/examples/v1/api/common/kind/withPorp.doc.ts"
  majorVersion="v1"
  height="2035px"
/>

This approach is very effective, but the discriminant becomes a “business” property: it is accessible, serialized, and can collide with external data.

## Our approach: `createKind()`

A kind is created by `createKind(name)`. The returned handler allows:

- **adding** the kind to an object (`addTo`)
- **testing** whether an object carries this kind (`has`)
- **reading** its value (`getValue`)

At runtime, `addTo` adds a **string property** (prefixed) so the data survives stringification.  
At the typing level, `Kind<...>` uses a **`Symbol`** to “hide” this info and prevent it from being handled as a normal prop.

<MonacoTSEditor
  src="/examples/v1/api/common/kind/withKind.doc.ts"
  majorVersion="v1"
  height="2182px"
/>

### Kind accumulation

You can accumulate several kinds on the same object by calling `addTo` multiple times (on different handlers). Each kind is stored under a different runtime key, so they do not collide.

## Syntax

### `createKind`

```typescript
function createKind<
	GenericName extends string,
	GenericKindValue = unknown
>(
	name: GenericName
): KindHandler<KindDefinition<GenericName, GenericKindValue>>;
```

Constraints on `name`:
- must not contain `@` or `/` (reserved for namespaced format)

### `createKindNamespace`

```typescript
function createKindNamespace<
	GenericNamespace extends string
>(namespace: GenericNamespace): <
	GenericName extends string,
	GenericKindValue = unknown
>(
	name: GenericName
) => KindHandler<KindDefinition<`@${GenericNamespace}/${GenericName}`, GenericKindValue>>;
```

`createKindNamespace("MyNamespace")("myKind")` produces a kind named `@MyNamespace/myKind`.

## Parameters and return (handler)

A `KindHandler` exposes notably:

- `definition.name` : the “logical” name of the kind (e.g. `"paymentRejected"` or `"@MyNs/myKind"`)
- `runTimeKey` : the key actually used on the object at runtime (prefixed `@duplojs/utils/kind/...`)
- `addTo(input, value?)` : returns a copy of `input` carrying the kind (without mutation)
- `has(input)` : type guard (allows narrowing a union)
- `getValue(input)` : reads the value associated with the kind
- `setTo(input, value?)` : **deprecated** (mutating)

## Minimal example

<MonacoTSEditor
  src="/examples/v1/api/common/kind/use.doc.ts"
  majorVersion="v1"
  height="796px"
/>

## See also

- [`instanceOf`](/en/v1/api/common/instanceOf) - Alternative around `instanceof`
- [`isType`](/en/v1/api/common/isType) - Utility type guards
