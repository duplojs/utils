---
outline: [2, 3]
prev:
  text: "asyncLoop"
  link: "/en/v1/api/common/asyncLoop"
next:
  text: "promiseObject"
  link: "/en/v1/api/common/promiseObject"
---

# externalPromise

The **`createExternalPromise()`** function creates a promise controllable from the outside: it exposes `resolve`, `reject`, and the associated promise.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/common/externalPromise/tryout.doc.ts"
  majorVersion="v1"
  height="220px"
/>

## Syntax

```typescript
function createExternalPromise<
	GenericPromiseValue extends unknown
>(): {
	resolve: (_value: GenericPromiseValue | Awaited<GenericPromiseValue> | Promise<GenericPromiseValue>) => void;
	reject: (_value: unknown) => void;
	promise: Promise<Awaited<GenericPromiseValue>>;
};
```

## Parameters

This function takes no parameters.

## Return value

An object with:
- `resolve` : to resolve the promise with a value or a promise.
- `reject` : to reject the promise.
- `promise` : the controlled promise.

## See also

- [`promiseObject`](/en/v1/api/common/promiseObject) - Resolves an object of promises
