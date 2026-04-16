---
outline: [2, 3]
description: "The memoObject() function builds a proxy around a memoized object. The getter is evaluated once, then reads/writes target the same reference."
prev:
  text: "memo"
  link: "/en/v1/api/common/memo"
next:
  text: "memoPromise"
  link: "/en/v1/api/common/memoPromise"
---

# memoObject

The **`memoObject()`** function builds a proxy around a memoized object. The getter is evaluated lazily on first access, then all reads/writes target the same object.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/common/memoObject/tryout.doc.ts"
  majorVersion="v1"
  height="355px"
/>

## Syntax

```typescript
function memoObject<
	GenericOutput extends object
>(
	getter: () => GenericOutput
): GenericOutput;
```

## Parameters

- `getter` : Function called on first access to produce the proxied object.

## Return value

A proxied `GenericOutput` object:
- reads (`obj.prop`) return values from the memoized object;
- writes (`obj.prop = value`) mutate the memoized object;
- `Object.keys()` and the `in` operator reflect keys after writes.

## See also

- [`memo`](/en/v1/api/common/memo) - Lazy memoization for synchronous values
- [`memoPromise`](/en/v1/api/common/memoPromise) - Lazy memoization for async-capable values
- [`override`](/en/v1/api/common/override) - Override methods and default properties on an object
